import React from 'react';
import { Siren, ArrowRight, Ambulance } from 'lucide-react';

export const EmergencyButton = ({
  onClick,
  text = 'REQUEST AMBULANCE',
  subtext = 'AI Automated Emergency Dispatch',
  size = 'large',
  className = '',
  id = 'emergencyRequestActionBtn'
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`resq-emergency-btn ${size} ${className}`}
      aria-label="Emergency Request Ambulance"
    >
      {/* Outer pulsing beacon ring */}
      <span className="beacon-ring"></span>
      <span className="beacon-ring ring-delayed"></span>

      <div className="btn-content-inner">
        <div className="siren-pulse-box">
          <Siren className="emergency-icon-svg" size={size === 'large' ? 28 : 22} />
        </div>
        <div className="text-col">
          <span className="btn-headline">{text}</span>
          {subtext && <span className="btn-subheadline">{subtext}</span>}
        </div>
        <div className="action-arrow">
          <ArrowRight size={size === 'large' ? 24 : 18} />
        </div>
      </div>

      <style>{`
        .resq-emergency-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 50%, #991b1b 100%);
          border: 1px solid rgba(254, 202, 202, 0.4);
          border-radius: var(--radius-full);
          color: #ffffff;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 30px rgba(239, 68, 68, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.3);
          user-select: none;
        }

        .resq-emergency-btn.large {
          padding: 16px 36px;
        }

        .resq-emergency-btn.medium {
          padding: 12px 24px;
        }

        .resq-emergency-btn:hover {
          transform: translateY(-3px) scale(1.02);
          background: linear-gradient(135deg, #f87171 0%, #dc2626 50%, #991b1b 100%);
          box-shadow: 0 0 45px rgba(239, 68, 68, 0.9), inset 0 2px 4px rgba(255, 255, 255, 0.4);
        }

        .resq-emergency-btn:active {
          transform: translateY(0) scale(0.98);
        }

        .btn-content-inner {
          display: flex;
          align-items: center;
          gap: 16px;
          z-index: 2;
        }

        .siren-pulse-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.25);
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.4);
        }

        .emergency-icon-svg {
          animation: siren-flash 1s infinite alternate;
        }

        @keyframes siren-flash {
          0% { filter: drop-shadow(0 0 2px #fff); }
          100% { filter: drop-shadow(0 0 10px #ffedd5); }
        }

        .text-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .btn-headline {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          line-height: 1.1;
          color: #ffffff;
        }

        .btn-subheadline {
          font-size: 0.76rem;
          font-weight: 600;
          color: #fee2e2;
          letter-spacing: 0.02em;
          opacity: 0.9;
        }

        .action-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
        }

        .resq-emergency-btn:hover .action-arrow {
          transform: translateX(4px);
        }

        .beacon-ring {
          position: absolute;
          inset: -6px;
          border-radius: var(--radius-full);
          border: 2px solid rgba(239, 68, 68, 0.6);
          animation: beacon-expand 2.4s infinite cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .ring-delayed {
          animation-delay: 1.2s;
        }

        @keyframes beacon-expand {
          0% {
            transform: scale(0.96);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.15);
            opacity: 0;
          }
        }

        @media (max-width: 640px) {
          .resq-emergency-btn.large {
            padding: 14px 22px;
            width: 100%;
          }
          .btn-headline {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </button>
  );
};

export default EmergencyButton;
