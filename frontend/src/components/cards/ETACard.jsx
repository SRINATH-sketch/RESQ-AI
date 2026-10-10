import React, { useState, useEffect } from 'react';
import { Clock, Navigation, ShieldCheck, Ambulance, Siren } from 'lucide-react';

export const ETACard = ({
  initialMinutes = 6,
  distance = '2.1 km',
  statusHeadline = 'Ambulance is on the way',
  statusSubtext = 'Driver is navigating emergency route with sirens enabled',
  onArriveClick
}) => {
  const [secondsRemaining, setSecondsRemaining] = useState(initialMinutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 10 ? prev - 1 : 10));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  return (
    <div className="resq-eta-card glass-panel glow-red">
      <div className="eta-card-grid">
        {/* Left: Animated Status Header */}
        <div className="eta-status-col">
          <div className="live-siren-pill">
            <span className="flashing-siren-dot"></span>
            <span>LIVE DISPATCH EN ROUTE</span>
          </div>
          <h2 className="eta-headline">{statusHeadline}</h2>
          <p className="eta-subtext">{statusSubtext}</p>
        </div>

        {/* Center: Large ETA Counter */}
        <div className="eta-time-col">
          <span className="eta-label">ESTIMATED ARRIVAL</span>
          <div className="eta-time-digits">
            <span className="digits-num">{minutes}</span>
            <span className="digits-unit">m</span>
            <span className="digits-num">{seconds < 10 ? `0${seconds}` : seconds}</span>
            <span className="digits-unit">s</span>
          </div>
          <span className="eta-proximity">
            <Navigation size={13} color="#38bdf8" />
            <span>{distance} away</span>
          </span>
        </div>

        {/* Right: Quick Arrived Simulator Button (handy for demos & tests) */}
        {onArriveClick && (
          <div className="eta-quick-action-col">
            <button
              onClick={onArriveClick}
              className="btn-simulate-arrival"
              title="Fast forward simulation to arrived state"
            >
              <Ambulance size={16} />
              <span>Simulate Arrival</span>
            </button>
          </div>
        )}
      </div>

      <style>{`
        .resq-eta-card {
          padding: 22px 28px;
          border-radius: var(--radius-xl);
          margin-bottom: 22px;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(15, 23, 42, 0.9) 100%);
        }

        .eta-card-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .eta-status-col {
          flex: 1;
          min-width: 240px;
        }

        .live-siren-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .flashing-siren-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 10px #ef4444;
          animation: beacon-pulse 1s infinite;
        }

        .eta-headline {
          font-size: 1.45rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
        }

        .eta-subtext {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .eta-time-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 12px 24px;
        }

        .eta-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-dim);
          margin-bottom: 2px;
        }

        .eta-time-digits {
          display: flex;
          align-items: baseline;
          gap: 2px;
        }

        .digits-num {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 900;
          color: #38bdf8;
          line-height: 1;
        }

        .digits-unit {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-right: 6px;
        }

        .eta-proximity {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          color: #e2e8f0;
          font-weight: 600;
          margin-top: 4px;
        }

        .btn-simulate-arrival {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
          border: 1px dashed rgba(255, 255, 255, 0.2);
          color: var(--text-muted);
          font-size: 0.75rem;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-simulate-arrival:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.35);
        }

        @media (max-width: 640px) {
          .eta-card-grid {
            flex-direction: column;
            align-items: stretch;
          }
          .eta-time-col {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ETACard;
