import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  User,
  Lock,
  Mail,
  Phone,
  ArrowRight,
  Siren,
  ShieldCheck,
  HeartPulse,
  MapPin
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bloodGroup: 'O+',
    address: 'Anna Nagar, Chennai',
    password: ''
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      id: `USR-${Math.floor(1000 + Math.random() * 9000)}`,
      name: formData.name || 'New Patient',
      phone: formData.phone || '+91 98765 00000',
      email: formData.email || 'patient@example.com',
      bloodGroup: formData.bloodGroup,
      currentLocation: {
        address: formData.address,
        lat: 13.0850,
        lng: 80.2100,
        landmark: 'Main Junction'
      },
      emergencyContacts: [
        { name: 'Family Contact', phone: formData.phone, relationship: 'Kin' }
      ],
      role: 'patient',
      isAuthenticated: true
    };
    setCurrentUser(newUser);
    navigate('/dashboard');
  };

  return (
    <div className="register-page-root container-narrow">
      <div className="register-card glass-panel">
        <div className="card-top-icon">
          <div className="icon-circle">
            <HeartPulse size={32} color="#ef4444" />
          </div>
          <span className="sub-badge">NEW CITIZEN REGISTRATION</span>
          <h1 className="title">Create ResQAI Account</h1>
          <p className="desc">
            Store your baseline health records and emergency contacts for instantaneous ambulance booking.
          </p>
        </div>

        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <label className="form-label" htmlFor="regName">
              <span>Full Legal Name</span>
              <span className="required">*</span>
            </label>
            <input
              id="regName"
              type="text"
              className="form-input"
              placeholder="e.g. S. Kavitha Raman"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="form-row-2">
            <div className="form-group">
              <label className="form-label" htmlFor="regPhone">
                <span>Phone Number</span>
                <span className="required">*</span>
              </label>
              <input
                id="regPhone"
                type="tel"
                className="form-input"
                placeholder="+91 98400 11223"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="regBlood">
                <span>Blood Group</span>
              </label>
              <select
                id="regBlood"
                className="form-select"
                value={formData.bloodGroup}
                onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="regEmail">
              <span>Email Address</span>
              <span className="required">*</span>
            </label>
            <input
              id="regEmail"
              type="email"
              className="form-input"
              placeholder="kavitha@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="regAddress">
              <span>Primary Residence / Default Pickup Address</span>
              <span className="required">*</span>
            </label>
            <input
              id="regAddress"
              type="text"
              className="form-input"
              placeholder="Door No, Street Name, Area, City"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="regPassword">
              <span>Account Password</span>
              <span className="required">*</span>
            </label>
            <input
              id="regPassword"
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '15px' }}>
            <span>COMPLETE REGISTRATION</span>
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="foot-prompt">
          Already registered?{' '}
          <Link to="/login" style={{ color: 'var(--accent-cyan)', fontWeight: '700' }}>
            Sign In here
          </Link>
        </div>
      </div>

      <style>{`
        .register-page-root {
          padding: 60px 20px 80px;
        }

        .register-card {
          padding: 40px 36px;
          border-radius: var(--radius-xl);
          max-width: 560px;
          margin: 0 auto;
        }

        .card-top-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 24px;
        }

        .icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.15);
          border: 2px solid #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .sub-badge {
          font-size: 0.68rem;
          font-weight: 800;
          color: #fca5a5;
          letter-spacing: 0.08em;
          margin-bottom: 4px;
        }

        .title {
          font-size: 1.9rem;
          font-weight: 800;
          color: #ffffff;
        }

        .desc {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 16px;
        }

        .foot-prompt {
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-top: 24px;
        }

        @media (max-width: 640px) {
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default RegisterPage;
