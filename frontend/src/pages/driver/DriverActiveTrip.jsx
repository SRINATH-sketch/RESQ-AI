import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Navigation,
  MapPin,
  Building2,
  Phone,
  CheckCircle2,
  Clock,
  HeartPulse,
  User,
  ShieldCheck,
  Ambulance,
  ArrowRight
} from 'lucide-react';
import { useRequest } from '../../context/RequestContext';
import { MockMap } from '../../components/map/MockMap';
import { MOCK_HOSPITALS, MOCK_AMBULANCES } from '../../data/mockData';

export const DriverActiveTrip = () => {
  const navigate = useNavigate();
  const { activeRequest, updateRequestStatus, completeTrip } = useRequest();

  // Fallback demo request if driver navigated directly
  const tripData = activeRequest || {
    id: 'REQ-DEMO-9901',
    patientName: 'Kavitha Raman',
    patientAge: 52,
    patientGender: 'Female',
    emergencyType: 'Heart Emergency',
    contactNumber: '+91 98400 99887',
    pickupLocation: {
      address: 'Plot 42, 2nd Avenue, Anna Nagar West, Chennai',
      landmark: 'Near Roundtana Metro'
    },
    destinationHospital: MOCK_HOSPITALS[0],
    ambulance: MOCK_AMBULANCES[0],
    status: 'ON_THE_WAY'
  };

  const currentStatus = tripData.status || 'ON_THE_WAY';

  const handleArrived = () => {
    updateRequestStatus('ARRIVED', {
      note: 'Driver confirmed arrival at patient doorstep.'
    });
  };

  const handlePatientPickedUp = () => {
    updateRequestStatus('PATIENT_PICKED_UP', {
      note: 'Patient safely boarded into ambulance. Transiting to Hospital.'
    });
  };

  const handleTripCompleted = () => {
    completeTrip(5, 'Safe and rapid transit with clean clinical handover.');
    navigate('/driver/dashboard');
  };

  return (
    <div className="active-trip-root container">
      {/* Top Driver Navigation HUD Strip */}
      <div className="driver-nav-hud glass-panel glow-red">
        <div className="hud-status-col">
          <span className="live-gps-pill">
            <span className="live-gps-dot"></span>
            <span>ACTIVE DISPATCH CONSOLE • VEHICLE {tripData.ambulance?.vehicleNumber || 'TN-01-AB-1234'}</span>
          </span>
          <h1 className="hud-heading">
            {currentStatus === 'ON_THE_WAY'
              ? 'En Route to Patient Pickup'
              : currentStatus === 'ARRIVED'
              ? 'Arrived at Pickup Location'
              : currentStatus === 'PATIENT_PICKED_UP' || currentStatus === 'AT_HOSPITAL'
              ? 'En Route to Emergency Hospital Bay'
              : 'Emergency Run Finished'}
          </h1>
          <span className="current-status-tag">
            STATUS: <strong>{currentStatus.replace(/_/g, ' ')}</strong>
          </span>
        </div>

        {/* Turn by turn cue */}
        <div className="nav-turn-box">
          <Navigation size={22} color="#38bdf8" />
          <div>
            <span className="turn-distance">IN 200 METERS</span>
            <h4 className="turn-instruction">
              {currentStatus === 'PATIENT_PICKED_UP'
                ? 'Turn Left onto Greams Road Trauma Bay'
                : 'Turn Right onto 2nd Avenue Anna Nagar'}
            </h4>
          </div>
        </div>
      </div>

      {/* Main 2-Column Grid */}
      <div className="driver-trip-grid">
        {/* Left Column: Navigation Map */}
        <div className="trip-map-col glass-panel">
          <div className="map-col-header">
            <span className="map-label">LIVE ROAD CORRIDOR & SATELLITE TELEMETRY</span>
            <span className="speed-label">GPS: 54 km/h • SIRENS ACTIVE</span>
          </div>

          <MockMap
            status={currentStatus}
            pickup={tripData.pickupLocation}
            hospital={tripData.destinationHospital}
            height="460px"
            showControls={true}
          />
        </div>

        {/* Right Column: Patient Details & 3 Action Buttons */}
        <div className="trip-actions-col">
          {/* Patient Details Card */}
          <div className="patient-spec-card glass-panel">
            <div className="ps-header">
              <span className="ps-tag">INCIDENT PROFILE</span>
              <span className="ps-condition">{tripData.emergencyType}</span>
            </div>

            <div className="ps-patient-row">
              <div className="ps-avatar">
                <User size={22} color="#60a5fa" />
              </div>
              <div>
                <h3 className="ps-name">{tripData.patientName}</h3>
                <span className="ps-age-gender">{tripData.patientAge} Years • {tripData.patientGender}</span>
              </div>
            </div>

            <div className="ps-location-group">
              <div className="ps-loc-item">
                <MapPin size={16} color="#ef4444" className="loc-pin-icon" />
                <div>
                  <span className="loc-sub-label">PICKUP POINT</span>
                  <p className="loc-main-addr">{tripData.pickupLocation.address}</p>
                  {tripData.pickupLocation.landmark && (
                    <span className="loc-landmark">Landmark: {tripData.pickupLocation.landmark}</span>
                  )}
                </div>
              </div>

              <div className="ps-loc-item" style={{ marginTop: '12px' }}>
                <Building2 size={16} color="#06b6d4" className="loc-pin-icon" />
                <div>
                  <span className="loc-sub-label">RECEIVING FACILITY</span>
                  <p className="loc-main-addr">{tripData.destinationHospital.name}</p>
                  <span className="loc-landmark">{tripData.destinationHospital.emergencyDept}</span>
                </div>
              </div>
            </div>

            {/* Direct Phone Dial Link */}
            <a href={`tel:${tripData.contactNumber}`} className="ps-call-btn">
              <Phone size={15} />
              <span>Call Patient / Caller ({tripData.contactNumber})</span>
            </a>
          </div>

          {/* DRIVER TRIP CONTROL BUTTONS (Required: Arrived, Patient Picked Up, Trip Completed) */}
          <div className="driver-trip-controls glass-panel">
            <span className="controls-label">DRIVER STATUS ACTIONS</span>

            {/* 1. Arrived Button */}
            <button
              onClick={handleArrived}
              className={`btn-driver-step ${currentStatus === 'ARRIVED' ? 'step-current' : ''}`}
              id="driverStepArrivedBtn"
            >
              <MapPin size={18} />
              <span>1. ARRIVED AT PICKUP POINT</span>
              {currentStatus === 'ARRIVED' && <CheckCircle2 size={18} color="#10b981" />}
            </button>

            {/* 2. Patient Picked Up Button */}
            <button
              onClick={handlePatientPickedUp}
              className={`btn-driver-step ${currentStatus === 'PATIENT_PICKED_UP' ? 'step-current' : ''}`}
              id="driverStepPickedUpBtn"
            >
              <HeartPulse size={18} />
              <span>2. PATIENT PICKED UP & STABILIZED</span>
              {currentStatus === 'PATIENT_PICKED_UP' && <CheckCircle2 size={18} color="#10b981" />}
            </button>

            {/* 3. Trip Completed Button */}
            <button
              onClick={handleTripCompleted}
              className="btn-driver-step step-complete"
              id="driverStepTripCompletedBtn"
            >
              <CheckCircle2 size={20} />
              <span>3. TRIP COMPLETED (HOSPITAL HANDOVER)</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .active-trip-root {
          padding: 30px 20px 60px;
        }

        .driver-nav-hud {
          padding: 22px 28px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 24px;
        }

        .hud-status-col {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .live-gps-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: #fca5a5;
        }

        .live-gps-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: beacon-pulse 1s infinite;
        }

        .hud-heading {
          font-size: 1.8rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.2;
        }

        .current-status-tag {
          font-size: 0.75rem;
          color: var(--text-dim);
          letter-spacing: 0.05em;
        }

        .current-status-tag strong {
          color: var(--accent-cyan);
        }

        .nav-turn-box {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          padding: 12px 20px;
        }

        .turn-distance {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--text-dim);
          letter-spacing: 0.08em;
          display: block;
        }

        .turn-instruction {
          font-size: 0.95rem;
          font-weight: 800;
          color: #ffffff;
        }

        /* 2-Column Grid */
        .driver-trip-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.85fr;
          gap: 28px;
          align-items: start;
        }

        .trip-map-col {
          padding: 20px;
          border-radius: var(--radius-xl);
        }

        .map-col-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 0.75rem;
        }

        .map-label {
          font-weight: 700;
          color: var(--text-dim);
        }

        .speed-label {
          font-family: var(--font-mono);
          color: #34d399;
          font-weight: 700;
        }

        .trip-actions-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .patient-spec-card {
          padding: 22px;
          border-radius: var(--radius-lg);
        }

        .ps-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 10px;
        }

        .ps-tag {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--text-dim);
        }

        .ps-condition {
          font-size: 0.75rem;
          font-weight: 700;
          color: #f87171;
          background: rgba(239, 68, 68, 0.15);
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .ps-patient-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .ps-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ps-name {
          font-size: 1.1rem;
          font-weight: 800;
          color: #ffffff;
        }

        .ps-age-gender {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .ps-location-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: rgba(0, 0, 0, 0.25);
          border-radius: var(--radius-md);
          padding: 14px;
          margin-bottom: 16px;
        }

        .ps-loc-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .loc-pin-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .loc-sub-label {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--text-dim);
          letter-spacing: 0.05em;
          display: block;
        }

        .loc-main-addr {
          font-size: 0.88rem;
          font-weight: 700;
          color: #ffffff;
        }

        .loc-landmark {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .ps-call-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px;
          border-radius: var(--radius-md);
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.35);
          color: #93c5fd;
          font-size: 0.82rem;
          font-weight: 700;
          transition: var(--transition);
        }

        .ps-call-btn:hover {
          background: rgba(59, 130, 246, 0.25);
          color: #fff;
        }

        /* Status Controls Box */
        .driver-trip-controls {
          padding: 22px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .controls-label {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-dim);
          letter-spacing: 0.08em;
          margin-bottom: 4px;
        }

        .btn-driver-step {
          width: 100%;
          padding: 15px 20px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 0.92rem;
          font-weight: 800;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: var(--transition);
        }

        .btn-driver-step:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .btn-driver-step.step-current {
          background: rgba(16, 185, 129, 0.2);
          border-color: #10b981;
          color: #34d399;
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
        }

        .btn-driver-step.step-complete {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border: none;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4);
        }

        .btn-driver-step.step-complete:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 22px rgba(16, 185, 129, 0.65);
        }

        @media (max-width: 992px) {
          .driver-trip-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default DriverActiveTrip;
