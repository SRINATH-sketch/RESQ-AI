import React, { useState } from 'react';
import {
  Phone,
  Star,
  ShieldCheck,
  Award,
  Clock,
  CarFront,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { Modal } from '../common/Modal';

export const DriverCard = ({
  driver,
  ambulance,
  onCall,
  showCallModalDirect = true
}) => {
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [isCalling, setIsCalling] = useState(false);

  const {
    name = 'Kumar Selvam',
    avatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    phone = '+91 94441 23456',
    rating = 4.9,
    tripsCompleted = 428,
    experience = '6 Years Emergency Driving'
  } = driver || {};

  const handleCallClick = () => {
    if (onCall) {
      onCall();
    } else {
      setCallModalOpen(true);
      setIsCalling(true);
      setTimeout(() => setIsCalling(false), 2000);
    }
  };

  return (
    <div className="resq-driver-card glass-panel">
      <div className="driver-card-inner">
        {/* Driver Avatar & Rating */}
        <div className="avatar-wrapper">
          <img src={avatar} alt={name} className="driver-img" />
          <div className="driver-status-badge" title="Certified Emergency Driver">
            <ShieldCheck size={14} color="#10b981" />
          </div>
        </div>

        {/* Details Column */}
        <div className="driver-info-col">
          <div className="driver-meta-top">
            <span className="driver-badge">DISPATCHED RESPONDER</span>
            <div className="driver-rating-row">
              <Star size={14} fill="#f59e0b" color="#f59e0b" />
              <span className="rating-score">{rating}</span>
              <span className="trips-count">({tripsCompleted} trips)</span>
            </div>
          </div>

          <h3 className="driver-full-name">{name}</h3>
          <p className="driver-exp-sub">{experience} • Advanced First Responder</p>

          {/* Assigned Ambulance Summary */}
          {ambulance && (
            <div className="assigned-vehicle-strip">
              <CarFront size={14} color="#38bdf8" />
              <span className="veh-plate">{ambulance.vehicleNumber}</span>
              <span className="veh-type">({ambulance.type})</span>
            </div>
          )}
        </div>

        {/* Action Button: Call Driver */}
        <div className="driver-actions-col">
          <button
            onClick={handleCallClick}
            className="btn-call-driver"
            title={`Call Driver ${name}`}
          >
            <Phone size={18} />
            <span>Call Driver</span>
          </button>
          <a href={`tel:${phone}`} className="direct-phone-num">
            {phone}
          </a>
        </div>
      </div>

      {/* Direct Call Simulation Modal */}
      <Modal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
        title="Emergency Line to Ambulance Driver"
        subtitle={`Connecting to ${name} on priority line...`}
      >
        <div className="call-sim-box">
          <div className="call-sim-avatar">
            <img src={avatar} alt={name} />
            <div className="call-sound-wave"></div>
          </div>

          <h4 className="call-sim-name">{name}</h4>
          <span className="call-sim-status">
            {isCalling ? 'Dialing Driver In-Cabin Comm...' : 'Connected (Priority VoIP Channel)'}
          </span>
          <span className="call-sim-phone">{phone}</span>

          <div className="call-tip-note">
            Driver is navigating with sirens active. Please keep instructions brief and landmark-focused.
          </div>

          <button
            className="btn-end-call"
            onClick={() => setCallModalOpen(false)}
          >
            End Call
          </button>
        </div>
      </Modal>

      <style>{`
        .resq-driver-card {
          padding: 20px;
          border-radius: var(--radius-lg);
          margin-bottom: 20px;
        }

        .driver-card-inner {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .avatar-wrapper {
          position: relative;
          width: 68px;
          height: 68px;
          flex-shrink: 0;
        }

        .driver-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .driver-status-badge {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 22px;
          height: 22px;
          background: #0f172a;
          border: 1.5px solid #10b981;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .driver-info-col {
          flex: 1;
          min-width: 200px;
        }

        .driver-meta-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }

        .driver-badge {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.1);
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .driver-rating-row {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
        }

        .rating-score {
          font-weight: 700;
          color: #fbbf24;
        }

        .trips-count {
          color: var(--text-dim);
          font-size: 0.75rem;
        }

        .driver-full-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
        }

        .driver-exp-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .assigned-vehicle-strip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 8px;
          background: rgba(255, 255, 255, 0.04);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
        }

        .veh-plate {
          font-family: var(--font-mono);
          font-weight: 700;
          color: #ffffff;
        }

        .veh-type {
          color: var(--text-muted);
        }

        .driver-actions-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }

        .btn-call-driver {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #10b981;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.88rem;
          border: none;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: var(--transition);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
        }

        .btn-call-driver:hover {
          background: #059669;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.5);
        }

        .direct-phone-num {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-dim);
        }

        .direct-phone-num:hover {
          color: #ffffff;
        }

        /* Call Sim Modal Styles */
        .call-sim-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 10px 0;
        }

        .call-sim-avatar {
          position: relative;
          width: 84px;
          height: 84px;
          margin-bottom: 16px;
        }

        .call-sim-avatar img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #10b981;
        }

        .call-sound-wave {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 2px solid rgba(16, 185, 129, 0.6);
          animation: beacon-expand 1.6s infinite;
        }

        .call-sim-name {
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffffff;
        }

        .call-sim-status {
          font-size: 0.85rem;
          color: #34d399;
          font-weight: 600;
          margin-top: 4px;
        }

        .call-sim-phone {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-top: 6px;
        }

        .call-tip-note {
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-md);
          padding: 10px 16px;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 20px 0;
        }

        .btn-end-call {
          background: #ef4444;
          color: #fff;
          font-weight: 700;
          padding: 12px 32px;
          border-radius: var(--radius-full);
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-end-call:hover {
          background: #dc2626;
        }

        @media (max-width: 640px) {
          .driver-actions-col {
            width: 100%;
            align-items: stretch;
          }
          .btn-call-driver {
            justify-content: center;
          }
          .direct-phone-num {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default DriverCard;
