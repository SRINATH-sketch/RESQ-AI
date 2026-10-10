import React from 'react';
import {
  Ambulance,
  Clock,
  Navigation,
  Sparkles,
  Check,
  Star,
  Activity,
  Shield,
  CircleDot
} from 'lucide-react';

export const AmbulanceCard = ({
  ambulance,
  isSelected = false,
  onSelect,
  showAction = true,
  actionText = 'Select This Ambulance'
}) => {
  const {
    unitName,
    vehicleNumber,
    type,
    typeCode,
    distance,
    eta,
    status,
    rating,
    equipment = [],
    recommended,
    aiMatchScore,
    aiMatchReason,
    baseFare
  } = ambulance;

  return (
    <div
      className={`ambulance-unit-card glass-panel ${isSelected ? 'selected-card' : ''} ${recommended ? 'ai-recommended-border' : ''}`}
      onClick={onSelect}
    >
      {/* Top Banner if Recommended */}
      {recommended && (
        <div className="recommended-top-strip">
          <div className="ai-score-pill">
            <Sparkles size={13} />
            <span>AI MATCH SCORE: {aiMatchScore}% SUITABLE</span>
          </div>
          <span className="strip-note">Recommended for Emergency Profile</span>
        </div>
      )}

      <div className="card-main-body">
        {/* Header row */}
        <div className="unit-header-row">
          <div className="unit-title-group">
            <div className="unit-icon-badge">
              <Ambulance size={22} />
            </div>
            <div>
              <div className="title-and-badge">
                <h3 className="unit-name-text">{unitName}</h3>
                <span className={`badge ${typeCode === 'ALS' ? 'badge-als' : 'badge-bls'}`}>
                  {type}
                </span>
              </div>
              <span className="vehicle-plate-text">{vehicleNumber}</span>
            </div>
          </div>

          <div className="unit-rate-status">
            <div className="rating-pill">
              <Star size={13} fill="#f59e0b" color="#f59e0b" />
              <span>{rating}</span>
            </div>
            <div className="status-live-pill">
              <CircleDot size={12} color="#10b981" />
              <span>{status}</span>
            </div>
          </div>
        </div>

        {/* AI Explainability Note */}
        {aiMatchReason && (
          <div className="ai-explanation-box">
            <span className="ai-reason-label">
              <Sparkles size={13} color="#a855f7" />
              AI Matching Rationale:
            </span>
            <p className="ai-reason-text">{aiMatchReason}</p>
          </div>
        )}

        {/* Metric Triplet: Distance, ETA, Base Fare */}
        <div className="metrics-grid">
          <div className="metric-box">
            <div className="metric-icon">
              <Clock size={16} />
            </div>
            <div>
              <span className="m-label">ESTIMATED ETA</span>
              <span className="m-val eta">{eta}</span>
            </div>
          </div>

          <div className="metric-box">
            <div className="metric-icon">
              <Navigation size={16} />
            </div>
            <div>
              <span className="m-label">PROXIMITY</span>
              <span className="m-val">{distance}</span>
            </div>
          </div>

          <div className="metric-box">
            <div className="metric-icon">
              <Shield size={16} />
            </div>
            <div>
              <span className="m-label">EST. FARE</span>
              <span className="m-val">{baseFare}</span>
            </div>
          </div>
        </div>

        {/* Equipment Badges */}
        {equipment.length > 0 && (
          <div className="equipment-section">
            <span className="equip-title">Life Support Equipment Onboard:</span>
            <div className="equip-tags-wrap">
              {equipment.slice(0, 4).map((item, idx) => (
                <span key={idx} className="equip-tag">
                  <Activity size={11} />
                  <span>{item}</span>
                </span>
              ))}
              {equipment.length > 4 && (
                <span className="equip-tag more">+{equipment.length - 4} more</span>
              )}
            </div>
          </div>
        )}

        {/* Selection / Action Button */}
        {showAction && (
          <div className="card-footer-action">
            <button
              type="button"
              className={`select-amb-btn ${isSelected ? 'selected' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                if (onSelect) onSelect();
              }}
            >
              {isSelected ? (
                <>
                  <Check size={18} />
                  <span>Selected Ambulance</span>
                </>
              ) : (
                <span>{actionText}</span>
              )}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .ambulance-unit-card {
          position: relative;
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          margin-bottom: 16px;
        }

        .ambulance-unit-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .ai-recommended-border {
          border-color: rgba(147, 51, 234, 0.5) !important;
          box-shadow: 0 0 25px -5px rgba(147, 51, 234, 0.25);
        }

        .selected-card {
          border-color: var(--emergency-red) !important;
          background: rgba(239, 68, 68, 0.04);
          box-shadow: 0 0 30px -5px rgba(239, 68, 68, 0.35);
        }

        .recommended-top-strip {
          background: linear-gradient(90deg, #4c1d95 0%, #1e1b4b 100%);
          padding: 6px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.74rem;
          color: #e9d5ff;
          font-weight: 600;
          border-bottom: 1px solid rgba(168, 85, 247, 0.3);
        }

        .ai-score-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #f3e8ff;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .card-main-body {
          padding: 20px;
        }

        .unit-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .unit-title-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .unit-icon-badge {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .title-and-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .unit-name-text {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .vehicle-plate-text {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .unit-rate-status {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }

        .rating-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #fbbf24;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.25);
          padding: 3px 8px;
          border-radius: var(--radius-full);
        }

        .status-live-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #34d399;
        }

        .ai-explanation-box {
          background: rgba(147, 51, 234, 0.08);
          border: 1px solid rgba(147, 51, 234, 0.22);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          margin-bottom: 16px;
        }

        .ai-reason-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          font-weight: 700;
          color: #c084fc;
          margin-bottom: 4px;
        }

        .ai-reason-text {
          font-size: 0.82rem;
          color: #e2e8f0;
          line-height: 1.45;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 16px;
        }

        .metric-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .metric-icon {
          color: var(--accent-cyan);
        }

        .m-label {
          display: block;
          font-size: 0.65rem;
          color: var(--text-dim);
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .m-val {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
        }

        .m-val.eta {
          color: #38bdf8;
        }

        .equipment-section {
          margin-bottom: 16px;
        }

        .equip-title {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        .equip-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .equip-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }

        .equip-tag.more {
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.1);
        }

        .card-footer-action {
          margin-top: 8px;
        }

        .select-amb-btn {
          width: 100%;
          padding: 10px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #ffffff;
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: var(--transition);
        }

        .select-amb-btn:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .select-amb-btn.selected {
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          border-color: #ef4444;
          box-shadow: 0 0 15px rgba(239, 68, 68, 0.4);
        }
      `}</style>
    </div>
  );
};

export default AmbulanceCard;
