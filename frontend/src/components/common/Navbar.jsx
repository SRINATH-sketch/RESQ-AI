import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Siren,
  PhoneCall,
  Menu,
  X,
  User,
  ShieldCheck,
  Ambulance,
  Building2,
  HelpCircle,
  CarFront,
  AlertTriangle
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useRequest } from '../../context/RequestContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, currentDriver } = useAuth();
  const { activeRequest } = useRequest();

  const isDriverRoute = location.pathname.startsWith('/driver');

  return (
    <header className="app-header-root">
      {/* Top Life-Emergency Dial Bar */}
      <aside className="emergency-top-banner">
        <div className="banner-content">
          <div className="banner-left">
            <span className="pulse-beacon" aria-hidden="true"></span>
            <span>
              <strong>EMERGENCY DISPATCH HOTLINE:</strong> For immediate critical life-support, dial{' '}
              <strong style={{ color: '#fff' }}>108 / 112</strong>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="tel:108" className="banner-phone-pill">
              <PhoneCall size={13} />
              <span>Dial 108 Direct</span>
            </a>
            <span style={{ fontSize: '0.78rem', color: '#fca5a5' }}>
              • Fast Response • Safe Journey • Reliable Care
            </span>
          </div>
        </div>
      </aside>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <div className="nav-wrapper">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="logo-icon-box">
              <Siren className="siren-svg" size={24} />
              <span className="ping-wave"></span>
            </div>
            <div className="brand-text-block">
              <span className="brand-title">
                ResQ<span className="brand-ai">AI</span>
              </span>
              <span className="brand-tagline">SMART DISPATCH</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="nav-links-desktop">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <a href="/#how-it-works" className="nav-link">
              How It Works
            </a>
            <a href="/#ambulances" className="nav-link">
              Ambulance
            </a>
            <a href="/#hospitals" className="nav-link">
              Hospitals
            </a>
            <a href="/#about" className="nav-link">
              About
            </a>

            {/* Dashboard Link */}
            <Link
              to="/dashboard"
              className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
            >
              Dashboard
            </Link>
          </div>

          {/* Action Buttons & Portal Switch */}
          <div className="nav-actions-desktop">
            {/* Driver Portal Link / Pill */}
            <Link
              to={isDriverRoute ? '/dashboard' : '/driver/dashboard'}
              className="portal-toggle-pill"
              title="Toggle between Patient and Driver interface"
            >
              <CarFront size={16} />
              <span>{isDriverRoute ? 'Patient Portal' : 'Driver Portal'}</span>
            </Link>

            {/* Active Request Indicator if one is ongoing */}
            {activeRequest && (
              <button
                onClick={() => {
                  if (activeRequest.status === 'COMPLETED') {
                    navigate('/request/completed');
                  } else if (activeRequest.status === 'ARRIVED') {
                    navigate('/request/arrived');
                  } else if (activeRequest.status === 'PATIENT_PICKED_UP' || activeRequest.status === 'AT_HOSPITAL') {
                    navigate('/request/hospital');
                  } else if (activeRequest.status === 'DRIVER_ACCEPTED') {
                    navigate('/request/accepted');
                  } else if (activeRequest.status === 'REQUESTED' || activeRequest.status === 'MATCHING') {
                    navigate('/request/sent');
                  } else {
                    navigate('/request/tracking');
                  }
                }}
                className="active-pill-btn"
                title="View Active Ambulance Dispatch"
              >
                <span className="active-dot"></span>
                <span>Live Request</span>
              </button>
            )}

            {/* Emergency Request Button */}
            <button
              onClick={() => navigate('/request/location')}
              className="nav-emergency-btn"
              id="headerRequestAmbulanceBtn"
            >
              <Ambulance size={18} />
              <span>Request Ambulance</span>
            </button>

            {/* User / Login */}
            {currentUser ? (
              <Link to="/dashboard" className="user-avatar-btn" title={currentUser.name}>
                <div className="avatar-circle">
                  {currentUser.name.charAt(0)}
                </div>
              </Link>
            ) : (
              <Link to="/login" className="login-link">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown-menu">
            <Link
              to="/"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              User Dashboard
            </Link>
            <a
              href="/#how-it-works"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="/#ambulances"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ambulance Fleet
            </a>
            <a
              href="/#hospitals"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hospitals Network
            </a>
            <Link
              to="/driver/dashboard"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Driver Dashboard
            </Link>
            <div style={{ marginTop: '16px' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/request/location');
                }}
                className="btn-emergency"
                style={{ width: '100%' }}
              >
                <Ambulance size={20} />
                <span>REQUEST AMBULANCE NOW</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        .app-header-root {
          position: sticky;
          top: 0;
          z-index: 999;
          width: 100%;
        }

        .main-navbar {
          background: rgba(6, 9, 19, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
        }

        .nav-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-icon-box {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(185, 28, 28, 0.35) 100%);
          border: 1px solid rgba(239, 68, 68, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 16px rgba(239, 68, 68, 0.3);
        }

        .siren-svg {
          color: #ef4444;
          animation: siren-wiggle 3s ease-in-out infinite;
        }

        @keyframes siren-wiggle {
          0%, 80%, 100% { transform: rotate(0deg); }
          85% { transform: rotate(-8deg); }
          90% { transform: rotate(8deg); }
          95% { transform: rotate(-5deg); }
        }

        .ping-wave {
          position: absolute;
          inset: -4px;
          border-radius: inherit;
          border: 1.5px solid rgba(239, 68, 68, 0.6);
          animation: pulse-ring 2.2s infinite;
          pointer-events: none;
        }

        .brand-text-block {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
          line-height: 1.1;
        }

        .brand-ai {
          color: #ef4444;
          font-weight: 900;
        }

        .brand-tagline {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--accent-cyan);
        }

        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .nav-link {
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: var(--transition);
          padding: 6px 4px;
          position: relative;
        }

        .nav-link:hover, .nav-link.active {
          color: #ffffff;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #ef4444;
          border-radius: 2px;
        }

        .nav-actions-desktop {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .portal-toggle-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 600;
          transition: var(--transition);
        }

        .portal-toggle-pill:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .active-pill-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 14px;
          border-radius: var(--radius-full);
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #6ee7b7;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
        }

        .active-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: beacon-pulse 1.2s infinite;
        }

        .nav-emergency-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.88rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(239, 68, 68, 0.4);
          transition: var(--transition);
        }

        .nav-emergency-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 18px rgba(239, 68, 68, 0.65);
        }

        .avatar-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #1e40af);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #fff;
          font-size: 0.95rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .login-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-main);
          padding: 8px 12px;
        }

        .mobile-hamburger-btn {
          display: none;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        .mobile-dropdown-menu {
          display: flex;
          flex-direction: column;
          padding: 16px 24px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-subtle);
          gap: 12px;
        }

        .mobile-nav-link {
          padding: 8px 0;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-main);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 992px) {
          .nav-links-desktop {
            display: none;
          }
          .mobile-hamburger-btn {
            display: block;
          }
        }

        @media (max-width: 640px) {
          .nav-actions-desktop .portal-toggle-pill {
            display: none;
          }
          .nav-emergency-btn span {
            display: none;
          }
          .nav-emergency-btn {
            padding: 9px;
            border-radius: 50%;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
