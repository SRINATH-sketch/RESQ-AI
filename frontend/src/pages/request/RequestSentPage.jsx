import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Radio,
  CheckCircle2,
  Clock,
  User,
  MapPin,
  HeartPulse,
  Ambulance,
  Building2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useRequest } from '../../context/RequestContext';
import { StatusTracker } from '../../components/common/StatusTracker';

export const RequestSentPage = () => {
  const navigate = useNavigate();
  const { activeRequest, updateRequestStatus } = useRequest();

  const [dispatchStage, setDispatchStage] = useState(1); // 1 = Sent, 2 = Waiting, 3 = Driver Accepted
  const [secondsWaiting, setSecondsWaiting] = useState(0);

  useEffect(() => {
    // If no active request, redirect to request initiation
    if (!activeRequest) {
      navigate('/request/location');
      return;
    }

    const timer = setInterval(() => {
      setSecondsWaiting((s) => s + 1);
    }, 1000);

    // Auto-advance driver acceptance for demo
    const t1 = setTimeout(() => {
      setDispatchStage(2);
    }, 1200);

    const t2 = setTimeout(() => {
      setDispatchStage(3);
      updateRequestStatus('DRIVER_ACCEPTED');
      setTimeout(() => {
        navigate('/request/accepted');
      }, 1400);
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [activeRequest, navigate, updateRequestStatus]);

  if (!activeRequest) return null;

  const handleInstantAccept = () => {
    setDispatchStage(3);
    updateRequestStatus('DRIVER_ACCEPTED');
    navigate('/request/accepted');
  };

  return (
    <div className="request-sent-root container-narrow">
      {/* Status Tracker */}
      <StatusTracker currentStatus="REQUESTED" />

      {/* Main Request Sent Container */}
      <div className="request-sent-card glass-panel glow-red">
        {/* Animated Beacon Header */}
        <div className="sent-top-beacon">
          <div className="broadcasting-radar">
            <Radio size={36} color="#ef4444" className="broadcast-icon" />
            <span className="wave-ring w-1"></span>
            <span className="wave-ring w-2"></span>
          </div>

          <h1 className="sent-title">Ambulance Request Sent</h1>
          <p className="sent-subtitle">
            Broadcasting emergency telemetry to nearest available fleet unit.
          </p>
        </div>

        {/* Clean 3-Stage Progress Indicator */}
        <div className="clean-status-stepper">
          <div className={`step-item ${dispatchStage >= 1 ? 'done' : ''}`}>
            <div className="step-circle">
              <CheckCircle2 size={18} />
            </div>
            <div className="step-info">
              <span className="step-label">Request Sent</span>
              <span className="step-desc">Logged into dispatch queue</span>
            </div>
          </div>

          <div className="stepper-line">
            <div className={`line-fill ${dispatchStage >= 2 ? 'active' : ''}`}></div>
          </div>

          <div className={`step-item ${dispatchStage === 2 ? 'active' : dispatchStage > 2 ? 'done' : ''}`}>
            <div className="step-circle">
              {dispatchStage >= 3 ? <CheckCircle2 size={18} /> : <Clock size={18} />}
              {dispatchStage === 2 && <span className="ring-pulse"></span>}
            </div>
            <div className="step-info">
              <span className="step-label">Waiting for Driver</span>
              <span className="step-desc">Driver unit verifying dispatch ({secondsWaiting}s)</span>
            </div>
          </div>

          <div className="stepper-line">
            <div className={`line-fill ${dispatchStage >= 3 ? 'active' : ''}`}></div>
          </div>

          <div className={`step-item ${dispatchStage >= 3 ? 'done' : ''}`}>
            <div className="step-circle">
              <ShieldCheck size={18} />
            </div>
            <div className="step-info">
              <span className="step-label">Driver Accepted</span>
              <span className="step-desc">Ambulance locked to route</span>
            </div>
          </div>
        </div>

        {/* Request Details Matrix */}
        <div className="req-details-grid">
          <div className="detail-field">
            <span className="d-label">REQUEST ID</span>
            <span className="d-val id-mono">{activeRequest.id}</span>
          </div>

          <div className="detail-field">
            <span className="d-label">PATIENT NAME</span>
            <span className="d-val">{activeRequest.patientName}</span>
          </div>

          <div className="detail-field">
            <span className="d-label">EMERGENCY TYPE</span>
            <span className="d-val red">{activeRequest.emergencyType}</span>
          </div>

          <div className="detail-field">
            <span className="d-label">STATUS</span>
            <span className="d-val status-badge">
              {dispatchStage === 1 ? 'REQUEST SENT' : dispatchStage === 2 ? 'WAITING FOR DRIVER' : 'DRIVER ACCEPTED'}
            </span>
          </div>

          <div className="detail-field full">
            <span className="d-label">PICKUP LOCATION</span>
            <span className="d-val">{activeRequest.pickupLocation.address}</span>
            {activeRequest.pickupLocation.landmark && (
              <span className="d-sub">Landmark: {activeRequest.pickupLocation.landmark}</span>
            )}
          </div>

          <div className="detail-field full">
            <span className="d-label">RECEIVING HOSPITAL</span>
            <span className="d-val">{activeRequest.destinationHospital.name}</span>
          </div>
        </div>

        {/* Demo Fast Forward Button */}
        <div className="fast-forward-row">
          <button onClick={handleInstantAccept} className="btn-ff-accept">
            <span>Fast-Forward: Simulate Driver Acceptance</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .request-sent-root {
          padding: 30px 20px 60px;
        }

        .request-sent-card {
          padding: 40px 36px;
          border-radius: var(--radius-xl);
        }

        .sent-top-beacon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 32px;
        }

        .broadcasting-radar {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .broadcast-icon {
          z-index: 2;
        }

        .wave-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 1.5px solid rgba(239, 68, 68, 0.6);
          animation: beacon-expand 2s infinite;
        }

        .wave-ring.w-2 {
          animation-delay: 1s;
        }

        .sent-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .sent-subtitle {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        /* 3-Stage Stepper */
        .clean-status-stepper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 24px;
          margin-bottom: 32px;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .step-circle {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #1e293b;
          border: 2px solid #475569;
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: var(--transition);
        }

        .step-item.active .step-circle {
          background: #ef4444;
          border-color: #fca5a5;
          color: #ffffff;
          box-shadow: 0 0 16px rgba(239, 68, 68, 0.8);
        }

        .step-item.done .step-circle {
          background: #064e3b;
          border-color: #10b981;
          color: #34d399;
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
        }

        .ring-pulse {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1.5px solid #ef4444;
          animation: beacon-pulse 1.2s infinite;
        }

        .step-info {
          display: flex;
          flex-direction: column;
        }

        .step-label {
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
        }

        .step-desc {
          font-size: 0.72rem;
          color: var(--text-dim);
        }

        .stepper-line {
          flex: 1;
          height: 3px;
          background: rgba(255, 255, 255, 0.1);
          margin: 0 16px;
          border-radius: 2px;
          overflow: hidden;
        }

        .line-fill {
          width: 0%;
          height: 100%;
          background: #ef4444;
          transition: width 0.6s ease;
        }

        .line-fill.active {
          width: 100%;
        }

        /* Details Grid */
        .req-details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 24px;
          margin-bottom: 24px;
        }

        .detail-field {
          display: flex;
          flex-direction: column;
        }

        .detail-field.full {
          grid-column: span 2;
        }

        .d-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.06em;
          margin-bottom: 4px;
        }

        .d-val {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
        }

        .d-val.id-mono {
          font-family: var(--font-mono);
          color: var(--accent-cyan);
        }

        .d-val.red {
          color: #f87171;
        }

        .d-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .status-badge {
          display: inline-block;
          font-size: 0.76rem;
          font-weight: 800;
          color: #fca5a5;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .fast-forward-row {
          display: flex;
          justify-content: flex-end;
        }

        .btn-ff-accept {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
          border: 1px dashed rgba(255, 255, 255, 0.2);
          color: var(--text-muted);
          font-size: 0.82rem;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-ff-accept:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .clean-status-stepper {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .stepper-line {
            display: none;
          }
          .req-details-grid {
            grid-template-columns: 1fr;
          }
          .detail-field.full {
            grid-column: span 1;
          }
        }
      `}</style>
    </div>
  );
};

export default RequestSentPage;
