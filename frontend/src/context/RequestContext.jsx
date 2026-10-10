import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  MOCK_USER,
  MOCK_AMBULANCES,
  MOCK_DRIVERS,
  MOCK_HOSPITALS,
  INITIAL_RECENT_REQUESTS
} from '../data/mockData';

const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  // Temporary request draft during multi-step booking
  const [draftLocation, setDraftLocation] = useState({
    pickupAddress: MOCK_USER.currentLocation.address,
    lat: MOCK_USER.currentLocation.lat,
    lng: MOCK_USER.currentLocation.lng,
    landmark: MOCK_USER.currentLocation.landmark,
    destinationHospital: MOCK_HOSPITALS[0]
  });

  const [draftPatient, setDraftPatient] = useState({
    patientName: MOCK_USER.name,
    patientAge: '45',
    patientGender: 'Male',
    emergencyType: 'Heart Emergency',
    contactNumber: MOCK_USER.phone,
    additionalNotes: 'Patient experiencing sudden tightness in chest, conscious, 2nd floor with elevator.'
  });

  const [selectedAmbulance, setSelectedAmbulance] = useState(MOCK_AMBULANCES[0]);

  // Active Live Emergency Request (persisted to localStorage)
  const [activeRequest, setActiveRequest] = useState(() => {
    const saved = localStorage.getItem('resqai_active_request');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return null;
  });

  // Recent Completed Requests History
  const [recentRequests, setRecentRequests] = useState(() => {
    const saved = localStorage.getItem('resqai_recent_requests');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_RECENT_REQUESTS;
  });

  // Keep localStorage synced
  useEffect(() => {
    if (activeRequest) {
      localStorage.setItem('resqai_active_request', JSON.stringify(activeRequest));
    } else {
      localStorage.removeItem('resqai_active_request');
    }
  }, [activeRequest]);

  useEffect(() => {
    localStorage.setItem('resqai_recent_requests', JSON.stringify(recentRequests));
  }, [recentRequests]);

  // Create & Dispatch new request
  const submitEmergencyRequest = (customAmbulance = null) => {
    const amb = customAmbulance || selectedAmbulance || MOCK_AMBULANCES[0];
    const driver = MOCK_DRIVERS.find((d) => d.assignedAmbulanceId === amb.id) || MOCK_DRIVERS[0];
    const newReqId = `REQ-${Math.floor(1000 + Math.random() * 9000)}`;

    const newReq = {
      id: newReqId,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      timestamp: Date.now(),
      patientName: draftPatient.patientName || 'Emergency Patient',
      patientAge: draftPatient.patientAge || '40',
      patientGender: draftPatient.patientGender || 'Unspecified',
      emergencyType: draftPatient.emergencyType || 'Medical Emergency',
      contactNumber: draftPatient.contactNumber || '+91 98765 43210',
      additionalNotes: draftPatient.additionalNotes || 'Immediate assistance requested',
      pickupLocation: {
        address: draftLocation.pickupAddress,
        lat: draftLocation.lat,
        lng: draftLocation.lng,
        landmark: draftLocation.landmark
      },
      destinationHospital: draftLocation.destinationHospital || MOCK_HOSPITALS[0],
      ambulance: amb,
      driver: driver,
      status: 'REQUESTED',
      etaMinutes: amb.etaMinutes || 6,
      distanceKm: amb.distanceVal || 2.1,
      timeline: [
        {
          stage: 'REQUESTED',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          note: 'Emergency request received and broadcasted to nearest ALS fleet.'
        }
      ]
    };

    setActiveRequest(newReq);
    return newReq;
  };

  // Update Request Status in workflow
  const updateRequestStatus = (newStatus, extraData = {}) => {
    setActiveRequest((prev) => {
      if (!prev) return null;
      const stageEvent = {
        stage: newStatus,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        note: extraData.note || `Status transitioned to ${newStatus}`
      };

      const updated = {
        ...prev,
        ...extraData,
        status: newStatus,
        timeline: [...(prev.timeline || []), stageEvent]
      };
      return updated;
    });
  };

  // Complete and rate trip
  const completeTrip = (rating = 5, feedback = '') => {
    if (!activeRequest) return;
    const completedReq = {
      ...activeRequest,
      status: 'COMPLETED',
      rating,
      feedback,
      completedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      duration: '18 mins',
      distance: `${activeRequest.distanceKm || 2.1} km`
    };

    setActiveRequest(completedReq);
    setRecentRequests((prev) => [
      {
        id: completedReq.id,
        date: 'Just now',
        patientName: completedReq.patientName,
        emergencyType: completedReq.emergencyType,
        ambulanceNumber: completedReq.ambulance.vehicleNumber,
        driverName: completedReq.driver.name,
        pickupLocation: completedReq.pickupLocation.address,
        destinationHospital: completedReq.destinationHospital.name,
        status: 'COMPLETED',
        duration: '18 mins',
        distance: `${completedReq.distanceKm || 2.1} km`,
        rating
      },
      ...prev
    ]);
  };

  // Close Request and clear active state
  const closeCurrentRequest = () => {
    setActiveRequest(null);
    localStorage.removeItem('resqai_active_request');
  };

  return (
    <RequestContext.Provider
      value={{
        draftLocation,
        setDraftLocation,
        draftPatient,
        setDraftPatient,
        selectedAmbulance,
        setSelectedAmbulance,
        activeRequest,
        setActiveRequest,
        recentRequests,
        submitEmergencyRequest,
        updateRequestStatus,
        completeTrip,
        closeCurrentRequest
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export const useRequest = () => useContext(RequestContext);
