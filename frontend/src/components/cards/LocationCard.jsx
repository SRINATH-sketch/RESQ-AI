import React from 'react';
import { MapPin, Navigation, Building2, CheckCircle2, Edit3 } from 'lucide-react';

export const LocationCard = ({
  pickupAddress = 'Plot 42, 2nd Avenue, Anna Nagar West, Chennai',
  landmark = 'Near Roundtana Metro Station',
  hospitalName = 'Apollo Multi-Speciality Hospital',
  hospitalAddress = '21 Greams Road, Thousand Lights, Chennai',
  onEdit,
  editable = true
}) => {
  return (
    <div className="resq-location-card glass-panel">
      <div className="location-card-header">
        <span className="card-badge">
          <Navigation size={13} />
          <span>ROUTING VECTORS</span>
        </span>
        {editable && onEdit && (
          <button onClick={onEdit} className="btn-edit-loc" title="Change Location">
            <Edit3 size={14} />
            <span>Edit</span>
          </button>
        )}
      </div>

      <div className="location-points-list">
        {/* Pickup Item */}
        <div className="loc-item">
          <div className="loc-pin-col">
            <div className="pin-circle red">
              <MapPin size={16} />
            </div>
            <div className="loc-stem"></div>
          </div>
          <div className="loc-text-col">
            <span className="loc-role-tag red">PICKUP LOCATION (PATIENT)</span>
            <h4 className="loc-address-text">{pickupAddress}</h4>
            {landmark && (
              <span className="loc-landmark-sub">
                <strong>Landmark:</strong> {landmark}
              </span>
            )}
          </div>
        </div>

        {/* Destination Hospital Item */}
        <div className="loc-item">
          <div className="loc-pin-col">
            <div className="pin-circle cyan">
              <Building2 size={16} />
            </div>
          </div>
          <div className="loc-text-col">
            <span className="loc-role-tag cyan">DESTINATION HOSPITAL (CRITICAL CARE)</span>
            <h4 className="loc-address-text">{hospitalName}</h4>
            <span className="loc-landmark-sub">{hospitalAddress}</span>
          </div>
        </div>
      </div>

      <style>{`
        .resq-location-card {
          padding: 20px;
          border-radius: var(--radius-lg);
          margin-bottom: 20px;
        }

        .location-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .card-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.3);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .btn-edit-loc {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          font-size: 0.78rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-edit-loc:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.12);
        }

        .location-points-list {
          display: flex;
          flex-direction: column;
        }

        .loc-item {
          display: flex;
          gap: 16px;
          position: relative;
        }

        .loc-pin-col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pin-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .pin-circle.red {
          background: rgba(239, 68, 68, 0.2);
          border: 1.5px solid #ef4444;
          color: #ef4444;
        }

        .pin-circle.cyan {
          background: rgba(6, 182, 212, 0.2);
          border: 1.5px solid #06b6d4;
          color: #06b6d4;
        }

        .loc-stem {
          width: 2px;
          height: 32px;
          background: dashed rgba(255, 255, 255, 0.15);
          margin: 4px 0;
        }

        .loc-text-col {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding-bottom: 16px;
        }

        .loc-role-tag {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.06em;
        }

        .loc-role-tag.red {
          color: #f87171;
        }

        .loc-role-tag.cyan {
          color: #67e8f9;
        }

        .loc-address-text {
          font-size: 0.96rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
        }

        .loc-landmark-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
};

export default LocationCard;
