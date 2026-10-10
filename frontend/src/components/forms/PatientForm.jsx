import React, { useState } from 'react';
import {
  HeartPulse,
  Wind,
  CarFront,
  Bone,
  Stethoscope,
  AlertCircle,
  User,
  Phone,
  Calendar,
  FileText,
  AlertTriangle,
  Ambulance,
  CheckCircle2
} from 'lucide-react';
import { EMERGENCY_TYPES } from '../../data/mockData';

const ICONS = {
  HeartPulse,
  Wind,
  CarFront,
  Bone,
  Stethoscope,
  AlertCircle
};

export const PatientForm = ({ initialData, onSubmit, isSubmitting = false }) => {
  const [formData, setFormData] = useState({
    patientName: initialData?.patientName || '',
    patientAge: initialData?.patientAge || '',
    patientGender: initialData?.patientGender || 'Male',
    emergencyType: initialData?.emergencyType || 'Heart Emergency',
    contactNumber: initialData?.contactNumber || '',
    additionalNotes: initialData?.additionalNotes || ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.patientName.trim()) {
      errs.patientName = 'Patient full name is required';
    }
    if (!formData.patientAge || isNaN(formData.patientAge) || +formData.patientAge < 1 || +formData.patientAge > 120) {
      errs.patientAge = 'Please enter a valid age (1-120)';
    }
    if (!formData.contactNumber.trim() || formData.contactNumber.replace(/\D/g, '').length < 10) {
      errs.contactNumber = 'Enter a valid 10-digit emergency contact number';
    }
    if (!formData.emergencyType) {
      errs.emergencyType = 'Please select the emergency condition';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form className="emergency-patient-form" onSubmit={handleSubmit} noValidate>
      {/* 1. Emergency Type Selection Grid */}
      <div className="form-section-block">
        <label className="section-label">
          <span>Select Emergency Nature</span>
          <span className="required-star">*</span>
        </label>
        <p className="section-subtext">
          Our AI matching algorithm prioritizes life-support equipment (e.g. ALS Ventilator) based on this selection.
        </p>

        <div className="emergency-types-grid">
          {EMERGENCY_TYPES.map((type) => {
            const Icon = ICONS[type.icon] || AlertCircle;
            const isSelected = formData.emergencyType === type.label;

            return (
              <div
                key={type.id}
                className={`type-tile ${isSelected ? 'selected' : ''} severity-${type.severity}`}
                onClick={() => setFormData({ ...formData, emergencyType: type.label })}
                role="button"
                tabIndex={0}
              >
                <div className="tile-top-row">
                  <div className="tile-icon-box">
                    <Icon size={20} />
                  </div>
                  <span className={`type-badge-pill ${type.suggestedType.toLowerCase()}`}>
                    {type.suggestedType}
                  </span>
                </div>
                <h4 className="type-title">{type.label}</h4>
                <p className="type-desc">{type.desc}</p>
                {isSelected && (
                  <div className="tile-selected-mark">
                    <CheckCircle2 size={16} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {errors.emergencyType && <span className="error-text">{errors.emergencyType}</span>}
      </div>

      {/* 2. Patient Identity & Contact */}
      <div className="form-fields-grid">
        {/* Patient Name */}
        <div className="form-group">
          <label className="form-label" htmlFor="patientName">
            <span>Patient Full Name</span>
            <span className="required">*</span>
          </label>
          <div className="input-with-icon">
            <User size={18} className="field-icon" />
            <input
              id="patientName"
              type="text"
              className={`form-input with-icon ${errors.patientName ? 'input-error' : ''}`}
              placeholder="e.g. Rajesh Sharma"
              value={formData.patientName}
              onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
            />
          </div>
          {errors.patientName && <span className="error-text">{errors.patientName}</span>}
        </div>

        {/* Contact Number */}
        <div className="form-group">
          <label className="form-label" htmlFor="contactNumber">
            <span>Emergency Contact Number</span>
            <span className="required">*</span>
          </label>
          <div className="input-with-icon">
            <Phone size={18} className="field-icon" />
            <input
              id="contactNumber"
              type="tel"
              className={`form-input with-icon ${errors.contactNumber ? 'input-error' : ''}`}
              placeholder="+91 98765 43210"
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            />
          </div>
          {errors.contactNumber && <span className="error-text">{errors.contactNumber}</span>}
        </div>

        {/* Age */}
        <div className="form-group">
          <label className="form-label" htmlFor="patientAge">
            <span>Patient Age</span>
            <span className="required">*</span>
          </label>
          <div className="input-with-icon">
            <Calendar size={18} className="field-icon" />
            <input
              id="patientAge"
              type="number"
              min="1"
              max="120"
              className={`form-input with-icon ${errors.patientAge ? 'input-error' : ''}`}
              placeholder="e.g. 45"
              value={formData.patientAge}
              onChange={(e) => setFormData({ ...formData, patientAge: e.target.value })}
            />
          </div>
          {errors.patientAge && <span className="error-text">{errors.patientAge}</span>}
        </div>

        {/* Gender */}
        <div className="form-group">
          <label className="form-label" htmlFor="patientGender">
            <span>Gender</span>
            <span className="required">*</span>
          </label>
          <select
            id="patientGender"
            className="form-select"
            value={formData.patientGender}
            onChange={(e) => setFormData({ ...formData, patientGender: e.target.value })}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other / Transgender</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
      </div>

      {/* 3. Additional Clinical or Pickup Information */}
      <div className="form-group">
        <label className="form-label" htmlFor="additionalNotes">
          <span>Additional Medical Condition / Pickup Landmarks</span>
          <span className="opt-tag">(Optional)</span>
        </label>
        <textarea
          id="additionalNotes"
          className="form-textarea"
          rows="3"
          placeholder="e.g. Patient is conscious, complaining of acute chest pressure. 2nd floor, elevator available. Gate code #402."
          value={formData.additionalNotes}
          onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
        ></textarea>
      </div>

      {/* Safety Notice */}
      <div className="form-safety-banner">
        <AlertTriangle size={18} color="#f59e0b" className="warn-icon" />
        <p className="safety-text">
          By proceeding, nearby registered ambulance units within a 5 km radius will receive your emergency beacon. Please stay at the location with your phone available.
        </p>
      </div>

      {/* Submit Button */}
      <div className="form-action-row">
        <button
          type="submit"
          className="btn-emergency-submit"
          disabled={isSubmitting}
          id="submitPatientDetailsBtn"
        >
          <Ambulance size={22} />
          <span>{isSubmitting ? 'FINDING AMBULANCES...' : 'FIND & MATCH AMBULANCES'}</span>
        </button>
      </div>

      <style>{`
        .emergency-patient-form {
          width: 100%;
        }

        .form-section-block {
          margin-bottom: 24px;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .required-star {
          color: #ef4444;
        }

        .section-subtext {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 2px;
          margin-bottom: 14px;
        }

        .emergency-types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }

        .type-tile {
          position: relative;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 14px;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          user-select: none;
        }

        .type-tile:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(23, 34, 58, 0.8);
          transform: translateY(-2px);
        }

        .type-tile.selected {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.08);
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
        }

        .tile-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .tile-icon-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .type-badge-pill {
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: var(--radius-full);
          letter-spacing: 0.04em;
        }

        .type-badge-pill.als {
          background: rgba(239, 68, 68, 0.2);
          color: #fca5a5;
          border: 1px solid rgba(239, 68, 68, 0.4);
        }

        .type-badge-pill.bls {
          background: rgba(6, 182, 212, 0.2);
          color: #67e8f9;
          border: 1px solid rgba(6, 182, 212, 0.4);
        }

        .type-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .type-desc {
          font-size: 0.72rem;
          color: var(--text-muted);
          line-height: 1.35;
        }

        .tile-selected-mark {
          position: absolute;
          top: 10px;
          right: 10px;
          color: #ef4444;
        }

        .form-fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .input-with-icon {
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

        .opt-tag {
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--text-dim);
        }

        .form-safety-banner {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          margin: 20px 0 24px;
        }

        .warn-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .safety-text {
          font-size: 0.8rem;
          color: #fde68a;
          line-height: 1.45;
        }

        .form-action-row {
          display: flex;
          justify-content: flex-end;
        }

        .btn-emergency-submit {
          width: 100%;
          padding: 16px 28px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.5);
          transition: var(--transition);
        }

        .btn-emergency-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 0 35px rgba(239, 68, 68, 0.8);
          background: linear-gradient(135deg, #f87171 0%, #dc2626 100%);
        }

        @media (max-width: 640px) {
          .form-fields-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </form>
  );
};

export default PatientForm;
