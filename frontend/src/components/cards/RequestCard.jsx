import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Building2,
  Ambulance,
  User,
  Star,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  HeartPulse
} from 'lucide-react';

export const RequestCard = ({
  request,
  onAction,
  actionText = 'View Tracking',
  isCurrentActive = false
}) => {
  const {
    id,
    date = 'Recent',
    patientName,
    emergencyType,
    ambulanceNumber,
    driverName,
    pickupLocation,
    destinationHospital,
    status = 'COMPLETED',
    duration = '20 mins',
    distance = '5.4 km',
    rating = 5
  } = request;

  const pickupStr = typeof pickupLocation === 'object' ? pickupLocation.address : pickupLocation;
  const hospitalStr = typeof destinationHospital === 'object' ? destinationHospital.name : destinationHospital;

  return (
    <div className={`resq-request-card glass-panel ${isCurrentActive ? 'active-glow' : ''}`}>
      <div className="card-top-header">
        <div className="req-id-badge">
          <span className="req-id-text">{id}</span>
          <span className="req-date-text">{date}</span>
        </div>
        <div className="req-type-pill">
          <HeartPulse size={13} color="#ef4444" />
          <span>{emergencyType}</span>
        </div>
      </div>

      <div className="req-patient-row">
        <div className="patient-avatar-mini">
          <User size={16} />
        </div>
        <div>
          <h4 className="patient-name-title">{patientName}</h4>
          <span className="driver-sub-text">
            Ambulance: <strong>{ambulanceNumber || 'TN-01-AB-1234'}</strong> • Driver: {driverName || 'Kumar'}
          </span>
        </div>
      </div>

      <div className="req-route-summary">
        <div className="route-point">
          <MapPin size={14} className="point-pin red" />
          <span className="route-text">{pickupStr}</span>
        </div>
        <div className="route-point">
          <Building2 size={14} className="point-pin cyan" />
          <span className="route-text">{hospitalStr}</span>
        </div>
      </div>

      <div className="req-footer-stats">
        <div className="stats-badges">
          <span className="stat-pill">
            <Clock size={12} />
            <span>{duration}</span>
          </span>
          <span className="stat-pill">
            <span>{distance}</span>
          </span>
          {rating && (
            <span className="rating-mini-pill">
              <Star size={12} fill="#f59e0b" color="#f59e0b" />
              <span>{rating}.0</span>
            </span>
          )}
        </div>

        {onAction && (
          <button onClick={() => onAction(request)} className="btn-req-action">
            <span>{actionText}</span>
            <ArrowRight size={14} />
          </button>
        )}
      </div>

      <style>{`
        .resq-request-card {
          padding: 18px 20px;
          border-radius: var(--radius-lg);
          margin-bottom: 14px;
          transition: var(--transition);
        }

        .active-glow {
          border-color: rgba(239, 68, 68, 0.45);
          background: rgba(239, 68, 68, 0.05);
          box-shadow: 0 0 25px -5px rgba(239, 68, 68, 0.3);
        }

        .card-top-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .req-id-badge {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .req-id-text {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }

        .req-date-text {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .req-type-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.74rem;
          font-weight: 700;
          color: #f87171;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .req-patient-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .patient-avatar-mini {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          color: #60a5fa;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .patient-name-title {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .driver-sub-text {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .req-route-summary {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: var(--radius-md);
          padding: 10px 12px;
          margin-bottom: 12px;
        }

        .route-point {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .point-pin.red {
          color: #ef4444;
          flex-shrink: 0;
        }

        .point-pin.cyan {
          color: #06b6d4;
          flex-shrink: 0;
        }

        .route-text {
          font-size: 0.8rem;
          color: var(--text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .req-footer-stats {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }

        .stats-badges {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.04);
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }

        .rating-mini-pill {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #fbbf24;
          background: rgba(245, 158, 11, 0.1);
          padding: 3px 7px;
          border-radius: var(--radius-sm);
        }

        .btn-req-action {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 700;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 5px 12px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-req-action:hover {
          background: #ef4444;
          border-color: #ef4444;
        }
      `}</style>
    </div>
  );
};

export default RequestCard;
