import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Siren,
  ShieldCheck,
  Clock,
  Navigation,
  Activity,
  HeartPulse,
  PhoneCall,
  ArrowRight,
  Sparkles,
  Building2,
  Ambulance,
  CheckCircle2,
  Cpu,
  MapPin,
  Users
} from 'lucide-react';
import { EmergencyButton } from '../components/common/EmergencyButton';
import { MOCK_AMBULANCES, MOCK_HOSPITALS } from '../data/mockData';

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleNeedAmbulance = () => {
    navigate('/request/location');
  };

  return (
    <div className="landing-page-root">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          {/* Left Column: Heading, Subtitle & Emergency Triggers */}
          <div className="hero-content">
            <div className="emergency-slogan-badge">
              <span className="pulse-dot"></span>
              <span>Fast Response • Safe Journey • Reliable Care</span>
            </div>

            <h1 className="hero-title">
              Emergency Help, <br />
              <span className="hero-title-highlight">Just a Tap Away</span>
            </h1>

            <p className="hero-subtitle">
              ResQAI instantly connects critical patients with nearest available Advanced Life Support (ALS) and Basic Life Support (BLS) ambulances using intelligent algorithmic fleet routing and live GPS telemetry.
            </p>

            <div className="hero-actions-row">
              <EmergencyButton
                onClick={handleNeedAmbulance}
                text="NEED AMBULANCE"
                subtext="Instant Dispatch Priority Line"
                size="large"
                id="heroNeedAmbulanceBtn"
              />

              <a href="#how-it-works" className="btn-secondary hero-sec-btn">
                <span>How It Works</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Quick Live Stats Ticker */}
            <div className="hero-metrics-ticker">
              <div className="ticker-item">
                <span className="ticker-number">5.8 min</span>
                <span className="ticker-label">Avg. Response Time</span>
              </div>
              <div className="ticker-separator"></div>
              <div className="ticker-item">
                <span className="ticker-number">420+</span>
                <span className="ticker-label">Certified Fleet Units</span>
              </div>
              <div className="ticker-separator"></div>
              <div className="ticker-item">
                <span className="ticker-number">99.8%</span>
                <span className="ticker-label">Safe Triage Handover</span>
              </div>
            </div>
          </div>

          {/* Right Column: Emergency Ambulance Visual Illustration */}
          <div className="hero-visual">
            <div className="ambulance-graphic-card glass-panel glow-red">
              {/* Radar Rings Background */}
              <div className="radar-orbit-ring ring-1"></div>
              <div className="radar-orbit-ring ring-2"></div>

              {/* Siren Visual Badge */}
              <div className="siren-beacon-indicator">
                <span className="siren-light red"></span>
                <span className="siren-light blue"></span>
              </div>

              {/* Ambulance Vector Graphic Illustration */}
              <div className="illustration-wrapper">
                <svg viewBox="0 0 500 320" className="ambulance-hero-svg">
                  {/* Road */}
                  <rect x="20" y="270" width="460" height="12" rx="6" fill="#1e293b" />
                  <path d="M 40 276 L 100 276 M 150 276 L 210 276 M 260 276 L 320 276 M 370 276 L 430 276" stroke="#f59e0b" strokeWidth="3" strokeDasharray="16 14" />

                  {/* Ground Shadow */}
                  <ellipse cx="250" cy="265" rx="190" ry="16" fill="rgba(0,0,0,0.5)" />

                  {/* Ambulance Main Vehicle Body */}
                  <g id="ambulanceBody">
                    {/* Rear and cabin chassis */}
                    <path d="M 90 230 L 90 100 Q 90 85 105 85 L 310 85 L 370 140 L 415 155 Q 425 160 425 175 L 425 230 Z" fill="#ffffff" />
                    
                    {/* Lower bumper trim */}
                    <rect x="80" y="220" width="350" height="15" rx="4" fill="#0f172a" />
                    
                    {/* Bold Emergency Crimson Livery Stripe */}
                    <path d="M 90 170 L 330 170 L 370 190 L 425 190 L 425 210 L 90 210 Z" fill="#ef4444" />
                    
                    {/* Cabin Front Windshield */}
                    <path d="M 315 95 L 365 142 L 315 142 Z" fill="#0284c7" opacity="0.85" />
                    <path d="M 370 145 L 415 158 L 415 175 L 370 175 Z" fill="#38bdf8" opacity="0.75" />

                    {/* Side Emergency Patient Window */}
                    <rect x="130" y="105" width="80" height="45" rx="6" fill="#0ea5e9" opacity="0.6" />
                    <rect x="225" y="105" width="70" height="45" rx="6" fill="#0ea5e9" opacity="0.6" />

                    {/* Red Cross Medical Emblem */}
                    <g transform="translate(170, 190) scale(0.9)">
                      <circle cx="0" cy="0" r="16" fill="#ffffff" />
                      <path d="M -3 -11 L 3 -11 L 3 -3 L 11 -3 L 11 3 L 3 3 L 3 11 L -3 11 L -3 3 L -11 3 L -11 -3 L -3 -3 Z" fill="#ef4444" />
                    </g>

                    {/* ResQAI Fleet Brand on Van */}
                    <text x="210" y="196" fill="#ffffff" fontSize="15" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
                      ResQ<tspan fill="#fee2e2">AI</tspan> • ALS-01
                    </text>

                    {/* Rooftop Emergency Lightbar with flashing halo */}
                    <g transform="translate(240, 72)">
                      <rect x="-35" y="0" width="70" height="14" rx="4" fill="#1e293b" />
                      <rect x="-32" y="2" width="28" height="10" rx="3" fill="#ef4444">
                        <animate attributeName="opacity" values="1;0.2;1" dur="0.8s" repeatCount="indefinite" />
                      </rect>
                      <rect x="4" y="2" width="28" height="10" rx="3" fill="#38bdf8">
                        <animate attributeName="opacity" values="0.2;1;0.2" dur="0.8s" repeatCount="indefinite" />
                      </rect>
                    </g>

                    {/* Wheels */}
                    {/* Rear Wheel */}
                    <g transform="translate(150, 235)">
                      <circle r="30" fill="#0f172a" />
                      <circle r="18" fill="#475569" />
                      <circle r="8" fill="#94a3b8" />
                    </g>
                    {/* Front Wheel */}
                    <g transform="translate(365, 235)">
                      <circle r="30" fill="#0f172a" />
                      <circle r="18" fill="#475569" />
                      <circle r="8" fill="#94a3b8" />
                    </g>

                    {/* Headlights beam */}
                    <polygon points="425,180 500,160 500,240 425,210" fill="url(#headlightBeam)" opacity="0.35" />
                  </g>

                  <defs>
                    <linearGradient id="headlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Live Overlay Dispatch Card */}
              <div className="hero-overlay-pill">
                <div className="pill-pulse-ring"></div>
                <div className="pill-text-block">
                  <span className="pill-title">AI Matching Engine Active</span>
                  <span className="pill-desc">3 ALS Ambulances nearby ready to dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. How It Works Section */}
      <section id="how-it-works" className="section-padded how-it-works-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge">RAPID DISPATCH LIFECYCLE</span>
            <h2 className="section-title">How ResQAI Works in 4 Simple Steps</h2>
            <p className="section-subtitle">
              Engineered with zero latency to reduce response times during the critical Golden Hour of medical emergencies.
            </p>
          </div>

          <div className="how-it-works-grid">
            {/* Step 1 */}
            <div className="hiw-card glass-panel">
              <div className="hiw-step-num">01</div>
              <div className="hiw-icon-box red">
                <MapPin size={24} />
              </div>
              <h3 className="hiw-card-title">Share Location</h3>
              <p className="hiw-card-text">
                Tap 'Use Current Location' or enter pickup landmark and preferred emergency hospital destination.
              </p>
            </div>

            {/* Step 2 */}
            <div className="hiw-card glass-panel">
              <div className="hiw-step-num">02</div>
              <div className="hiw-icon-box cyan">
                <HeartPulse size={24} />
              </div>
              <h3 className="hiw-card-title">Specify Condition</h3>
              <p className="hiw-card-text">
                Select emergency type (Heart, Accident, Breathing). Our AI determines required onboard equipment.
              </p>
            </div>

            {/* Step 3 */}
            <div className="hiw-card glass-panel">
              <div className="hiw-step-num">03</div>
              <div className="hiw-icon-box purple">
                <Cpu size={24} />
              </div>
              <h3 className="hiw-card-title">AI Fleet Ranking</h3>
              <p className="hiw-card-text">
                ResQAI analyzes distance, traffic corridor, and life support tier to notify optimal nearest responders.
              </p>
            </div>

            {/* Step 4 */}
            <div className="hiw-card glass-panel">
              <div className="hiw-step-num">04</div>
              <div className="hiw-icon-box green">
                <Navigation size={24} />
              </div>
              <h3 className="hiw-card-title">Live Tracking & Triage</h3>
              <p className="hiw-card-text">
                Track ambulance route live, communicate with driver, and notify the hospital emergency bay in advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ambulance Fleet Types */}
      <section id="ambulances" className="section-padded fleet-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge">EQUIPPED FOR ANY EMERGENCY</span>
            <h2 className="section-title">Certified Emergency Fleet Categories</h2>
            <p className="section-subtitle">
              Every ambulance in our network is equipped with standard or advanced life support equipment and staffed by certified EMTs.
            </p>
          </div>

          <div className="fleet-grid">
            {MOCK_AMBULANCES.map((amb) => (
              <div key={amb.id} className="fleet-card glass-panel">
                <div className="fleet-card-top">
                  <span className={`badge ${amb.typeCode === 'ALS' ? 'badge-als' : 'badge-bls'}`}>
                    {amb.type}
                  </span>
                  <span className="fleet-eta-tag">{amb.eta} avg response</span>
                </div>
                <h3 className="fleet-card-title">{amb.unitName}</h3>
                <p className="fleet-card-category">{amb.category}</p>

                <div className="fleet-equip-list">
                  <span className="equip-heading">Key Clinical Equipment:</span>
                  <ul>
                    {amb.equipment.map((eq, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} color="#10b981" />
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="fleet-card-footer">
                  <span className="fare-tag">Base Fare: {amb.baseFare}</span>
                  <button
                    onClick={() => navigate('/request/location')}
                    className="btn-select-fleet"
                  >
                    Request This Unit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Partner Hospitals Network */}
      <section id="hospitals" className="section-padded hospitals-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge">Apex Healthcare Network</span>
            <h2 className="section-title">Directly Integrated Emergency Rooms</h2>
            <p className="section-subtitle">
              ResQAI syncs patient vitals with receiving trauma centers prior to arrival for immediate resuscitation readiness.
            </p>
          </div>

          <div className="hospitals-grid">
            {MOCK_HOSPITALS.map((hosp) => (
              <div key={hosp.id} className="hosp-landing-card glass-panel">
                <div className="hosp-top-row">
                  <div className="hosp-icon">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <span className="hosp-status-pill">Level 1 Emergency Care</span>
                    <h3 className="hosp-name">{hosp.name}</h3>
                  </div>
                </div>
                <p className="hosp-dept">{hosp.emergencyDept}</p>
                <p className="hosp-addr">{hosp.address}</p>

                <div className="hosp-stats-row">
                  <div className="hosp-stat">
                    <span className="val green">{hosp.icuBedsAvailable} Beds</span>
                    <span className="lbl">ICU Resuscitation</span>
                  </div>
                  <div className="hosp-stat">
                    <span className="val blue">{hosp.eta}</span>
                    <span className="lbl">Clear Corridor ETA</span>
                  </div>
                </div>

                <a href={`tel:${hosp.phone}`} className="hosp-call-btn">
                  <PhoneCall size={14} />
                  <span>Call Emergency Dept: {hosp.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About & AI Matching Architecture */}
      <section id="about" className="section-padded about-section">
        <div className="container">
          <div className="about-grid glass-panel">
            <div className="about-text-col">
              <span className="section-badge">INTELLIGENT HEALTHCARE CONNECTIVITY</span>
              <h2 className="about-title">Why ResQAI is Revolutionizing Emergency Transit</h2>
              <p className="about-p">
                Traditional emergency calls often suffer from dispatcher delays, vague location markers, and mismatched medical capabilities.
              </p>
              <p className="about-p">
                ResQAI replaces manual telephone dispatch with an intelligent multi-agent routing algorithm. It factors in real-time GPS telemetry, traffic choke points, patient age and symptoms, and exact vehicle equipment inventories (such as portable ventilators and pediatric kits).
              </p>

              <div className="about-highlights-grid">
                <div className="about-highlight-item">
                  <Sparkles size={20} color="#a855f7" />
                  <div>
                    <h4>Explainable AI Ranking</h4>
                    <p>Transparent matching metrics ensuring the most medically suitable ambulance is chosen.</p>
                  </div>
                </div>
                <div className="about-highlight-item">
                  <ShieldCheck size={20} color="#10b981" />
                  <div>
                    <h4>Verified EMT Responders</h4>
                    <p>All fleet drivers are vetted with mandatory advanced first-aid certifications.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <EmergencyButton
                  onClick={handleNeedAmbulance}
                  text="REQUEST AMBULANCE NOW"
                  size="large"
                />
              </div>
            </div>

            <div className="about-stats-col">
              <div className="stat-card red">
                <h3>99.9%</h3>
                <p>Dispatch Gateway Reliability</p>
              </div>
              <div className="stat-card cyan">
                <h3>6.2 min</h3>
                <p>Median Urban Arrival Time</p>
              </div>
              <div className="stat-card purple">
                <h3>100%</h3>
                <p>End-to-End Encrypted Telemetry</p>
              </div>
              <div className="stat-card green">
                <h3>12,400+</h3>
                <p>Emergency Lives Reached</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .landing-page-root {
          width: 100%;
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
          padding: 60px 0 80px;
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .emergency-slogan-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #fca5a5;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: beacon-pulse 1.2s infinite;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .hero-title-highlight {
          background: linear-gradient(135deg, #ef4444 0%, #f97316 50%, #facc15 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 580px;
        }

        .hero-actions-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .hero-sec-btn {
          padding: 16px 28px;
          border-radius: var(--radius-full);
          font-size: 1rem;
        }

        .hero-metrics-ticker {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .ticker-item {
          display: flex;
          flex-direction: column;
        }

        .ticker-number {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 900;
          color: #ffffff;
        }

        .ticker-label {
          font-size: 0.75rem;
          color: var(--text-dim);
          font-weight: 600;
        }

        .ticker-separator {
          width: 1px;
          height: 32px;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Hero Graphic */
        .hero-visual {
          position: relative;
        }

        .ambulance-graphic-card {
          position: relative;
          border-radius: var(--radius-xl);
          padding: 30px;
          background: rgba(15, 23, 42, 0.85);
          overflow: hidden;
          min-height: 360px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .radar-orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(239, 68, 68, 0.2);
          pointer-events: none;
        }

        .radar-orbit-ring.ring-1 {
          width: 280px;
          height: 280px;
          animation: spin-slow 20s linear infinite;
        }

        .radar-orbit-ring.ring-2 {
          width: 420px;
          height: 420px;
          animation: spin-slow 30s linear infinite reverse;
        }

        .illustration-wrapper {
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .ambulance-hero-svg {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.6));
        }

        .hero-overlay-pill {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background: rgba(10, 15, 30, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(239, 68, 68, 0.35);
          border-radius: var(--radius-md);
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 5;
        }

        .pill-pulse-ring {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 10px #ef4444;
          animation: beacon-pulse 1.2s infinite;
          flex-shrink: 0;
        }

        .pill-text-block {
          display: flex;
          flex-direction: column;
        }

        .pill-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #ffffff;
        }

        .pill-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        /* Generic Section Headings */
        .section-padded {
          padding: 80px 0;
        }

        .section-header-center {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 48px;
        }

        .section-badge {
          display: inline-block;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.25);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 12px;
        }

        .section-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .section-subtitle {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* How It Works Grid */
        .how-it-works-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
        }

        .hiw-card {
          padding: 28px 24px;
          border-radius: var(--radius-lg);
          position: relative;
          transition: var(--transition);
        }

        .hiw-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .hiw-step-num {
          position: absolute;
          top: 20px;
          right: 20px;
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.06);
        }

        .hiw-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .hiw-icon-box.red { background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); }
        .hiw-icon-box.cyan { background: rgba(6, 182, 212, 0.15); color: #06b6d4; border: 1px solid rgba(6, 182, 212, 0.3); }
        .hiw-icon-box.purple { background: rgba(168, 85, 247, 0.15); color: #a855f7; border: 1px solid rgba(168, 85, 247, 0.3); }
        .hiw-icon-box.green { background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3); }

        .hiw-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .hiw-card-text {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.55;
        }

        /* Fleet Grid */
        .fleet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .fleet-card {
          padding: 26px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
        }

        .fleet-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .fleet-eta-tag {
          font-size: 0.78rem;
          font-weight: 700;
          color: #38bdf8;
        }

        .fleet-card-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffffff;
        }

        .fleet-card-category {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .fleet-equip-list {
          background: rgba(0, 0, 0, 0.2);
          border-radius: var(--radius-md);
          padding: 14px;
          margin-bottom: 20px;
          flex: 1;
        }

        .equip-heading {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .fleet-equip-list ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .fleet-equip-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: #e2e8f0;
        }

        .fleet-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 16px;
        }

        .fare-tag {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
        }

        .btn-select-fleet {
          padding: 8px 16px;
          border-radius: var(--radius-md);
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-select-fleet:hover {
          background: #ef4444;
          color: #fff;
        }

        /* Hospitals Grid */
        .hospitals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .hosp-landing-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
        }

        .hosp-top-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 12px;
        }

        .hosp-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(6, 182, 212, 0.15);
          color: #06b6d4;
          border: 1px solid rgba(6, 182, 212, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hosp-status-pill {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-transform: uppercase;
        }

        .hosp-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .hosp-dept {
          font-size: 0.82rem;
          color: #fca5a5;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .hosp-addr {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .hosp-stats-row {
          display: flex;
          gap: 16px;
          background: rgba(0, 0, 0, 0.25);
          border-radius: var(--radius-md);
          padding: 12px 14px;
          margin-bottom: 16px;
        }

        .hosp-stat {
          display: flex;
          flex-direction: column;
        }

        .hosp-stat .val {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
        }

        .hosp-stat .val.green { color: #34d399; }
        .hosp-stat .val.blue { color: #38bdf8; }

        .hosp-stat .lbl {
          font-size: 0.68rem;
          color: var(--text-dim);
          font-weight: 600;
        }

        .hosp-call-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: #e2e8f0;
          font-size: 0.82rem;
          font-weight: 600;
          transition: var(--transition);
        }

        .hosp-call-btn:hover {
          background: rgba(56, 189, 248, 0.15);
          border-color: #38bdf8;
          color: #fff;
        }

        /* About Section */
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          padding: 48px;
          border-radius: var(--radius-xl);
        }

        .about-text-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .about-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }

        .about-p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .about-highlights-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 12px;
        }

        .about-highlight-item {
          display: flex;
          gap: 14px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-md);
          padding: 14px 18px;
          border: 1px solid var(--border-subtle);
        }

        .about-highlight-item h4 {
          font-size: 0.95rem;
          color: #ffffff;
          margin-bottom: 2px;
        }

        .about-highlight-item p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .about-stats-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .stat-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid var(--border-subtle);
        }

        .stat-card.red { background: rgba(239, 68, 68, 0.08); border-color: rgba(239, 68, 68, 0.25); }
        .stat-card.cyan { background: rgba(6, 182, 212, 0.08); border-color: rgba(6, 182, 212, 0.25); }
        .stat-card.purple { background: rgba(168, 85, 247, 0.08); border-color: rgba(168, 85, 247, 0.25); }
        .stat-card.green { background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.25); }

        .stat-card h3 {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
        }

        .stat-card p {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 4px;
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content {
            align-items: center;
          }
          .hero-subtitle {
            margin: 0 auto;
          }
          .hero-actions-row {
            justify-content: center;
          }
          .hero-metrics-ticker {
            justify-content: center;
          }
          .about-grid {
            grid-template-columns: 1fr;
            padding: 28px;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .about-stats-col {
            grid-template-columns: 1fr;
          }
          .hero-metrics-ticker {
            flex-direction: column;
            gap: 12px;
          }
          .ticker-separator {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
