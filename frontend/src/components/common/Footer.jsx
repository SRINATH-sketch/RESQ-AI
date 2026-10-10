import React from 'react';
import { Siren, PhoneCall, ShieldCheck, Heart, Radio, MapPin, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="resq-footer-root">
      <div className="container">
        {/* Emergency Helplines Quick Banner */}
        <div className="footer-emergency-row">
          <div className="helpline-card highlight">
            <div className="helpline-icon red">
              <PhoneCall size={20} />
            </div>
            <div>
              <span className="helpline-title">National Emergency Ambulance</span>
              <a href="tel:108" className="helpline-number">Dial 108</a>
            </div>
          </div>

          <div className="helpline-card">
            <div className="helpline-icon blue">
              <ShieldCheck size={20} />
            </div>
            <div>
              <span className="helpline-title">All-in-One Emergency Services</span>
              <a href="tel:112" className="helpline-number">Dial 112</a>
            </div>
          </div>

          <div className="helpline-card">
            <div className="helpline-icon teal">
              <Activity size={20} />
            </div>
            <div>
              <span className="helpline-title">Apex Cardiac & Trauma Care</span>
              <a href="tel:1066" className="helpline-number">Dial 1066</a>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="brand-logo-footer">
              <div className="logo-icon-box-small">
                <Siren size={20} color="#ef4444" />
              </div>
              <span className="brand-name">
                ResQ<span className="accent-red">AI</span>
              </span>
            </div>
            <p className="footer-desc">
              AI-driven rapid emergency dispatch network linking critical patients with nearby private and advanced life support ambulances within seconds.
            </p>
            <div className="footer-status-pill">
              <span className="operational-dot"></span>
              <span>All Dispatch Gateways Operational • 99.98% Uptime</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="footer-col">
            <h5 className="footer-heading">Emergency Navigation</h5>
            <ul className="footer-links">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/request/location">Request Ambulance</Link></li>
              <li><Link to="/dashboard">User Dashboard</Link></li>
              <li><a href="/#how-it-works">How It Works</a></li>
              <li><a href="/#ambulances">Fleet Categories</a></li>
              <li><a href="/#hospitals">Partner Hospitals</a></li>
            </ul>
          </div>

          {/* Fleet & Services */}
          <div className="footer-col">
            <h5 className="footer-heading">Fleet Capabilities</h5>
            <ul className="footer-links">
              <li><span className="text-link">Advanced Life Support (ALS)</span></li>
              <li><span className="text-link">Basic Life Support (BLS)</span></li>
              <li><span className="text-link">Neonatal & Pediatric Mobile ICU</span></li>
              <li><span className="text-link">Patient Transit Service (PTS)</span></li>
              <li><span className="text-link">Critical Cardiac Mobile Units</span></li>
            </ul>
          </div>

          {/* Driver & Partner Access */}
          <div className="footer-col">
            <h5 className="footer-heading">Portals & Access</h5>
            <ul className="footer-links">
              <li><Link to="/driver/login">Driver Portal Login</Link></li>
              <li><Link to="/driver/dashboard">Driver Dispatch Console</Link></li>
              <li><Link to="/login">Patient Account</Link></li>
              <li><a href="#compliance">Safety & AI Protocol</a></li>
              <li><a href="#privacy">Privacy & HIPAA Security</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="footer-disclaimer-box">
          <p className="disclaimer-text">
            <strong>CRITICAL MEDICAL DISCLAIMER:</strong> ResQAI is an emergency connectivity and intelligent routing dispatch platform. It locates, scores and alerts nearby available private ambulance fleets based on GPS proximity, ETA and required life-support equipment. ResQAI does not perform clinical diagnosis. In case of life-threatening delays, immediately dial national emergency number <strong>108</strong>.
          </p>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-copy">
            © {new Date().getFullYear()} ResQAI Emergency Health Systems Inc. All rights reserved.
          </div>
          <div className="footer-meta-tags">
            <span>Fast Response</span>
            <span>•</span>
            <span>Safe Journey</span>
            <span>•</span>
            <span>Reliable Care</span>
          </div>
        </div>
      </div>

      <style>{`
        .resq-footer-root {
          background: #04060c;
          border-top: 1px solid var(--border-subtle);
          padding: 48px 0 24px;
          margin-top: auto;
          position: relative;
          z-index: 10;
        }

        .footer-emergency-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
          margin-bottom: 40px;
        }

        .helpline-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: var(--transition);
        }

        .helpline-card.highlight {
          border-color: rgba(239, 68, 68, 0.4);
          background: rgba(239, 68, 68, 0.08);
        }

        .helpline-icon {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .helpline-icon.red {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .helpline-icon.blue {
          background: rgba(59, 130, 246, 0.2);
          color: #60a5fa;
        }

        .helpline-icon.teal {
          background: rgba(20, 184, 166, 0.2);
          color: #2dd4bf;
        }

        .helpline-title {
          display: block;
          font-size: 0.76rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .helpline-number {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          transition: var(--transition);
        }

        .helpline-number:hover {
          color: #ef4444;
        }

        .footer-main-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 32px;
          margin-bottom: 36px;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .brand-logo-footer {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-icon-box-small {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff;
        }

        .accent-red {
          color: #ef4444;
        }

        .footer-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 340px;
        }

        .footer-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #6ee7b7;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .operational-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
        }

        .footer-heading {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links a, .footer-links .text-link {
          font-size: 0.85rem;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: #ffffff;
          transform: translateX(3px);
          display: inline-block;
        }

        .footer-disclaimer-box {
          background: rgba(239, 68, 68, 0.04);
          border: 1px dashed rgba(239, 68, 68, 0.25);
          border-radius: var(--radius-md);
          padding: 14px 20px;
          margin-bottom: 24px;
        }

        .disclaimer-text {
          font-size: 0.78rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 20px;
          font-size: 0.8rem;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-meta-tags {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #94a3b8;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 580px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
