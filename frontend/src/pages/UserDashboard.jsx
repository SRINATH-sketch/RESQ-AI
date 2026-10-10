import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  User,
  MapPin,
  Ambulance,
  Building2,
  Clock,
  Phone,
  ShieldCheck,
  AlertCircle,
  Plus,
  ArrowRight,
  Activity,
  HeartPulse,
  Navigation
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useRequest } from '../context/RequestContext';
import { EmergencyButton } from '../components/common/EmergencyButton';
import { LocationCard } from '../components/cards/LocationCard';
import { HospitalCard } from '../components/cards/HospitalCard';
import { RequestCard } from '../components/cards/RequestCard';
import { MOCK_HOSPITALS } from '../data/mockData';

export const UserDashboard = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { activeRequest, recentRequests, draftLocation, setDraftLocation } = useRequest();
  const [selectedHospitalTab, setSelectedHospitalTab] = useState(MOCK_HOSPITALS[0]);

  const handleStartEmergency = () => {
    navigate('/request/location');
  };

  const handleResumeActiveRequest = () => {
    if (!activeRequest) return;
    const s = activeRequest.status;
    if (s === 'REQUESTED' || s === 'MATCHING') navigate('/request/sent');
    else if (s === 'DRIVER_ACCEPTED') navigate('/request/accepted');
    else if (s === 'ON_THE_WAY') navigate('/request/tracking');
    else if (s === 'ARRIVED') navigate('/request/arrived');
    else if (s === 'PATIENT_PICKED_UP' || s === 'AT_HOSPITAL') navigate('/request/hospital');
    else if (s === 'COMPLETED') navigate('/request/completed');
    else navigate('/request/tracking');
  };

  return (
    <div className="dashboard-page-root container">
      {/* Top Welcome / Profile Header */}
      <div className="dash-header-card glass-panel">
        <div className="dash-user-row">
          <div className="dash-avatar-large">
            {currentUser?.name ? currentUser.name.charAt(0) : 'U'}
          </div>
          <div className="dash-user-text">
            <div className="badge-row">
              <span className="account-type-badge">CITIZEN DISPATCH ACCOUNT</span>
              <span className="blood-group-badge">
                <HeartPulse size={12} color="#ef4444" />
                <span>Blood: {currentUser?.bloodGroup || 'B+'}</span>
              </span>
            </div>
            <h1 className="dash-user-name">{currentUser?.name || 'Emergency Patient'}</h1>
            <p className="dash-user-contact">
              {currentUser?.phone} • {currentUser?.email}
            </p>
          </div>
        </div>

        <div className="dash-quick-contacts">
          <span className="qc-label">Primary Emergency Contact:</span>
          <span className="qc-name">Priya Sharma (Spouse)</span>
          <a href="tel:+919876543211" className="qc-phone">
            <Phone size={13} />
            <span>+91 98765 43211</span>
          </a>
        </div>
      </div>

      {/* Prominent Emergency Action Banner */}
      <div className="emergency-callout-banner glass-panel glow-red">
        <div className="callout-content">
          <div className="callout-pill">
            <span className="beacon-pip"></span>
            <span>24/7 RAPID AMBULANCE DISPATCH</span>
          </div>
          <h2 className="callout-heading">Need Urgent Medical Assistance?</h2>
          <p className="callout-desc">
            Instantly alert the closest ALS / BLS ambulances in your immediate vicinity. Location and patient triage are matched in real-time.
          </p>
        </div>

        <div className="callout-btn-wrap">
          <EmergencyButton
            onClick={handleStartEmergency}
            text="REQUEST AMBULANCE"
            subtext="Tap for Immediate Emergency Routing"
            size="large"
            id="dashRequestAmbulanceActionBtn"
          />
        </div>
      </div>

      {/* ACTIVE AMBULANCE REQUEST (If any active) */}
      {activeRequest && activeRequest.status !== 'CLOSED' && (
        <div className="active-dispatch-panel glass-panel glow-red">
          <div className="active-panel-top">
            <div className="active-tag-group">
              <span className="live-pulse-dot"></span>
              <span className="active-title">ACTIVE AMBULANCE REQUEST #{activeRequest.id}</span>
            </div>
            <span className="active-status-pill">{activeRequest.status.replace(/_/g, ' ')}</span>
          </div>

          <div className="active-details-grid">
            <div>
              <span className="act-lbl">PATIENT</span>
              <h4 className="act-val">{activeRequest.patientName} ({activeRequest.emergencyType})</h4>
            </div>
            <div>
              <span className="act-lbl">AMBULANCE</span>
              <h4 className="act-val">{activeRequest.ambulance?.vehicleNumber || 'TN-01-AB-1234'} ({activeRequest.ambulance?.type})</h4>
            </div>
            <div>
              <span className="act-lbl">DRIVER</span>
              <h4 className="act-val">{activeRequest.driver?.name || 'Kumar Selvam'} ({activeRequest.driver?.phone})</h4>
            </div>
            <div>
              <span className="act-lbl">DESTINATION</span>
              <h4 className="act-val">{activeRequest.destinationHospital?.name || 'Apollo Multi-Speciality'}</h4>
            </div>
          </div>

          <div className="active-panel-footer">
            <button onClick={handleResumeActiveRequest} className="btn-resume-tracking">
              <Navigation size={18} />
              <span>OPEN LIVE TRACKING CONSOLE ➔</span>
            </button>
          </div>
        </div>
      )}

      {/* Dashboard 2-Column Core Layout */}
      <div className="dash-main-grid">
        {/* Left Column: Current Location & Hospital Information */}
        <div className="dash-col-left">
          {/* Current Location Card */}
          <div className="section-title-strip">
            <MapPin size={18} color="#06b6d4" />
            <h3>Your Saved Emergency Pickup Location</h3>
          </div>

          <LocationCard
            pickupAddress={draftLocation.pickupAddress}
            landmark={draftLocation.landmark}
            hospitalName={draftLocation.destinationHospital?.name}
            hospitalAddress={draftLocation.destinationHospital?.address}
            onEdit={() => navigate('/request/location')}
            editable={true}
          />

          {/* Integrated Hospitals Network Info */}
          <div className="section-title-strip" style={{ marginTop: '28px' }}>
            <Building2 size={18} color="#06b6d4" />
            <h3>Hospital Information & Trauma Centers</h3>
          </div>

          <p className="section-info-desc">
            Directly mapped trauma centers with live ICU bed availability and specialized stroke/cardiac bays:
          </p>

          <div className="hospitals-preview-list">
            {MOCK_HOSPITALS.map((hosp) => (
              <HospitalCard
                key={hosp.id}
                hospital={hosp}
                isSelected={draftLocation.destinationHospital?.id === hosp.id}
                onSelect={() => {
                  setDraftLocation({ ...draftLocation, destinationHospital: hosp });
                }}
                showSelect={true}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Recent Requests & Emergency Quick Contacts */}
        <div className="dash-col-right">
          <div className="section-title-strip">
            <Clock size={18} color="#06b6d4" />
            <h3>Recent Requests History</h3>
          </div>

          <div className="recent-requests-container">
            {recentRequests && recentRequests.length > 0 ? (
              recentRequests.map((req) => (
                <RequestCard
                  key={req.id}
                  request={req}
                  onAction={() => {
                    navigate('/request/location');
                  }}
                  actionText="Request Again"
                />
              ))
            ) : (
              <div className="no-requests-box glass-panel">
                <p>No past ambulance requests on file.</p>
              </div>
            )}
          </div>

          {/* Quick Helplines Box */}
          <div className="emergency-contacts-card glass-panel">
            <h4 className="contacts-card-title">National Emergency Speed Dial</h4>
            <div className="speed-dial-list">
              <a href="tel:108" className="dial-item red">
                <span className="dial-code">108</span>
                <span className="dial-desc">Govt. Emergency Ambulance</span>
              </a>
              <a href="tel:112" className="dial-item blue">
                <span className="dial-code">112</span>
                <span className="dial-desc">All-in-One National Helpline</span>
              </a>
              <a href="tel:1066" className="dial-item teal">
                <span className="dial-code">1066</span>
                <span className="dial-desc">Apollo Emergency Line</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .dashboard-page-root {
          padding: 36px 20px 60px;
        }

        /* Profile Header */
        .dash-header-card {
          padding: 24px 28px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 24px;
        }

        .dash-user-row {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .dash-avatar-large {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          border: 2px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
        }

        .badge-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .account-type-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.12);
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .blood-group-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #f87171;
          background: rgba(239, 68, 68, 0.1);
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .dash-user-name {
          font-size: 1.55rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }

        .dash-user-contact {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .dash-quick-contacts {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 10px 16px;
        }

        .qc-label {
          font-size: 0.68rem;
          color: var(--text-dim);
          font-weight: 700;
        }

        .qc-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: #ffffff;
        }

        .qc-phone {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-cyan);
        }

        /* Prominent Emergency Callout */
        .emergency-callout-banner {
          padding: 28px 32px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          margin-bottom: 30px;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%);
        }

        .callout-content {
          max-width: 620px;
        }

        .callout-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #fca5a5;
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.4);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .beacon-pip {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: beacon-pulse 1.2s infinite;
        }

        .callout-heading {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .callout-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Active Dispatch Banner */
        .active-dispatch-panel {
          padding: 22px 28px;
          border-radius: var(--radius-xl);
          margin-bottom: 30px;
          background: rgba(239, 68, 68, 0.07);
        }

        .active-panel-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 12px;
        }

        .active-tag-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .live-pulse-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 10px #ef4444;
          animation: beacon-pulse 1s infinite;
        }

        .active-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.02em;
        }

        .active-status-pill {
          background: #ef4444;
          color: #fff;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
        }

        .active-details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 18px;
        }

        .act-lbl {
          font-size: 0.68rem;
          color: var(--text-dim);
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .act-val {
          font-size: 0.95rem;
          color: #ffffff;
          font-weight: 700;
          margin-top: 2px;
        }

        .btn-resume-tracking {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-weight: 800;
          font-size: 0.92rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(239, 68, 68, 0.4);
          transition: var(--transition);
        }

        .btn-resume-tracking:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 22px rgba(239, 68, 68, 0.65);
        }

        /* 2-Column Grid */
        .dash-main-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
        }

        .section-title-strip {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .section-title-strip h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .section-info-desc {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .emergency-contacts-card {
          padding: 20px;
          border-radius: var(--radius-lg);
          margin-top: 24px;
        }

        .contacts-card-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .speed-dial-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dial-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          transition: var(--transition);
        }

        .dial-item:hover {
          transform: translateX(4px);
        }

        .dial-code {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 800;
        }

        .dial-item.red .dial-code { color: #ef4444; }
        .dial-item.blue .dial-code { color: #38bdf8; }
        .dial-item.teal .dial-code { color: #2dd4bf; }

        .dial-desc {
          font-size: 0.82rem;
          color: var(--text-main);
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .dash-main-grid {
            grid-template-columns: 1fr;
          }
          .emergency-callout-banner {
            flex-direction: column;
            align-items: stretch;
          }
          .dash-quick-contacts {
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default UserDashboard;
