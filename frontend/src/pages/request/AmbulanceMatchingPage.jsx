import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Cpu,
  Navigation,
  CheckCircle2,
  Clock,
  Ambulance,
  HeartPulse,
  Radio,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useRequest } from '../../context/RequestContext';
import { AmbulanceCard } from '../../components/cards/AmbulanceCard';
import { api } from '../../services/api';
import { MOCK_AMBULANCES } from '../../data/mockData';

export const AmbulanceMatchingPage = () => {
  const navigate = useNavigate();
  const {
    draftPatient,
    draftLocation,
    selectedAmbulance,
    setSelectedAmbulance,
    submitEmergencyRequest
  } = useRequest();

  const [isScanning, setIsScanning] = useState(true);
  const [scanStepText, setScanStepText] = useState('Pinging nearby GPS fleet telemetry...');
  const [availableAmbulances, setAvailableAmbulances] = useState([]);

  useEffect(() => {
    // Simulated multi-stage AI radar scanning
    const step1 = setTimeout(() => {
      setScanStepText('Analyzing distance, ETA, and emergency condition compatibility...');
    }, 700);

    const step2 = setTimeout(async () => {
      const res = await api.getNearbyAmbulances(draftLocation.lat, draftLocation.lng, draftPatient.emergencyType);
      if (res.success) {
        setAvailableAmbulances(res.ambulances);
        // Default to recommended unit
        const rec = res.ambulances.find((a) => a.recommended) || res.ambulances[0];
        setSelectedAmbulance(rec);
      } else {
        setAvailableAmbulances(MOCK_AMBULANCES);
      }
      setIsScanning(false);
    }, 1500);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
    };
  }, [draftLocation, draftPatient, setSelectedAmbulance]);

  const handleConfirmAndSend = () => {
    submitEmergencyRequest(selectedAmbulance);
    navigate('/request/sent');
  };

  return (
    <div className="matching-page-root container">
      {/* 1. Radar Scanning Screen while finding */}
      {isScanning ? (
        <div className="scanning-container glass-panel">
          <div className="radar-animation-box">
            <div className="radar-circle circle-1"></div>
            <div className="radar-circle circle-2"></div>
            <div className="radar-circle circle-3"></div>
            <div className="radar-sweep-hand"></div>
            <div className="radar-center-icon">
              <Ambulance size={36} color="#ef4444" />
            </div>
          </div>

          <h2 className="scanning-headline">Finding nearby ambulances...</h2>
          <p className="scanning-sub">{scanStepText}</p>

          <div className="scanning-criteria-tags">
            <span className="sc-tag">
              <HeartPulse size={12} color="#ef4444" />
              <span>Condition: {draftPatient.emergencyType}</span>
            </span>
            <span className="sc-tag">
              <Navigation size={12} color="#06b6d4" />
              <span>Radius: 5.0 km</span>
            </span>
            <span className="sc-tag">
              <Cpu size={12} color="#a855f7" />
              <span>AI Multi-Factor Ranking</span>
            </span>
          </div>
        </div>
      ) : (
        /* 2. Available Ambulances Results */
        <div className="results-wrapper">
          <div className="page-breadcrumb">
            <span>Step 3 of 4 • AI Fleet Ranking & Selection</span>
          </div>

          <div className="matching-header">
            <div className="step-pill">STEP 3: FLEET MATCHING</div>
            <h1 className="matching-title">Available Ambulances Ranked</h1>
            <p className="matching-desc">
              Found {availableAmbulances.length} available ambulances near your location capable of emergency dispatch.
            </p>
          </div>

          {/* AI Matching Explainer Box (Required by prompt) */}
          <div className="ai-explainer-banner glass-panel">
            <div className="ai-explainer-header">
              <div className="ai-badge">
                <Sparkles size={14} />
                <span>AI MATCHING SYSTEM</span>
              </div>
              <span className="ai-status-active">Algorithmic Scoring Applied</span>
            </div>
            <p className="ai-explainer-text">
              ResQAI analyzes distance, ETA, ambulance type and availability to identify suitable ambulances.
            </p>
            <p className="ai-explainer-sub">
              Below, the recommended ambulance is highlighted for your reported symptoms ({draftPatient.emergencyType}), ensuring necessary life-support equipment like transport ventilators or trauma splints are ready.
            </p>
          </div>

          {/* Ambulance Cards List */}
          <div className="ambulances-list-grid">
            {availableAmbulances.map((amb) => (
              <AmbulanceCard
                key={amb.id}
                ambulance={amb}
                isSelected={selectedAmbulance?.id === amb.id}
                onSelect={() => setSelectedAmbulance(amb)}
                showAction={true}
                actionText="Select This Ambulance"
              />
            ))}
          </div>

          {/* Bottom Confirmation Bar */}
          <div className="bottom-confirm-bar glass-panel glow-red">
            <div className="confirm-summary">
              <span className="summary-lbl">Selected for Dispatch:</span>
              <h3 className="summary-val">
                {selectedAmbulance?.unitName || 'Ambulance Unit Alpha'} ({selectedAmbulance?.type})
              </h3>
              <span className="summary-meta">
                ETA: <strong>{selectedAmbulance?.eta}</strong> • Proximity: {selectedAmbulance?.distance} • Fare: {selectedAmbulance?.baseFare}
              </span>
            </div>

            <button
              onClick={handleConfirmAndSend}
              className="btn-dispatch-confirm"
              id="sendAmbulanceRequestBtn"
            >
              <Ambulance size={20} />
              <span>SEND REQUEST TO AMBULANCE</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        .matching-page-root {
          padding: 30px 20px 60px;
        }

        /* Scanning Screen */
        .scanning-container {
          padding: 80px 30px;
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 680px;
          margin: 40px auto;
        }

        .radar-animation-box {
          position: relative;
          width: 180px;
          height: 180px;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .radar-circle {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(239, 68, 68, 0.4);
        }

        .circle-1 { width: 60px; height: 60px; }
        .circle-2 { width: 120px; height: 120px; }
        .circle-3 { width: 180px; height: 180px; }

        .radar-sweep-hand {
          position: absolute;
          width: 90px;
          height: 90px;
          top: 0;
          left: 0;
          transform-origin: bottom right;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.4) 0%, transparent 60%);
          border-right: 2px solid #ef4444;
          animation: spin-slow 3s linear infinite;
        }

        .radar-center-icon {
          position: relative;
          z-index: 3;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #0f172a;
          border: 2px solid #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.6);
        }

        .scanning-headline {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .scanning-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .scanning-criteria-tags {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .sc-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          color: var(--text-main);
        }

        /* Results Screen */
        .page-breadcrumb {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-cyan);
          letter-spacing: 0.04em;
          margin-bottom: 20px;
        }

        .matching-header {
          margin-bottom: 24px;
        }

        .step-pill {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ef4444;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .matching-title {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .matching-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        /* AI Explainer Banner */
        .ai-explainer-banner {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%);
          border: 1px solid rgba(147, 51, 234, 0.35);
          border-radius: var(--radius-lg);
          padding: 20px 24px;
          margin-bottom: 28px;
        }

        .ai-explainer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .ai-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 800;
          color: #c084fc;
          letter-spacing: 0.06em;
        }

        .ai-status-active {
          font-size: 0.72rem;
          color: #a78bfa;
          font-weight: 600;
        }

        .ai-explainer-text {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.4;
          margin-bottom: 6px;
        }

        .ai-explainer-sub {
          font-size: 0.82rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .ambulances-list-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 30px;
        }

        /* Bottom Sticky Confirm Bar */
        .bottom-confirm-bar {
          position: sticky;
          bottom: 20px;
          padding: 18px 24px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          background: rgba(10, 15, 30, 0.95);
          z-index: 50;
        }

        .confirm-summary {
          display: flex;
          flex-direction: column;
        }

        .summary-lbl {
          font-size: 0.7rem;
          color: var(--text-dim);
          font-weight: 700;
          text-transform: uppercase;
        }

        .summary-val {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
        }

        .summary-meta {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .btn-dispatch-confirm {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(239, 68, 68, 0.5);
          transition: var(--transition);
        }

        .btn-dispatch-confirm:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(239, 68, 68, 0.75);
        }

        @media (max-width: 640px) {
          .bottom-confirm-bar {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-dispatch-confirm {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default AmbulanceMatchingPage;
