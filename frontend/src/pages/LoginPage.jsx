import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  User,
  Lock,
  Mail,
  ArrowRight,
  Siren,
  ShieldCheck,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const [email, setEmail] = useState('rajesh.sharma@example.com');
  const [password, setPassword] = useState('emergency2026');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please provide email and password');
      return;
    }

    try {
      setLoading(true);
      await loginUser({ email, password });
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemo = async () => {
    setLoading(true);
    await loginUser({ email: 'rajesh.sharma@example.com', password: 'demo' });
    navigate('/dashboard');
  };

  return (
    <div className="login-page-root container-narrow">
      <div className="login-card glass-panel glow-red">
        <div className="login-card-header">
          <div className="brand-badge-circle">
            <Siren size={32} color="#ef4444" />
          </div>
          <span className="login-subtag">PATIENT & FAMILY CITIZEN PORTAL</span>
          <h1 className="login-title">Sign In to ResQAI</h1>
          <p className="login-text">
            Access your saved medical vitals, past ambulance rides, and emergency family contacts.
          </p>
        </div>

        {error && (
          <div className="auth-error-box">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label className="form-label" htmlFor="userEmail">
              <span>Email Address or Phone</span>
              <span className="required">*</span>
            </label>
            <div className="input-wrap">
              <Mail size={18} className="field-icon" />
              <input
                id="userEmail"
                type="text"
                className="form-input with-icon"
                placeholder="rajesh.sharma@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="userPassword">
              <span>Password</span>
              <span className="required">*</span>
            </label>
            <div className="input-wrap">
              <Lock size={18} className="field-icon" />
              <input
                id="userPassword"
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
            className="btn-auth-submit"
            disabled={loading}
            id="userLoginSubmitBtn"
          >
            <span>{loading ? 'AUTHENTICATING...' : 'SIGN IN TO DASHBOARD'}</span>
            <ArrowRight size={18} />
          </button>

          {/* Quick Demo 1-Click Button */}
          <div className="demo-login-wrapper">
            <button
              type="button"
              className="btn-demo-quick"
              onClick={handleQuickDemo}
            >
              <CheckCircle2 size={16} color="#10b981" />
              <span>Instant 1-Click Demo Login (Rajesh Sharma)</span>
            </button>
          </div>
        </form>

        <div className="auth-footer-options">
          <p className="register-prompt">
            Don't have an emergency profile?{' '}
            <Link to="/register" className="auth-link">
              Register now
            </Link>
          </p>

          <div className="driver-portal-redirect">
            <Link to="/driver/login" className="driver-link">
              Looking for Driver Portal? Sign in as Ambulance Driver →
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .login-page-root {
          padding: 60px 20px 80px;
        }

        .login-card {
          padding: 44px 36px;
          border-radius: var(--radius-xl);
          max-width: 520px;
          margin: 0 auto;
        }

        .login-card-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 28px;
        }

        .brand-badge-circle {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.15);
          border: 2px solid #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.4);
        }

        .login-subtag {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #fca5a5;
          margin-bottom: 6px;
        }

        .login-title {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .login-text {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .auth-error-box {
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

        .btn-auth-submit {
          width: 100%;
          padding: 15px 24px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
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
          box-shadow: 0 4px 18px rgba(37, 99, 235, 0.45);
          transition: var(--transition);
          margin-top: 10px;
        }

        .btn-auth-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(37, 99, 235, 0.7);
        }

        .demo-login-wrapper {
          margin-top: 18px;
        }

        .btn-demo-quick {
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

        .btn-demo-quick:hover {
          background: rgba(16, 185, 129, 0.2);
          border-color: #10b981;
        }

        .auth-footer-options {
          margin-top: 26px;
          text-align: center;
          font-size: 0.82rem;
          color: var(--text-dim);
        }

        .register-prompt {
          margin-bottom: 12px;
        }

        .auth-link {
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .auth-link:hover {
          text-decoration: underline;
        }

        .driver-link {
          color: #f87171;
          font-weight: 600;
          font-size: 0.78rem;
        }

        .driver-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
