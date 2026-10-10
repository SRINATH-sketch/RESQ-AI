import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Navigation,
  Clock,
  Phone,
  ShieldCheck,
  Ambulance,
  MapPin,
  Building2,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { useRequest } from '../../context/RequestContext';
import { StatusTracker } from '../../components/common/StatusTracker';
import { MockMap } from '../../components/map/MockMap';
import { ETACard } from '../../components/cards/ETACard';
import { DriverCard } from '../../components/cards/DriverCard';

export const LiveTrackingPage = () => {
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
    emergencyType
  } = activeRequest;

  const handleAmbulanceArrived = () => {
    updateRequestStatus('ARRIVED');
    navigate('/request/arrived');
  };

  return (
    <div className="tracking-page-root container">
      {/* Dynamic Status Tracker */}
      <StatusTracker currentStatus="ON_THE_WAY" />

      {/* Live ETA Card */}
      <ETACard
        initialMinutes={activeRequest.etaMinutes || 6}
        distance={ambulance?.distance || '2.1 km'}
        statusHeadline="Ambulance is on the way"
        statusSubtext={`Unit ${ambulance?.unitName || 'Alpha'} en route to ${pickupLocation.address}`}
        onArriveClick={handleAmbulanceArrived}
      />

      {/* Main Grid: Large Map Area & Live Dispatch Monitor */}
      <div className="tracking-main-layout">
        {/* Large Map Area with Ambulance Marker, Patient Marker, Route Line */}
        <div className="tracking-map-panel glass-panel">
          <div className="map-panel-top">
            <div className="map-title-tag">
              <span className="pulsing-beacon-dot"></span>
              <span>LIVE AMBULANCE GPS TRACKING</span>
            </div>
            <span className="telemetry-speed">TELEMETRY: 52 KM/H • SIRENS ACTIVE</span>
          </div>

          <MockMap
            status="ON_THE_WAY"
            pickup={pickupLocation}
            hospital={destinationHospital}
            height="520px"
            showControls={true}
          />
        </div>

        {/* Right / Side Column: Driver Info Bottom Card & Patient Vitals Card */}
        <div className="tracking-side-column">
          {/* Driver Information Card */}
          <div className="side-card-wrap">
            <h3 className="side-section-title">Emergency Driver Information</h3>
            <DriverCard driver={driver} ambulance={ambulance} />
          </div>

          {/* Incident & Patient Quick Card */}
          <div className="incident-summary-card glass-panel">
            <div className="inc-header">
              <span className="inc-label">PATIENT & HOSPITAL DISPATCH</span>
              <span className="inc-type-tag">{emergencyType}</span>
            </div>
            <h4 className="inc-patient-name">{patientName}</h4>
            <div className="inc-address-row">
              <MapPin size={15} color="#ef4444" />
              <span>{pickupLocation.address}</span>
            </div>
            <div className="inc-address-row" style={{ marginTop: '8px' }}>
              <Building2 size={15} color="#06b6d4" />
              <span>Receiving: <strong>{destinationHospital.name}</strong></span>
            </div>
          </div>

          {/* Arrived Action Button (For user or dispatcher trigger) */}
          <div className="advance-trigger-box">
            <button
              onClick={handleAmbulanceArrived}
              className="btn-mark-arrived"
              id="ambulanceArrivedBtn"
            >
              <Ambulance size={20} />
              <span>AMBULANCE HAS ARRIVED</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .tracking-page-root {
          padding: 30px 20px 60px;
        }

        .tracking-main-layout {
          display: grid;
          grid-template-columns: 1.35fr 0.85fr;
          gap: 28px;
          align-items: start;
        }

        .tracking-map-panel {
          padding: 20px;
          border-radius: var(--radius-xl);
        }

        .map-panel-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .map-title-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #f87171;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .pulsing-beacon-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: beacon-pulse 1s infinite;
        }

        .telemetry-speed {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #34d399;
          font-weight: 700;
        }

        .tracking-side-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .side-section-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .incident-summary-card {
          padding: 20px;
          border-radius: var(--radius-lg);
        }

        .inc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .inc-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.06em;
        }

        .inc-type-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: #f87171;
          background: rgba(239, 68, 68, 0.12);
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .inc-patient-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .inc-address-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .btn-mark-arrived {
          width: 100%;
          padding: 16px 24px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 4px 18px rgba(16, 185, 129, 0.4);
          transition: var(--transition);
        }

        .btn-mark-arrived:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(16, 185, 129, 0.65);
          background: linear-gradient(135deg, #34d399 0%, #059669 100%);
        }

        @media (max-width: 992px) {
          .tracking-main-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default LiveTrackingPage;
