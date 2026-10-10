import React from 'react';
import {
  Bell,
  Cpu,
  UserCheck,
  Ambulance,
  MapPin,
  HeartPulse,
  Building2,
  CheckCircle2
} from 'lucide-react';

const STAGES = [
  { key: 'REQUESTED', label: 'Requested', icon: Bell, desc: 'Call logged' },
  { key: 'MATCHING', label: 'AI Matching', icon: Cpu, desc: 'Fleet ranking' },
  { key: 'DRIVER_ACCEPTED', label: 'Driver Accepted', icon: UserCheck, desc: 'Driver confirmed' },
  { key: 'ON_THE_WAY', label: 'On The Way', icon: Ambulance, desc: 'En route to you' },
  { key: 'ARRIVED', label: 'Arrived', icon: MapPin, desc: 'At pickup point' },
  { key: 'PATIENT_PICKED_UP', label: 'Picked Up', icon: HeartPulse, desc: 'Vitals stable' },
  { key: 'AT_HOSPITAL', label: 'At Hospital', icon: Building2, desc: 'Emergency bay' },
  { key: 'COMPLETED', label: 'Completed', icon: CheckCircle2, desc: 'Safe handover' }
];

export const StatusTracker = ({ currentStatus = 'REQUESTED', timeline = [] }) => {
  const currentIndex = STAGES.findIndex((s) => s.key === currentStatus);
  const activeIndex = currentIndex !== -1 ? currentIndex : 0;

  return (
    <div className="status-tracker-container">
      <div className="tracker-header">
        <div className="tracker-title-row">
          <span className="live-badge">
            <span className="live-pip"></span>
            LIVE STATUS
          </span>
          <h4 className="tracker-stage-name">
            {STAGES[activeIndex]?.label || currentStatus}
          </h4>
        </div>
        <div className="tracker-step-count">
          Step {activeIndex + 1} of {STAGES.length}
        </div>
      </div>

      {/* Progress Track */}
      <div className="stages-bar">
        <div
          className="stages-progress-fill"
          style={{
            width: `${(activeIndex / (STAGES.length - 1)) * 100}%`
          }}
        ></div>

        {STAGES.map((stage, idx) => {
          const Icon = stage.icon;
          const isDone = idx < activeIndex;
          const isCurrent = idx === activeIndex;
          const isFuture = idx > activeIndex;

          return (
            <div
              key={stage.key}
              className={`stage-node ${isDone ? 'done' : ''} ${isCurrent ? 'current' : ''} ${isFuture ? 'future' : ''}`}
            >
              <div className="node-icon-circle">
                <Icon size={16} />
                {isCurrent && <span className="node-glow-ring"></span>}
              </div>
              <span className="node-label">{stage.label}</span>
              <span className="node-desc">{stage.desc}</span>
            </div>
          );
        })}
      </div>

      <style>{`
        .status-tracker-container {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 20px 24px;
          margin-bottom: 24px;
          box-shadow: var(--shadow-sm);
        }

        .tracker-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 12px;
        }

        .tracker-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #f87171;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .live-pip {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: beacon-pulse 1.2s infinite;
        }

        .tracker-stage-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .tracker-step-count {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-dim);
          background: rgba(255, 255, 255, 0.04);
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }

        .stages-bar {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 8px;
        }

        .stages-bar::before {
          content: '';
          position: absolute;
          top: 18px;
          left: 16px;
          right: 16px;
          height: 3px;
          background: rgba(255, 255, 255, 0.08);
          z-index: 1;
        }

        .stages-progress-fill {
          position: absolute;
          top: 18px;
          left: 16px;
          height: 3px;
          background: linear-gradient(90deg, #10b981 0%, #06b6d4 50%, #ef4444 100%);
          z-index: 2;
          transition: width 0.5s ease;
        }

        .stage-node {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 90px;
          transition: var(--transition);
        }

        .node-icon-circle {
          position: relative;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #0f172a;
          border: 2px solid #334155;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
          transition: var(--transition);
        }

        .node-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-dim);
          line-height: 1.2;
          margin-bottom: 2px;
          transition: var(--transition);
        }

        .node-desc {
          font-size: 0.65rem;
          color: var(--text-dim);
          opacity: 0.7;
        }

        /* Done Node */
        .stage-node.done .node-icon-circle {
          background: #064e3b;
          border-color: #10b981;
          color: #34d399;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
        }

        .stage-node.done .node-label {
          color: #34d399;
        }

        /* Current Node */
        .stage-node.current .node-icon-circle {
          background: #ef4444;
          border-color: #fca5a5;
          color: #ffffff;
          transform: scale(1.15);
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.8);
        }

        .stage-node.current .node-label {
          color: #ffffff;
          font-weight: 800;
        }

        .node-glow-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1.5px solid #ef4444;
          animation: beacon-pulse 1.4s infinite;
        }

        /* Responsive horizontal scroll for small screens */
        @media (max-width: 860px) {
          .stages-bar {
            overflow-x: auto;
            padding-bottom: 10px;
            justify-content: flex-start;
            gap: 20px;
          }
          .stages-bar::before, .stages-progress-fill {
            min-width: 650px;
          }
          .stage-node {
            min-width: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default StatusTracker;
