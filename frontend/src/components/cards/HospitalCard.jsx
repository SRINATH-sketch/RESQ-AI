import React from 'react';
import {
  Building2,
  MapPin,
  Phone,
  Bed,
  ShieldAlert,
  Clock,
  Navigation,
  CheckCircle2
} from 'lucide-react';

export const HospitalCard = ({
  hospital,
  isSelected = false,
  onSelect,
  showSelect = false
}) => {
  const {
    name = 'Apollo Multi-Speciality Hospital',
    category = 'Apex Trauma & Cardiac Care',
    address = '21 Greams Road, Thousand Lights, Chennai',
    distance = '5.4 km',
    eta = '12 min',
    phone = '+91 44 2829 0200',
    emergencyDept = '24/7 Level-1 Emergency & Critical Trauma Bay 4',
    icuBedsAvailable = 7,
    rating = 4.9,
    facilities = []
  } = hospital || {};

  return (
    <div
      className={`resq-hospital-card glass-panel ${isSelected ? 'selected-hospital' : ''}`}
      onClick={onSelect}
    >
      <div className="hospital-card-top">
        <div className="hospital-title-wrap">
          <div className="hospital-icon-box">
            <Building2 size={24} />
          </div>
          <div>
            <div className="hospital-type-badge">{category}</div>
            <h3 className="hospital-name">{name}</h3>
            <span className="hospital-dept-label">
              <ShieldAlert size={12} color="#ef4444" />
              <span>{emergencyDept}</span>
            </span>
          </div>
        </div>

        <div className="hospital-eta-badge">
          <Clock size={13} />
          <span>{eta} ({distance})</span>
        </div>
      </div>

      <div className="hospital-body">
        <div className="hosp-info-row">
          <MapPin size={15} className="info-icon" />
          <span className="address-text">{address}</span>
        </div>

        {/* ICU Bed Status Bar */}
        <div className="icu-status-bar">
          <div className="bed-info">
            <Bed size={15} color="#10b981" />
            <span>
              <strong>{icuBedsAvailable} ICU Resuscitation Beds</strong> Available Now
            </span>
          </div>
          <span className="er-status-dot">
            <span className="dot-green"></span>
            Triage Level 1 Ready
          </span>
        </div>

        {/* Facilities tags */}
        {facilities.length > 0 && (
          <div className="facilities-tags">
            {facilities.map((fac, idx) => (
              <span key={idx} className="fac-pill">
                {fac}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="hospital-card-actions">
          <a href={`tel:${phone}`} className="btn-call-hosp" onClick={(e) => e.stopPropagation()}>
            <Phone size={15} />
            <span>Emergency Dept: {phone}</span>
          </a>

          {showSelect && (
            <button
              type="button"
              className={`btn-select-hosp ${isSelected ? 'active' : ''}`}
              onClick={onSelect}
            >
              {isSelected ? 'Selected Hospital' : 'Choose Hospital'}
            </button>
          )}
        </div>
      </div>

      <style>{`
        .resq-hospital-card {
          padding: 20px;
          border-radius: var(--radius-lg);
          transition: var(--transition);
          margin-bottom: 16px;
        }

        .selected-hospital {
          border-color: var(--accent-cyan) !important;
          background: rgba(6, 182, 212, 0.05);
          box-shadow: 0 0 25px -5px rgba(6, 182, 212, 0.3);
        }

        .hospital-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 16px;
        }

        .hospital-title-wrap {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .hospital-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(6, 182, 212, 0.15);
          border: 1px solid rgba(6, 182, 212, 0.35);
          color: #06b6d4;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hospital-type-badge {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }

        .hospital-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
        }

        .hospital-dept-label {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          color: #fca5a5;
          margin-top: 4px;
          font-weight: 600;
        }

        .hospital-eta-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          border-radius: var(--radius-full);
          background: rgba(6, 182, 212, 0.12);
          border: 1px solid rgba(6, 182, 212, 0.3);
          color: #67e8f9;
          font-size: 0.8rem;
          font-weight: 700;
          white-space: nowrap;
        }

        .hosp-info-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .info-icon {
          color: var(--text-dim);
          flex-shrink: 0;
        }

        .icu-status-bar {
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
          margin-bottom: 14px;
        }

        .bed-info {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #a7f3d0;
        }

        .er-status-dot {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #6ee7b7;
        }

        .dot-green {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
        }

        .facilities-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }

        .fac-pill {
          font-size: 0.72rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }

        .hospital-card-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-call-hosp {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.2);
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          transition: var(--transition);
        }

        .btn-call-hosp:hover {
          background: rgba(56, 189, 248, 0.16);
          color: #fff;
        }

        .btn-select-hosp {
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border-subtle);
          color: #ffffff;
          transition: var(--transition);
        }

        .btn-select-hosp.active {
          background: #06b6d4;
          border-color: #06b6d4;
          color: #000;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default HospitalCard;
