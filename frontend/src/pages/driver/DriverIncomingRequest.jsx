import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Siren,
  MapPin,
  HeartPulse,
  User,
  Clock,
  Navigation,
  Building2,
  CheckCircle2,
  XCircle,
  AlertTriangle
} from 'lucide-react';
import { useRequest } from '../../context/RequestContext';
import { MockMap } from '../../components/map/MockMap';
import { MOCK_USER, MOCK_HOSPITALS, MOCK_AMBULANCES } from '../../data/mockData';

export const DriverIncomingRequest = () => {
  const navigate = useNavigate();
  const { activeRequest, updateRequestStatus, submitEmergencyRequest } = useRequest();
  const [countdown, setCountdown] = useState(45); // 45s countdown timer to accept

  // Fallback mock request if driver opened page directly without a patient request
  const requestData = activeRequest || {
    id: 'REQ-DEMO-9901',
    patientName: 'Kavitha Raman',
    patientAge: 52,
    patientGender: 'Female',
    emergencyType: 'Heart Emergency',
    contactNumber: '+91 98400 99887',
    additionalNotes: 'Severe crushing chest pain, conscious, ground floor entry.',
    pickupLocation: {
      address: 'Plot 42, 2nd Avenue, Anna Nagar West, Chennai',
      landmark: 'Near Roundtana Metro'
    },
    destinationHospital: MOCK_HOSPITALS[0],
    ambulance: MOCK_AMBULANCES[0],
    distanceKm: 2.1,
    etaMinutes: 6
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((c) => (c > 1 ? c - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAccept = () => {
    if (!activeRequest) {
      submitEmergencyRequest();
    }
    updateRequestStatus('DRIVER_ACCEPTED', {
      note: 'Driver Kumar Selvam accepted dispatch broadcast via mobile terminal.'
    });
    navigate('/driver/trip');
  };

  const handleReject = () => {
    navigate('/driver/dashboard');
  };

  return (
    <div className="incoming-page-root container-narrow">
      <div className="incoming-card glass-panel glow-red">
        {/* Animated Beacon Header */}
        <div className="incoming-top-strip">
          <div className="siren-beacon-row">
            <span className="beacon-flashing-ring"></span>
            <div className="siren-circle">
              <Siren size={32} color="#ef4444" className="siren-shake" />
            </div>
            <div>
              <span className="incoming-badge">EMERGENCY PRIORITY BROADCAST</span>
              <h1 className="incoming-title">Incoming Ambulance Request</h1>
            </div>
          </div>

          <div className="countdown-timer-box">
            <span className="cd-label">AUTO RE-ROUTE IN</span>
            <span className="cd-seconds">{countdown}s</span>
          </div>
        </div>

        {/* Core Dispatch Details Grid */}
        <div className="dispatch-details-card">
          {/* Patient Information & Emergency Type */}
          <div className="details-header-row">
            <div className="patient-avatar-box">
              <User size={24} color="#60a5fa" />
            </div>
            <div>
              <h3 className="patient-name">{requestData.patientName} ({requestData.patientAge}y, {requestData.patientGender})</h3>
              <span className="patient-phone">Ph: {requestData.contactNumber}</span>
            </div>
            <div className="emergency-type-pill">
              <HeartPulse size={16} color="#ef4444" />
              <span>{requestData.emergencyType}</span>
            </div>
          </div>

          {/* Location & Distance Information */}
          <div className="location-distance-matrix">
            <div className="matrix-row">
              <div className="pin-box red">
                <MapPin size={18} />
              </div>
              <div className="matrix-text">
                <span className="mat-lbl">PATIENT LOCATION (PICKUP)</span>
                <h4 className="mat-val">{requestData.pickupLocation.address}</h4>
                {requestData.pickupLocation.landmark && (
                  <span className="mat-sub">Landmark: {requestData.pickupLocation.landmark}</span>
                )}
              </div>
            </div>

            <div className="matrix-row">
              <div className="pin-box cyan">
                <Building2 size={18} />
              </div>
              <div className="matrix-text">
                <span className="mat-lbl">DESTINATION HOSPITAL (RECEIVING BAY)</span>
                <h4 className="mat-val">{requestData.destinationHospital.name}</h4>
                <span className="mat-sub">{requestData.destinationHospital.emergencyDept}</span>
              </div>
            </div>
          </div>

          {/* Metrics Triplet: Estimated Distance, ETA, Road Vector */}
          <div className="metrics-triplet">
            <div className="m-pill">
              <Navigation size={16} color="#06b6d4" />
              <div>
                <span className="p-lbl">ESTIMATED DISTANCE</span>
                <span className="p-val">{requestData.ambulance.distance || `${requestData.distanceKm} km`}</span>
              </div>
            </div>

            <div className="m-pill">
              <Clock size={16} color="#f59e0b" />
              <div>
                <span className="p-lbl">ESTIMATED ETA</span>
                <span className="p-val">{requestData.ambulance.eta || `${requestData.etaMinutes} min`}</span>
              </div>
            </div>

            <div className="m-pill">
              <Siren size={16} color="#ef4444" />
              <div>
                <span className="p-lbl">ROUTE TYPE</span>
                <span className="p-val">Priority Green Lane</span>
              </div>
            </div>
          </div>

          {/* Patient Symptoms Note */}
          {requestData.additionalNotes && (
            <div className="symptoms-note-box">
              <span className="sn-title">Patient Clinical Triage Note:</span>
              <p className="sn-text">{requestData.additionalNotes}</p>
            </div>
          )}
        </div>

        {/* Embedded Map Visual Preview */}
        <div className="incoming-map-wrap">
          <MockMap
            status="REQUESTED"
            pickup={requestData.pickupLocation}
            hospital={requestData.destinationHospital}
            height="260px"
            showControls={false}
          />
        </div>

        {/* Buttons: Accept Request & Reject Request */}
        <div className="dispatch-action-buttons">
          <button
            onClick={handleReject}
            className="btn-reject-request"
            id="rejectAmbulanceRequestBtn"
          >
            <XCircle size={20} />
            <span>Reject Request</span>
          </button>

          <button
            onClick={handleAccept}
            className="btn-accept-request"
            id="acceptAmbulanceRequestBtn"
          >
            <CheckCircle2 size={22} />
            <span>ACCEPT & COMMENCE RUN</span>
          </button>
        </div>
      </div>

      <style>{`
        .incoming-page-root {
          padding: 30px 20px 60px;
        }

        .incoming-card {
          padding: 36px 32px;
          border-radius: var(--radius-xl);
        }

        .incoming-top-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 18px;
        }

        .siren-beacon-row {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .siren-circle {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.2);
          border: 2px solid #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.6);
        }

        .siren-shake {
          animation: siren-wiggle 1.5s infinite;
        }

        .incoming-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #fca5a5;
        }

        .incoming-title {
          font-size: 1.8rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.15;
        }

        .countdown-timer-box {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: var(--radius-md);
          padding: 8px 16px;
        }

        .cd-label {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-dim);
        }

        .cd-seconds {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 900;
          color: #ef4444;
          line-height: 1;
        }

        /* Dispatch details card */
        .dispatch-details-card {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 22px;
          margin-bottom: 20px;
        }

        .details-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 14px;
        }

        .patient-avatar-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.15);
          border: 1.5px solid #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .patient-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
        }

        .patient-phone {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .emergency-type-pill {
          margin-left: auto;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #f87171;
          font-weight: 700;
          font-size: 0.85rem;
        }

        .location-distance-matrix {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 20px;
        }

        .matrix-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .pin-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pin-box.red { background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.35); }
        .pin-box.cyan { background: rgba(6, 182, 212, 0.15); color: #06b6d4; border: 1px solid rgba(6, 182, 212, 0.35); }

        .mat-lbl {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.06em;
          display: block;
        }

        .mat-val {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .mat-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .metrics-triplet {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 16px;
        }

        .m-pill {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .p-lbl {
          font-size: 0.65rem;
          color: var(--text-dim);
          font-weight: 700;
          display: block;
        }

        .p-val {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
        }

        .symptoms-note-box {
          background: rgba(255, 255, 255, 0.04);
          border-radius: var(--radius-md);
          padding: 12px 14px;
        }

        .sn-title {
          font-size: 0.72rem;
          font-weight: 700;
          color: #fca5a5;
          display: block;
          margin-bottom: 2px;
        }

        .sn-text {
          font-size: 0.85rem;
          color: #e2e8f0;
        }

        .incoming-map-wrap {
          margin-bottom: 24px;
        }

        .dispatch-action-buttons {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 16px;
        }

        .btn-reject-request {
          padding: 16px 20px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border-subtle);
          color: #cbd5e1;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: var(--transition);
        }

        .btn-reject-request:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: #ef4444;
          color: #ef4444;
        }

        .btn-accept-request {
          padding: 16px 28px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.5);
          transition: var(--transition);
        }

        .btn-accept-request:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 28px rgba(16, 185, 129, 0.75);
          background: linear-gradient(135deg, #34d399 0%, #059669 100%);
        }

        @media (max-width: 640px) {
          .metrics-triplet {
            grid-template-columns: 1fr;
          }
          .dispatch-action-buttons {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default DriverIncomingRequest;
