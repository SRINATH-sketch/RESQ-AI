import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  CarFront,
  ShieldCheck,
  MapPin,
  Clock,
  Navigation,
  Phone,
  Power,
  AlertTriangle,
  ArrowRight,
  Star,
  CheckCircle2,
  Ambulance,
  HeartPulse,
  Activity
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useRequest } from '../../context/RequestContext';
import { MOCK_AMBULANCES } from '../../data/mockData';

export const DriverDashboard = () => {
  const navigate = useNavigate();
  const { currentDriver, toggleDriverOnline } = useAuth();
  const { activeRequest } = useRequest();

  const driverAmbulance = MOCK_AMBULANCES.find((a) => a.id === currentDriver?.assignedAmbulanceId) || MOCK_AMBULANCES[0];

  const isOnline = currentDriver?.isOnline !== false;

  const handleOpenIncoming = () => {
    navigate('/driver/request');
  };

  const handleOpenActiveTrip = () => {
    navigate('/driver/trip');
  };

  return (
    <div className="driver-dash-root container">
      {/* Top Header Card: Driver Name, Vehicle, Online/Offline Toggle */}
      <div className="driver-top-card glass-panel glow-cyan">
        <div className="driver-profile-row">
          <div className="driver-avatar-box">
            <img src={currentDriver?.avatar} alt={currentDriver?.name} className="d-avatar-img" />
            <span className={`online-pip ${isOnline ? 'green' : 'gray'}`}></span>
          </div>

          <div className="driver-meta">
            <div className="role-strip">
              <span className="badge badge-ai">ADVANCED EMT FIRST RESPONDER</span>
              <span className="rating-pill">
                <Star size={13} fill="#f59e0b" color="#f59e0b" />
                <span>{currentDriver?.rating || 4.9}</span>
              </span>
            </div>
            <h1 className="driver-name-headline">{currentDriver?.name || 'Kumar Selvam'}</h1>
            <p className="driver-assigned-vehicle">
              Assigned Vehicle: <strong>{driverAmbulance.vehicleNumber}</strong> • {driverAmbulance.unitName} ({driverAmbulance.type})
            </p>
          </div>
        </div>

        {/* Online / Offline Toggle Button */}
        <div className="online-toggle-box">
          <span className="status-label-text">
            STATUS: <strong>{isOnline ? 'ONLINE & BROADCASTING' : 'OFFLINE (STANDBY)'}</strong>
          </span>
          <button
            onClick={toggleDriverOnline}
            className={`btn-online-toggle ${isOnline ? 'active-online' : 'active-offline'}`}
          >
            <Power size={18} />
            <span>{isOnline ? 'Go Offline' : 'Go Online'}</span>
          </button>
        </div>
      </div>

      {/* INCOMING EMERGENCY REQUEST ALERT (If a request is active or pending) */}
      {activeRequest && activeRequest.status === 'REQUESTED' && (
        <div className="incoming-alert-banner glass-panel glow-red">
          <div className="alert-left">
            <div className="pulse-siren-box">
              <Ambulance size={28} color="#ef4444" />
            </div>
            <div>
              <div className="alert-badge">INCOMING EMERGENCY BROADCAST</div>
              <h3 className="alert-title">
                {activeRequest.emergencyType} • {activeRequest.patientName}
              </h3>
              <p className="alert-loc">
                <MapPin size={14} color="#ef4444" />
                <span>{activeRequest.pickupLocation.address} ({activeRequest.ambulance.distance})</span>
              </p>
            </div>
          </div>

          <button onClick={handleOpenIncoming} className="btn-respond-request">
            <span>VIEW & ACCEPT REQUEST</span>
            <ArrowRight size={18} />
          </button>
        </div>
      )}

      {/* ACTIVE DISPATCH IN PROGRESS ALERT (If already accepted or on the way) */}
      {activeRequest && activeRequest.status !== 'REQUESTED' && activeRequest.status !== 'COMPLETED' && (
        <div className="active-trip-banner glass-panel glow-cyan">
          <div className="trip-banner-left">
            <span className="active-pip-green"></span>
            <div>
              <span className="trip-status-pill">ACTIVE EMERGENCY RUN #{activeRequest.id}</span>
              <h3 className="trip-patient-title">
                Patient: {activeRequest.patientName} • Stage: {activeRequest.status.replace(/_/g, ' ')}
              </h3>
              <span className="trip-hospital-target">
                Destination: {activeRequest.destinationHospital.name}
              </span>
            </div>
          </div>

          <button onClick={handleOpenActiveTrip} className="btn-open-trip-console">
            <Navigation size={18} />
            <span>OPEN TRIP NAVIGATION CONSOLE</span>
          </button>
        </div>
      )}

      {/* Core Grid: Location & Today's Trips */}
      <div className="driver-grid-cols">
        {/* Left Column: Driver Location & Telemetry */}
        <div className="col-location glass-panel">
          <div className="panel-title-row">
            <MapPin size={18} color="#06b6d4" />
            <h3>Current Vehicle Location & Telemetry</h3>
          </div>

          <div className="loc-telemetry-box">
            <div className="telem-row">
              <span className="telem-lbl">CURRENT PARKING / STANDBY BASE</span>
              <h4 className="telem-val">{currentDriver?.currentLocation?.address || 'Near Thirumangalam Flyover, Chennai'}</h4>
            </div>

            <div className="telem-sub-grid">
              <div className="telem-mini-card">
                <span className="mini-lbl">VEHICLE FUEL</span>
                <span className="mini-val green">88% (Full Tank)</span>
              </div>
              <div className="telem-mini-card">
                <span className="mini-lbl">OXYGEN CYLINDER</span>
                <span className="mini-val green">3,800 PSI (Optimal)</span>
              </div>
              <div className="telem-mini-card">
                <span className="mini-lbl">VENTILATOR BATTERY</span>
                <span className="mini-val cyan">100% Charge</span>
              </div>
              <div className="telem-mini-card">
                <span className="mini-lbl">RADIO GATEWAY</span>
                <span className="mini-val">Ch-4 Trauma Ops</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Today's Trips & Earnings */}
        <div className="col-trips glass-panel">
          <div className="panel-title-row">
            <Clock size={18} color="#06b6d4" />
            <h3>Today's Emergency Trips Log</h3>
          </div>

          <div className="trips-stats-grid">
            <div className="trip-stat-card">
              <span className="ts-num">4</span>
              <span className="ts-lbl">Trips Today</span>
            </div>
            <div className="trip-stat-card">
              <span className="ts-num green">100%</span>
              <span className="ts-lbl">Acceptance Rate</span>
            </div>
            <div className="trip-stat-card">
              <span className="ts-num cyan">5.2 min</span>
              <span className="ts-lbl">Avg Response</span>
            </div>
          </div>

          <div className="recent-driver-trips-list">
            <div className="driver-trip-item">
              <div className="dt-time">14:15</div>
              <div className="dt-info">
                <h4 className="dt-title">Cardiac Emergency • Handover Complete</h4>
                <p className="dt-desc">Anna Nagar 2nd Ave → Apollo Multi-Speciality</p>
              </div>
              <span className="badge badge-success">Done</span>
            </div>

            <div className="driver-trip-item">
              <div className="dt-time">11:05</div>
              <div className="dt-info">
                <h4 className="dt-title">Vehicular Trauma • BLS Transfer</h4>
                <p className="dt-desc">Koyambedu Flyover → MIOT Hospital</p>
              </div>
              <span className="badge badge-success">Done</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .driver-dash-root {
          padding: 30px 20px 60px;
        }

        .driver-top-card {
          padding: 28px 32px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 24px;
        }

        .driver-profile-row {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .driver-avatar-box {
          position: relative;
          width: 72px;
          height: 72px;
          flex-shrink: 0;
        }

        .d-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .online-pip {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid #0f172a;
        }

        .online-pip.green {
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
        }

        .online-pip.gray {
          background: #64748b;
        }

        .role-strip {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .driver-name-headline {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }

        .driver-assigned-vehicle {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .online-toggle-box {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .status-label-text {
          font-size: 0.72rem;
          color: var(--text-dim);
          letter-spacing: 0.05em;
        }

        .btn-online-toggle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 0.88rem;
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-online-toggle.active-online {
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid #10b981;
          color: #34d399;
        }

        .btn-online-toggle.active-offline {
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid #ef4444;
          color: #f87171;
        }

        /* Incoming Alert Banner */
        .incoming-alert-banner {
          padding: 22px 28px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 24px;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(15, 23, 42, 0.95) 100%);
          border-color: #ef4444;
          animation: beacon-pulse 1.8s infinite;
        }

        .alert-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .pulse-siren-box {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-md);
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .alert-badge {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #fca5a5;
          margin-bottom: 2px;
        }

        .alert-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
        }

        .alert-loc {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: #e2e8f0;
          margin-top: 2px;
        }

        .btn-respond-request {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-weight: 800;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(239, 68, 68, 0.5);
          transition: var(--transition);
        }

        .btn-respond-request:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(239, 68, 68, 0.75);
        }

        /* Active Trip Banner */
        .active-trip-banner {
          padding: 20px 28px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 24px;
          background: rgba(6, 182, 212, 0.08);
          border-color: #06b6d4;
        }

        .trip-banner-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .active-pip-green {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: beacon-pulse 1s infinite;
        }

        .trip-status-pill {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--accent-cyan);
          letter-spacing: 0.06em;
        }

        .trip-patient-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
        }

        .trip-hospital-target {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .btn-open-trip-console {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: var(--radius-full);
          background: #0284c7;
          color: #ffffff;
          font-weight: 800;
          font-size: 0.88rem;
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-open-trip-console:hover {
          background: #0369a1;
          transform: translateY(-2px);
        }

        /* 2-Column Core Grid */
        .driver-grid-cols {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
        }

        .col-location, .col-trips {
          padding: 24px;
          border-radius: var(--radius-xl);
        }

        .panel-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 12px;
        }

        .panel-title-row h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .telem-row {
          background: rgba(0, 0, 0, 0.25);
          border-radius: var(--radius-md);
          padding: 14px 16px;
          margin-bottom: 16px;
        }

        .telem-lbl {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 4px;
        }

        .telem-val {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
        }

        .telem-sub-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .telem-mini-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          display: flex;
          flex-direction: column;
        }

        .mini-lbl {
          font-size: 0.65rem;
          color: var(--text-dim);
          font-weight: 700;
        }

        .mini-val {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
        }

        .mini-val.green { color: #34d399; }
        .mini-val.cyan { color: #38bdf8; }

        .trips-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }

        .trip-stat-card {
          background: rgba(0, 0, 0, 0.25);
          border-radius: var(--radius-md);
          padding: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .ts-num {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff;
        }

        .ts-num.green { color: #34d399; }
        .ts-num.cyan { color: #38bdf8; }

        .ts-lbl {
          font-size: 0.72rem;
          color: var(--text-dim);
          font-weight: 600;
        }

        .recent-driver-trips-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .driver-trip-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-md);
          padding: 12px 14px;
        }

        .dt-time {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .dt-info {
          flex: 1;
        }

        .dt-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #ffffff;
        }

        .dt-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .driver-grid-cols {
            grid-template-columns: 1fr;
          }
          .online-toggle-box {
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default DriverDashboard;
