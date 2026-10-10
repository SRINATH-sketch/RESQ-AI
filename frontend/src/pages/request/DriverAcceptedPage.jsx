import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  Ambulance,
  Phone,
  Clock,
  Navigation,
  ShieldCheck,
  Star,
  MapPin,
  Building2,
  ArrowRight
} from 'lucide-react';
import { useRequest } from '../../context/RequestContext';
import { StatusTracker } from '../../components/common/StatusTracker';
import { DriverCard } from '../../components/cards/DriverCard';
import { LocationCard } from '../../components/cards/LocationCard';

export const DriverAcceptedPage = () => {
  const navigate = useNavigate();
  const { activeRequest, updateRequestStatus } = useRequest();

  if (!activeRequest) {
    navigate('/dashboard');
    return null;
  }

  const { ambulance, driver, pickupLocation, destinationHospital, etaMinutes = 6, distanceKm = 2.1 } = activeRequest;

  const handleStartTracking = () => {
    updateRequestStatus('ON_THE_WAY');
    navigate('/request/tracking');
  };

  return (
    <div className="accepted-page-root container-narrow">
      <StatusTracker currentStatus="DRIVER_ACCEPTED" />

      <div className="accepted-card glass-panel glow-success">
        {/* Confirmed Header */}
        <div className="confirmed-hero-header">
          <div className="success-badge-icon">
            <CheckCircle2 size={38} color="#10b981" />
          </div>
          <span className="dispatch-badge">DISPATCH CONFIRMED</span>
          <h1 className="confirmed-title">Ambulance Confirmed</h1>
          <p className="confirmed-sub">
            Driver <strong>{driver.name}</strong> has accepted your emergency request and is en route.
          </p>
        </div>

        {/* Driver Details Card (Avatar, Name, Rating, Phone button) */}
        <DriverCard driver={driver} ambulance={ambulance} />

        {/* Ambulance Details Summary Box */}
        <div className="ambulance-spec-grid">
          <div className="spec-card">
            <span className="spec-label">VEHICLE PLATE</span>
            <h4 className="spec-val plate">{ambulance.vehicleNumber}</h4>
            <span className="spec-sub">{ambulance.unitName}</span>
          </div>

          <div className="spec-card">
            <span className="spec-label">AMBULANCE TYPE</span>
            <h4 className="spec-val red">{ambulance.type}</h4>
            <span className="spec-sub">Equipped with Mobile ICU</span>
          </div>

          <div className="spec-card">
            <span className="spec-label">ESTIMATED ETA</span>
            <h4 className="spec-val cyan">{ambulance.eta || `${etaMinutes} minutes`}</h4>
            <span className="spec-sub">Traffic cleared corridor</span>
          </div>

          <div className="spec-card">
            <span className="spec-label">PROXIMITY DISTANCE</span>
            <h4 className="spec-val">{ambulance.distance || `${distanceKm} km`}</h4>
            <span className="spec-sub">Direct vector</span>
          </div>
        </div>

        {/* Location Summary */}
        <LocationCard
          pickupAddress={pickupLocation.address}
          landmark={pickupLocation.landmark}
          hospitalName={destinationHospital.name}
          hospitalAddress={destinationHospital.address}
          editable={false}
        />

        {/* Track Ambulance Button */}
        <div className="track-action-box">
          <button
            onClick={handleStartTracking}
            className="btn-track-ambulance"
            id="trackAmbulanceBtn"
          >
            <Navigation size={22} />
            <span>TRACK AMBULANCE LIVE</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .accepted-page-root {
          padding: 30px 20px 60px;
        }

        .accepted-card {
          padding: 36px 32px;
          border-radius: var(--radius-xl);
        }

        .confirmed-hero-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 28px;
        }

        .success-badge-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          border: 2px solid #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.4);
        }

        .dispatch-badge {
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

        .confirmed-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 6px;
        }

        .confirmed-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .ambulance-spec-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 14px;
          margin-bottom: 24px;
        }

        .spec-card {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
        }

        .spec-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.06em;
          margin-bottom: 4px;
        }

        .spec-val {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
        }

        .spec-val.plate {
          font-family: var(--font-mono);
          color: #ffffff;
        }

        .spec-val.red {
          color: #f87171;
        }

        .spec-val.cyan {
          color: #38bdf8;
        }

        .spec-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .track-action-box {
          margin-top: 24px;
        }

        .btn-track-ambulance {
          width: 100%;
          padding: 18px 32px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
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
          box-shadow: 0 0 30px rgba(239, 68, 68, 0.6);
          transition: var(--transition);
        }

        .btn-track-ambulance:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 45px rgba(239, 68, 68, 0.85);
          background: linear-gradient(135deg, #f87171 0%, #dc2626 100%);
        }
      `}</style>
    </div>
  );
};

export default DriverAcceptedPage;
