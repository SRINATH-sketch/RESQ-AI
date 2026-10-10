import React, { useState, useEffect } from 'react';
import {
  Navigation,
  Compass,
  Layers,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Ambulance,
  MapPin,
  Building2,
  Crosshair,
  Wifi
} from 'lucide-react';

export const MockMap = ({
  status = 'ON_THE_WAY',
  pickup = { address: 'Anna Nagar West, Chennai' },
  hospital = { name: 'Apollo Multi-Speciality Hospital' },
  height = '420px',
  showControls = true,
  interactive = true
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showTraffic, setShowTraffic] = useState(true);
  const [progress, setProgress] = useState(0.35); // 0 to 1 along path

  // Smooth live animation of ambulance moving along vector route
  useEffect(() => {
    if (status === 'ON_THE_WAY') {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 0.85) return 0.2; // loop for demo
          return +(prev + 0.015).toFixed(3);
        });
      }, 700);
      return () => clearInterval(interval);
    } else if (status === 'ARRIVED') {
      setProgress(0.88);
    } else if (status === 'PATIENT_PICKED_UP' || status === 'AT_HOSPITAL') {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 0.95) return 0.95;
          return +(prev + 0.01).toFixed(3);
        });
      }, 800);
      return () => clearInterval(interval);
    }
  }, [status]);

  // Coordinates calculation along curved SVG path
  // Path 1 (Ambulance to Patient):
  // Start: (120, 90) -> Control: (260, 160) -> End (Patient): (480, 240)
  // Path 2 (Patient to Hospital):
  // (480, 240) -> Control: (620, 310) -> End (Hospital): (780, 280)
  const isEnRouteToHospital = status === 'PATIENT_PICKED_UP' || status === 'AT_HOSPITAL';

  // Quadratic bezier interpolation helper
  const getPointOnQuadBezier = (p0, p1, p2, t) => {
    const x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
    const y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;
    return { x, y };
  };

  let ambPos;
  if (!isEnRouteToHospital) {
    ambPos = getPointOnQuadBezier(
      { x: 130, y: 90 },
      { x: 280, y: 150 },
      { x: 460, y: 230 },
      status === 'ARRIVED' ? 1 : progress
    );
  } else {
    ambPos = getPointOnQuadBezier(
      { x: 460, y: 230 },
      { x: 620, y: 310 },
      { x: 780, y: 260 },
      status === 'AT_HOSPITAL' ? 0.98 : progress
    );
  }

  return (
    <div className="resq-mock-map-wrapper" style={{ height }}>
      {/* Map Control Header / Telemetry Bar */}
      <div className="map-hud-bar">
        <div className="hud-left">
          <span className="gps-indicator">
            <Wifi size={13} className="gps-live-ping" />
            <span>RTK-GPS LOCK • 11 SATS</span>
          </span>
          <span className="hud-pill">LAT: 13.0850° N • LNG: 80.2100° E</span>
        </div>

        {showControls && (
          <div className="hud-right">
            <button
              className={`map-tool-btn ${showTraffic ? 'active' : ''}`}
              onClick={() => setShowTraffic(!showTraffic)}
              title="Toggle Live Traffic Layer"
            >
              <Layers size={14} />
              <span>Traffic</span>
            </button>
            <button
              className="map-tool-btn"
              onClick={() => setZoomLevel((z) => Math.min(z + 0.15, 1.4))}
              title="Zoom In"
            >
              <ZoomIn size={14} />
            </button>
            <button
              className="map-tool-btn"
              onClick={() => setZoomLevel((z) => Math.max(z - 0.15, 0.85))}
              title="Zoom Out"
            >
              <ZoomOut size={14} />
            </button>
          </div>
        )}
      </div>

      {/* SVG Vector Map Container */}
      <div
        className="map-canvas-container"
        style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
      >
        <svg viewBox="0 0 900 450" className="map-svg-grid">
          {/* Base Map Grid & City Blocks */}
          <defs>
            <pattern id="cityGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>

            {/* Glowing route filters */}
            <filter id="glowRoute" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glowBeacon" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background landmass */}
          <rect width="900" height="450" fill="#080e1c" />
          <rect width="900" height="450" fill="url(#cityGrid)" />

          {/* City Arterial Roads */}
          <g stroke="rgba(255,255,255,0.08)" strokeWidth="14" fill="none" strokeLinecap="round">
            {/* Major Arterial 1: Anna Salai / EVR Periyar */}
            <path d="M 40 70 Q 250 140 450 180 T 860 160" />
            {/* Inner Ring Road */}
            <path d="M 120 40 Q 260 220 300 410" />
            {/* Cross Arterial to Hospital */}
            <path d="M 280 140 Q 480 230 790 260" />
            <path d="M 460 30 L 460 410" strokeWidth="8" />
            <path d="M 680 40 L 720 420" strokeWidth="10" />
          </g>

          {/* Secondary Street Network */}
          <g stroke="rgba(255,255,255,0.04)" strokeWidth="5" fill="none">
            <path d="M 80 180 L 820 180" />
            <path d="M 80 290 L 820 290" />
            <path d="M 200 40 L 200 400" />
            <path d="M 370 40 L 370 410" />
            <path d="M 580 40 L 580 410" />
          </g>

          {/* Live Traffic Overlay (Green for emergency clear corridor, orange for regular) */}
          {showTraffic && (
            <g strokeLinecap="round" fill="none">
              {/* Traffic standard */}
              <path d="M 40 70 Q 250 140 450 180" stroke="#f59e0b" strokeWidth="3" opacity="0.6" />
              <path d="M 460 30 L 460 220" stroke="#10b981" strokeWidth="3" opacity="0.5" />
              {/* Green Priority Corridor for Emergency Vehicle */}
              <path
                d="M 130 90 Q 280 150 460 230"
                stroke="#10b981"
                strokeWidth="5"
                opacity="0.85"
                filter="url(#glowRoute)"
              />
              <path
                d="M 460 230 Q 620 310 780 260"
                stroke="#10b981"
                strokeWidth="5"
                opacity="0.85"
                filter="url(#glowRoute)"
              />
            </g>
          )}

          {/* Street Name Labels */}
          <text x="140" y="75" fill="#475569" fontSize="10" fontWeight="600">ANNA NAGAR 2ND AVE</text>
          <text x="320" y="130" fill="#475569" fontSize="10" fontWeight="600">THIRUMANGALAM FLYOVER</text>
          <text x="470" y="215" fill="#475569" fontSize="10" fontWeight="600">PATIENT PICKUP POINT</text>
          <text x="640" y="240" fill="#475569" fontSize="10" fontWeight="600">POONAMALLEE ARTERIAL</text>
          <text x="760" y="245" fill="#06b6d4" fontSize="10" fontWeight="700">APOLLO TRAUMA BAY</text>

          {/* Emergency Route Trajectory (Active Dispatch Path) */}
          <path
            d="M 130 90 Q 280 150 460 230"
            stroke="#ef4444"
            strokeWidth="4"
            strokeDasharray="8 6"
            fill="none"
            filter="url(#glowRoute)"
            opacity={!isEnRouteToHospital ? '1' : '0.4'}
          >
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
          </path>

          {/* Path from Patient to Hospital */}
          <path
            d="M 460 230 Q 620 310 780 260"
            stroke="#06b6d4"
            strokeWidth="4"
            strokeDasharray="8 6"
            fill="none"
            filter="url(#glowRoute)"
            opacity={isEnRouteToHospital ? '1' : '0.4'}
          >
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
          </path>

          {/* PATIENT PICKUP LOCATION PIN (At 460, 230) */}
          <g transform="translate(460, 230)">
            {/* Pulsing rings */}
            <circle r="22" fill="none" stroke="#ef4444" strokeWidth="1.5" opacity="0.7">
              <animate attributeName="r" values="8;28" dur="1.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0" dur="1.8s" repeatCount="indefinite" />
            </circle>
            <circle r="12" fill="#ef4444" filter="url(#glowBeacon)" />
            <circle r="6" fill="#ffffff" />
            {/* Tooltip Label */}
            <g transform="translate(-55, -34)">
              <rect width="110" height="24" rx="6" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
              <text x="55" y="16" fill="#f87171" fontSize="10" fontWeight="700" textAnchor="middle">
                PATIENT PICKUP
              </text>
            </g>
          </g>

          {/* DESTINATION HOSPITAL PIN (At 780, 260) */}
          <g transform="translate(780, 260)">
            <circle r="18" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6">
              <animate attributeName="r" values="8;24" dur="2.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle r="14" fill="#0e7490" stroke="#06b6d4" strokeWidth="2" />
            {/* Hospital Cross */}
            <path d="M -2 -7 L 2 -7 L 2 -2 L 7 -2 L 7 2 L 2 2 L 2 7 L -2 7 L -2 2 L -7 2 L -7 -2 L -2 -2 Z" fill="#ffffff" />
            {/* Tooltip Label */}
            <g transform="translate(-65, -34)">
              <rect width="130" height="24" rx="6" fill="#0f172a" stroke="#06b6d4" strokeWidth="1" />
              <text x="65" y="16" fill="#67e8f9" fontSize="10" fontWeight="700" textAnchor="middle">
                APOLLO ER DEPT
              </text>
            </g>
          </g>

          {/* AMBULANCE LIVE VEHICLE MARKER (Moving along route) */}
          <g transform={`translate(${ambPos.x}, ${ambPos.y})`}>
            {/* Radar Sweep Circle */}
            <circle r="26" fill="rgba(239, 68, 68, 0.15)" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="1" />
            <circle r="18" fill="#1e293b" stroke="#ef4444" strokeWidth="2.5" filter="url(#glowBeacon)" />
            {/* Siren Beacon Flashing */}
            <circle cx="0" cy="-6" r="3" fill="#ef4444">
              <animate attributeName="opacity" values="1;0.2;1" dur="0.6s" repeatCount="indefinite" />
            </circle>
            {/* Ambulance Car Silhouette */}
            <g transform="translate(-10, -8) scale(0.85)">
              <rect x="2" y="4" width="20" height="12" rx="3" fill="#ffffff" />
              <rect x="15" y="6" width="6" height="8" rx="1" fill="#38bdf8" />
              <rect x="7" y="7" width="6" height="6" fill="#ef4444" />
            </g>
            {/* Floating Tag */}
            <g transform="translate(-40, 24)">
              <rect width="80" height="20" rx="4" fill="#020617" stroke="#ef4444" strokeWidth="1" />
              <text x="40" y="14" fill="#ffffff" fontSize="9" fontWeight="800" textAnchor="middle">
                TN-01-AB-1234
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* Floating Speed & Telemetry Card */}
      <div className="map-bottom-telemetry">
        <div className="telem-item">
          <span className="telem-label">SPEED</span>
          <span className="telem-val">52 km/h</span>
        </div>
        <div className="telem-divider"></div>
        <div className="telem-item">
          <span className="telem-label">PRIORITY ROUTE</span>
          <span className="telem-val green">GREEN WAVE ACTIVE</span>
        </div>
        <div className="telem-divider"></div>
        <div className="telem-item">
          <span className="telem-label">NEXT TURN</span>
          <span className="telem-val">In 350m • Right onto Greams Rd</span>
        </div>
      </div>

      <style>{`
        .resq-mock-map-wrapper {
          position: relative;
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #080e1c;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.7);
        }

        .map-hud-bar {
          position: absolute;
          top: 12px;
          left: 14px;
          right: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 10;
          pointer-events: none;
        }

        .hud-left, .hud-right {
          display: flex;
          align-items: center;
          gap: 8px;
          pointer-events: auto;
        }

        .gps-indicator {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34d399;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: var(--radius-full);
        }

        .gps-live-ping {
          animation: beacon-pulse 1.4s infinite;
        }

        .hud-pill {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 6px 12px;
          border-radius: var(--radius-full);
        }

        .map-tool-btn {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-subtle);
          color: var(--text-main);
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          font-size: 0.75rem;
          gap: 4px;
        }

        .map-tool-btn:hover, .map-tool-btn.active {
          background: #1e293b;
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .map-tool-btn.active {
          width: auto;
          padding: 0 10px;
        }

        .map-canvas-container {
          width: 100%;
          height: 100%;
          transition: transform 0.25s ease;
        }

        .map-svg-grid {
          width: 100%;
          height: 100%;
          display: block;
        }

        .map-bottom-telemetry {
          position: absolute;
          bottom: 12px;
          left: 14px;
          right: 14px;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          padding: 8px 16px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          z-index: 10;
        }

        .telem-item {
          display: flex;
          flex-direction: column;
        }

        .telem-label {
          font-size: 0.65rem;
          color: var(--text-dim);
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .telem-val {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: #ffffff;
        }

        .telem-val.green {
          color: #34d399;
        }

        .telem-divider {
          width: 1px;
          height: 24px;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 640px) {
          .hud-pill, .telem-item:nth-child(5) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default MockMap;
