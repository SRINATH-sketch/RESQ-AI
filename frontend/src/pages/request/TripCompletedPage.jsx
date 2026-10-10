import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  Star,
  Clock,
  Navigation,
  User,
  Ambulance,
  Building2,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { useRequest } from '../../context/RequestContext';
import { StatusTracker } from '../../components/common/StatusTracker';

export const TripCompletedPage = () => {
  const navigate = useNavigate();
  const { activeRequest, completeTrip } = useRequest();

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [tags, setTags] = useState(['Rapid Response', 'Professional EMT', 'Smooth Driving']);
  const [selectedTags, setSelectedTags] = useState(['Rapid Response', 'Professional EMT']);

  if (!activeRequest) {
    navigate('/dashboard');
    return null;
  }

  const {
    ambulance,
    driver,
    pickupLocation,
    destinationHospital,
    patientName
  } = activeRequest;

  const toggleTag = (t) => {
    setSelectedTags((prev) =>
      prev.includes(t) ? prev.filter((item) => item !== t) : [...prev, t]
    );
  };

  const handleCloseRequest = () => {
    completeTrip(rating, feedback);
    navigate('/request/closed');
  };

  return (
    <div className="completed-page-root container-narrow">
      <StatusTracker currentStatus="COMPLETED" />

      <div className="completed-card glass-panel glow-success">
        {/* Top Header */}
        <div className="completed-hero-header">
          <div className="success-circle-icon">
            <CheckCircle2 size={44} color="#10b981" />
          </div>
          <span className="completed-badge">EMERGENCY RUN SUCCESSFUL</span>
          <h1 className="completed-title">Trip Completed</h1>
          <p className="completed-sub">
            Patient safely transferred into <strong>{destinationHospital.name}</strong> Emergency Department. Triage clinical handover signed.
          </p>
        </div>

        {/* Trip Receipt / Summary Details Matrix */}
        <div className="trip-summary-box">
          <div className="summary-col">
            <span className="s-label">PATIENT NAME</span>
            <h4 className="s-val">{patientName}</h4>
          </div>

          <div className="summary-col">
            <span className="s-label">AMBULANCE NUMBER</span>
            <h4 className="s-val plate">{ambulance.vehicleNumber}</h4>
          </div>

          <div className="summary-col">
            <span className="s-label">DISPATCHED DRIVER</span>
            <h4 className="s-val">{driver.name}</h4>
          </div>

          <div className="summary-col">
            <span className="s-label">TRIP DURATION</span>
            <h4 className="s-val green">18 mins (Golden Hour)</h4>
          </div>

          <div className="summary-col">
            <span className="s-label">DISTANCE TRAVELLED</span>
            <h4 className="s-val cyan">{ambulance.distance || '2.1 km'}</h4>
          </div>

          <div className="summary-col">
            <span className="s-label">RECEIVING HOSPITAL</span>
            <h4 className="s-val">{destinationHospital.name}</h4>
          </div>

          <div className="summary-col full">
            <span className="s-label">PICKUP POINT</span>
            <span className="s-addr">{pickupLocation.address}</span>
          </div>
        </div>

        {/* Rate Your Experience (1–5 Star Interactive UI) */}
        <div className="rating-section-box">
          <div className="rating-header-row">
            <span className="rate-badge">CREW & DISPATCH FEEDBACK</span>
            <h3 className="rating-heading">Rate Your Experience</h3>
            <p className="rating-desc">
              Your rating helps maintain high clinical transport standards across our certified fleet.
            </p>
          </div>

          {/* Interactive 5-Star Selection */}
          <div className="star-rating-row">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="star-btn"
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
                aria-label={`Rate ${star} stars`}
              >
                <Star
                  size={36}
                  fill={(hoverRating || rating) >= star ? '#f59e0b' : 'transparent'}
                  color={(hoverRating || rating) >= star ? '#f59e0b' : '#475569'}
                />
              </button>
            ))}
            <span className="rating-numeric-tag">{rating}.0 / 5.0</span>
          </div>

          {/* Compliment Tags */}
          <div className="tags-row">
            {['Rapid Response', 'Professional EMT', 'Smooth Driving', 'Calm Communication', 'Clean Cabin'].map((tag) => (
              <button
                key={tag}
                type="button"
                className={`tag-pill ${selectedTags.includes(tag) ? 'active' : ''}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Optional Feedback Note */}
          <textarea
            className="form-textarea"
            rows="2"
            placeholder="Additional comments for the ambulance crew (optional)..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>

        {/* Close Request Button */}
        <div className="close-action-wrap">
          <button
            onClick={handleCloseRequest}
            className="btn-close-request"
            id="closeRequestBtn"
          >
            <span>CLOSE REQUEST & FINALIZE</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .completed-page-root {
          padding: 30px 20px 60px;
        }

        .completed-card {
          padding: 40px 36px;
          border-radius: var(--radius-xl);
        }

        .completed-hero-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 30px;
        }

        .success-circle-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          border: 2px solid #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.45);
        }

        .completed-badge {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #34d399;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.35);
          padding: 4px 14px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .completed-title {
          font-size: 2.3rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 6px;
        }

        .completed-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 580px;
        }

        .trip-summary-box {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 24px;
          margin-bottom: 32px;
        }

        .summary-col {
          display: flex;
          flex-direction: column;
        }

        .summary-col.full {
          grid-column: span 3;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 12px;
          margin-top: 4px;
        }

        .s-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.06em;
          margin-bottom: 4px;
        }

        .s-val {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
        }

        .s-val.plate {
          font-family: var(--font-mono);
          color: #38bdf8;
        }

        .s-val.green {
          color: #34d399;
        }

        .s-val.cyan {
          color: #06b6d4;
        }

        .s-addr {
          font-size: 0.88rem;
          color: #cbd5e1;
        }

        /* Rating Section */
        .rating-section-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 28px;
          margin-bottom: 28px;
          text-align: center;
        }

        .rate-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #fbbf24;
          text-transform: uppercase;
        }

        .rating-heading {
          font-size: 1.4rem;
          font-weight: 800;
          color: #ffffff;
          margin: 4px 0 6px;
        }

        .rating-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .star-rating-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .star-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          transition: transform 0.15s ease;
        }

        .star-btn:hover {
          transform: scale(1.15);
        }

        .rating-numeric-tag {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 800;
          color: #fbbf24;
          margin-left: 8px;
        }

        .tags-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-bottom: 18px;
        }

        .tag-pill {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }

        .tag-pill:hover, .tag-pill.active {
          background: rgba(245, 158, 11, 0.15);
          border-color: #f59e0b;
          color: #fbbf24;
        }

        .close-action-wrap {
          margin-top: 10px;
        }

        .btn-close-request {
          width: 100%;
          padding: 18px 32px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.45);
          transition: var(--transition);
        }

        .btn-close-request:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 28px rgba(16, 185, 129, 0.7);
        }

        @media (max-width: 768px) {
          .trip-summary-box {
            grid-template-columns: 1fr;
          }
          .summary-col.full {
            grid-column: span 1;
          }
        }
      `}</style>
    </div>
  );
};

export default TripCompletedPage;
