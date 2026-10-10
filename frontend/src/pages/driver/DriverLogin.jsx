import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  CarFront,
  ShieldCheck,
  Phone,
  Lock,
  ArrowRight,
  Siren,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const DriverLogin = () => {
  const navigate = useNavigate();
  const { loginDriver, currentDriver } = useAuth();

  const [identifier, setIdentifier] = useState('driver.kumar@resqai.com');
  const [password, setPassword] = useState('emergency2026');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!identifier || !password) {
      setError('Please provide phone/email and password');
      return;
    }

    try {
      setLoading(true);
      await loginDriver({ email: identifier, password });
      navigate('/driver/dashboard');
    } catch (err) {
      setError('Invalid driver credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemoLogin = async () => {
    setLoading(true);
    await loginDriver({ email: 'kumar.selvam@resqai.org', password: 'demo' });
    navigate('/driver/dashboard');
  };

  return (
    <div className="driver-login-root container-narrow">
      <div className="driver-login-card glass-panel glow-cyan">
        <div className="card-top-icon">
          <div className="driver-icon-circle">
            <CarFront size={36} color="#06b6d4" />
          </div>
          <span className="driver-portal-tag">AUTHORIZED EMT DISPATCH ONLY</span>
          <h1 className="login-heading">Ambulance Driver Portal</h1>
          <p className="login-desc">
            Secure login for certified emergency responders and fleet ambulance operators.
          </p>
        </div>

        {error && (
          <div className="login-error-banner">
            <AlertCircle size={16} color="#ef4444" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="driver-login-form">
          <div className="form-group">
            <label className="form-label" htmlFor="driverIdentifier">
              <span>Driver Phone or EMT ID</span>
              <span className="required">*</span>
            </label>
            <div className="input-wrap">
              <Phone size={18} className="field-icon" />
              <input
                id="driverIdentifier"
                type="text"
                className="form-input with-icon"
                placeholder="+91 94441 23456 or EMT-201"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="driverPassword">
              <span>Dispatcher Security PIN / Password</span>
              <span className="required">*</span>
            </label>
            <div className="input-wrap">
              <Lock size={18} className="field-icon" />
              <input
                id="driverPassword"
                type="password"
                className="form-input with-icon"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-driver-submit"
            disabled={loading}
            id="driverLoginBtn"
          >
            <span>{loading ? 'AUTHENTICATING DISPATCH...' : 'SIGN IN TO DISPATCH CONSOLE'}</span>
            <ArrowRight size={18} />
          </button>

          {/* Quick Demo 1-Click Login Button */}
          <div className="demo-fill-box">
            <button
              type="button"
              className="btn-quick-demo"
              onClick={handleQuickDemoLogin}
            >
              <CheckCircle2 size={16} color="#10b981" />
              <span>Instant Demo Login (Driver Kumar • Unit Alpha)</span>
            </button>
          </div>
        </form>

        <div className="login-footer-links">
          <Link to="/dashboard" className="back-link">
            ← Switch to Patient Portal
          </Link>
          <span className="divider">•</span>
          <a href="#support" className="support-link">
            Fleet Dispatch Support (108-OPS)
          </a>
        </div>
      </div>

      <style>{`
        .driver-login-root {
          padding: 60px 20px 80px;
        }

        .driver-login-card {
          padding: 44px 36px;
          border-radius: var(--radius-xl);
          max-width: 520px;
          margin: 0 auto;
        }

        .card-top-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 28px;
        }

        .driver-icon-circle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.15);
          border: 2px solid #06b6d4;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          box-shadow: 0 0 25px rgba(6, 182, 212, 0.4);
        }

        .driver-portal-tag {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.12);
          border: 1px solid rgba(6, 182, 212, 0.3);
          padding: 3px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .login-heading {
          font-size: 1.9rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .login-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .login-error-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
          font-size: 0.82rem;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          margin-bottom: 20px;
        }

        .input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .field-icon {
          position: absolute;
          left: 14px;
          color: var(--text-dim);
          pointer-events: none;
        }

        .form-input.with-icon {
          padding-left: 42px;
        }

        .btn-driver-submit {
          width: 100%;
          padding: 15px 24px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 4px 18px rgba(2, 132, 199, 0.45);
          transition: var(--transition);
          margin-top: 10px;
        }

        .btn-driver-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(2, 132, 199, 0.7);
        }

        .demo-fill-box {
          margin-top: 18px;
        }

        .btn-quick-demo {
          width: 100%;
          padding: 11px 16px;
          border-radius: var(--radius-md);
          background: rgba(16, 185, 129, 0.1);
          border: 1px dashed rgba(16, 185, 129, 0.35);
          color: #6ee7b7;
          font-size: 0.82rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-quick-demo:hover {
          background: rgba(16, 185, 129, 0.2);
          border-color: #10b981;
        }

        .login-footer-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        .back-link:hover, .support-link:hover {
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default DriverLogin;
