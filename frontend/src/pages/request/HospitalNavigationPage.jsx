import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  Clock,
  Navigation,
  Phone,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Activity,
  Ambulance
} from 'lucide-react';
import { useRequest } from '../../context/RequestContext';
import { StatusTracker } from '../../components/common/StatusTracker';
import { MockMap } from '../../components/map/MockMap';
import { HospitalCard } from '../../components/cards/HospitalCard';

export const HospitalNavigationPage = () => {
  const navigate = useNavigate();
  const { activeRequest, updateRequestStatus } = useRequest();

  if (!activeRequest) {
    navigate('/dashboard');
    return null;
  }

  const {
    destinationHospital,
    pickupLocation,
    ambulance,
    driver,
    patientName,
    emergencyType
  } = activeRequest;

  const handleArrivedAtHospital = () => {
    updateRequestStatus('AT_HOSPITAL', {
      note: 'Ambulance arrived at Emergency Trauma Bay 4'
    });
    navigate('/request/completed');
  };

  return (
    <div className="hospital-nav-page-root container">
      {/* Status Tracker: AT_HOSPITAL / PATIENT_PICKED_UP */}
      <StatusTracker currentStatus="AT_HOSPITAL" />

      {/* Transit Header Strip */}
      <div className="transit-top-strip glass-panel glow-cyan">
        <div className="strip-left">
          <div className="siren-pulse-tag">
            <span className="cyan-beacon-dot"></span>
            <span>CRITICAL TRANSIT IN PROGRESS</span>
          </div>
          <h1 className="transit-headline">On The Way to Hospital</h1>
          <p className="transit-sub">
            Ambulance <strong>{ambulance.vehicleNumber}</strong> is transferring patient <strong>{patientName}</strong> under continuous clinical monitoring.
          </p>
        </div>

        <div className="strip-right-eta">
          <span className="er-eta-label">TRAUMA BAY ETA</span>
          <div className="er-eta-time">
            <span className="er-eta-num">12</span>
            <span className="er-eta-unit">MINS</span>
          </div>
          <span className="er-distance">5.4 km remaining</span>
        </div>
      </div>

      {/* 2-Column Grid: Map on Left, Hospital Card on Right */}
      <div className="hospital-nav-grid">
        {/* Left: Map showing route to Hospital */}
        <div className="hospital-map-panel glass-panel">
          <div className="map-panel-bar">
            <span className="badge badge-ai">
              <Navigation size={12} />
              <span>EMERGENCY GREEN CORRIDOR ENGAGED</span>
            </span>
            <span className="hosp-target-tag">Target: {destinationHospital.name}</span>
          </div>

          <MockMap
            status="PATIENT_PICKED_UP"
            pickup={pickupLocation}
            hospital={destinationHospital}
            height="480px"
            showControls={true}
          />

          <div className="transit-vitals-ticker">
            <div className="vital-item">
              <Activity size={14} color="#10b981" />
              <span>ECG & SPO2 Telemetry Streaming to Hospital ER</span>
            </div>
            <div className="vital-item">
              <ShieldAlert size={14} color="#f59e0b" />
              <span>Trauma Bay 4 Prepared for Resuscitation</span>
            </div>
          </div>
        </div>

        {/* Right: Hospital Card & Arrived Action */}
        <div className="hospital-side-panel">
          <h3 className="side-heading">Receiving Trauma Facility</h3>

          {/* Hospital Card with Name, Address, Emergency Dept, Contact button */}
          <HospitalCard hospital={destinationHospital} />

          {/* Driver & Unit Recap */}
          <div className="transit-unit-capsule glass-panel">
            <span className="capsule-label">DISPATCHED CREW</span>
            <div className="capsule-crew-row">
              <div className="crew-avatar">
                {driver.name.charAt(0)}
              </div>
              <div>
                <h4 className="crew-name">{driver.name}</h4>
                <span className="crew-meta">{ambulance.type} • {ambulance.vehicleNumber}</span>
              </div>
            </div>
          </div>

          {/* Arrived at Hospital Button */}
          <div className="arrived-hospital-action-box">
            <button
              onClick={handleArrivedAtHospital}
              className="btn-arrived-hospital"
              id="arrivedAtHospitalBtn"
            >
              <Building2 size={22} />
              <span>ARRIVED AT HOSPITAL</span>
              <ArrowRight size={20} />
            </button>
            <span className="action-hint">
              Transitions to emergency triage handover and trip completion summary.
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .hospital-nav-page-root {
          padding: 30px 20px 60px;
        }

        .transit-top-strip {
          padding: 24px 30px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 28px;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%);
        }

        .siren-pulse-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #67e8f9;
          background: rgba(6, 182, 212, 0.15);
          border: 1px solid rgba(6, 182, 212, 0.35);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 6px;
        }

        .cyan-beacon-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #06b6d4;
          box-shadow: 0 0 8px #06b6d4;
          animation: beacon-pulse 1s infinite;
        }

        .transit-headline {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 4px;
        }

        .transit-sub {
          font-size: 0.92rem;
          color: var(--text-muted);
        }

        .strip-right-eta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 10px 18px;
        }

        .er-eta-label {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.08em;
        }

        .er-eta-time {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .er-eta-num {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 900;
          color: #38bdf8;
          line-height: 1;
        }

        .er-eta-unit {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .er-distance {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .hospital-nav-grid {
          display: grid;
          grid-template-columns: 1.35fr 0.85fr;
          gap: 28px;
          align-items: start;
        }

        .hospital-map-panel {
          padding: 20px;
          border-radius: var(--radius-xl);
        }

        .map-panel-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .hosp-target-tag {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .transit-vitals-ticker {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: rgba(0, 0, 0, 0.25);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          margin-top: 14px;
        }

        .vital-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: #e2e8f0;
        }

        .hospital-side-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .side-heading {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .transit-unit-capsule {
          padding: 16px;
          border-radius: var(--radius-md);
        }

        .capsule-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 8px;
        }

        .capsule-crew-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .crew-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0284c7, #0e7490);
          color: #fff;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .crew-name {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .crew-meta {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .arrived-hospital-action-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .btn-arrived-hospital {
          width: 100%;
          padding: 18px 28px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
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
          gap: 12px;
          box-shadow: 0 4px 20px rgba(2, 132, 199, 0.45);
          transition: var(--transition);
        }

        .btn-arrived-hospital:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 26px rgba(2, 132, 199, 0.7);
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
        }

        .action-hint {
          font-size: 0.75rem;
          color: var(--text-dim);
          text-align: center;
        }

        @media (max-width: 992px) {
          .hospital-nav-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default HospitalNavigationPage;
