import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin,
  CheckCircle2,
  Ambulance,
  HeartPulse,
  Building2,
  ArrowRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { useRequest } from '../../context/RequestContext';
import { StatusTracker } from '../../components/common/StatusTracker';
import { DriverCard } from '../../components/cards/DriverCard';

export const AmbulanceArrivedPage = () => {
  const navigate = useNavigate();
  const { activeRequest, updateRequestStatus } = useRequest();

  if (!activeRequest) {
    navigate('/dashboard');
    return null;
  }

  const {
    ambulance,
    driver,
    pickupLocation,
    destinationHospital,
    patientName,
    patientAge,
    emergencyType,
    additionalNotes
  } = activeRequest;

  const handlePatientPickedUp = () => {
    updateRequestStatus('PATIENT_PICKED_UP', {
      note: 'Patient safely stabilized on stretcher and boarded into mobile ICU'
    });
    navigate('/request/hospital');
  };

  return (
    <div className="arrived-page-root container-narrow">
      <StatusTracker currentStatus="ARRIVED" />

      <div className="arrived-card glass-panel glow-success">
        {/* Header: Ambulance has arrived */}
        <div className="arrived-hero-header">
          <div className="arrived-icon-badge">
            <MapPin size={42} color="#10b981" />
          </div>
          <span className="arrived-pill">ON-SITE VEHICLE CONTACT</span>
          <h1 className="arrived-title">Ambulance Has Arrived</h1>
          <p className="arrived-desc">
            Ambulance unit <strong>{ambulance.vehicleNumber}</strong> has pulled up at your designated pickup point. Emergency medical responders are attending.
          </p>
        </div>

        {/* Driver Details */}
        <DriverCard driver={driver} ambulance={ambulance} />

        {/* Emergency & Patient Summary Grid */}
        <div className="arrived-details-matrix">
          <div className="matrix-item">
            <span className="m-label">PATIENT DETAILS</span>
            <h4 className="m-val">{patientName}, {patientAge} yrs</h4>
            <span className="m-sub">Condition: {emergencyType}</span>
          </div>

          <div className="matrix-item">
            <span className="m-label">AMBULANCE DETAILS</span>
            <h4 className="m-val plate">{ambulance.vehicleNumber}</h4>
            <span className="m-sub">{ambulance.type} • Unit Alpha</span>
          </div>

          <div className="matrix-item full">
            <span className="m-label">PICKUP LOCATION</span>
            <h4 className="m-val">{pickupLocation.address}</h4>
            {pickupLocation.landmark && (
              <span className="m-sub">Landmark: {pickupLocation.landmark}</span>
            )}
          </div>

          <div className="matrix-item full">
            <span className="m-label">TRIAGE / MEDICAL NOTES FOR EMT</span>
            <p className="m-notes-box">
              {additionalNotes || 'Patient is conscious, urgent cardiac monitoring requested.'}
            </p>
          </div>
        </div>

        {/* Next Step Action Button: Patient Picked Up */}
        <div className="picked-up-action-box">
          <button
            onClick={handlePatientPickedUp}
            className="btn-patient-picked-up"
            id="patientPickedUpBtn"
          >
            <UserCheck size={22} />
            <span>PATIENT PICKED UP & STABILIZED</span>
            <ArrowRight size={20} />
          </button>
          <span className="picked-up-helper">
            Confirms patient has boarded the ambulance and initiates hospital transit route navigation.
          </span>
        </div>
      </div>

      <style>{`
        .arrived-page-root {
          padding: 30px 20px 60px;
        }

        .arrived-card {
          padding: 36px 32px;
          border-radius: var(--radius-xl);
        }

        .arrived-hero-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 28px;
        }

        .arrived-icon-badge {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          border: 2px solid #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.45);
        }

        .arrived-pill {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #34d399;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.35);
          padding: 3px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .arrived-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 6px;
        }

        .arrived-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 580px;
        }

        .arrived-details-matrix {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 22px;
          margin-bottom: 28px;
        }

        .matrix-item {
          display: flex;
          flex-direction: column;
        }

        .matrix-item.full {
          grid-column: span 2;
        }

        .m-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.06em;
          margin-bottom: 4px;
        }

        .m-val {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .m-val.plate {
          font-family: var(--font-mono);
          color: #38bdf8;
        }

        .m-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .m-notes-box {
          font-size: 0.88rem;
          color: #e2e8f0;
          background: rgba(255, 255, 255, 0.04);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          margin-top: 4px;
          line-height: 1.5;
        }

        .picked-up-action-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .btn-patient-picked-up {
          width: 100%;
          padding: 18px 32px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.6);
          transition: var(--transition);
        }

        .btn-patient-picked-up:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 45px rgba(16, 185, 129, 0.85);
          background: linear-gradient(135deg, #34d399 0%, #059669 100%);
        }

        .picked-up-helper {
          font-size: 0.8rem;
          color: var(--text-dim);
          text-align: center;
        }

        @media (max-width: 640px) {
          .arrived-details-matrix {
            grid-template-columns: 1fr;
          }
          .matrix-item.full {
            grid-column: span 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AmbulanceArrivedPage;
