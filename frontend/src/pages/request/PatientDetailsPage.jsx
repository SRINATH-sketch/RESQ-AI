import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, HeartPulse, User, MapPin } from 'lucide-react';
import { useRequest } from '../../context/RequestContext';
import { PatientForm } from '../../components/forms/PatientForm';

export const PatientDetailsPage = () => {
  const navigate = useNavigate();
  const { draftPatient, setDraftPatient, draftLocation } = useRequest();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (data) => {
    setIsSubmitting(true);
    setDraftPatient(data);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/request/matching');
    }, 400);
  };

  return (
    <div className="patient-details-page-root container-narrow">
      <div className="page-breadcrumb">
        <span>Step 2 of 4 • Patient Clinical Profile & Emergency Triage</span>
      </div>

      <div className="patient-card-container glass-panel">
        <div className="patient-header">
          <div className="step-pill">STEP 2: PATIENT TRIAGE</div>
          <h1 className="patient-title">Emergency Patient Details</h1>
          <p className="patient-desc">
            Provide the patient's symptoms and vital notes. This enables our AI engine to rank the most suitable Life Support equipment tier (ALS/BLS).
          </p>

          {/* Quick Pickup Vector Recap */}
          <div className="pickup-recap-bar">
            <MapPin size={15} color="#ef4444" />
            <span className="recap-label">Pickup:</span>
            <span className="recap-address">{draftLocation.pickupAddress}</span>
          </div>
        </div>

        {/* Patient Form Component */}
        <PatientForm
          initialData={draftPatient}
          onSubmit={handleFormSubmit}
          isSubmitting={isSubmitting}
        />
      </div>

      <style>{`
        .patient-details-page-root {
          padding: 30px 20px 60px;
        }

        .page-breadcrumb {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-cyan);
          letter-spacing: 0.04em;
          margin-bottom: 20px;
        }

        .patient-card-container {
          padding: 36px 32px;
          border-radius: var(--radius-xl);
        }

        .patient-header {
          margin-bottom: 28px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 20px;
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

        .patient-title {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .patient-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 16px;
        }

        .pickup-recap-bar {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 8px 14px;
          font-size: 0.82rem;
        }

        .recap-label {
          color: var(--text-dim);
          font-weight: 700;
        }

        .recap-address {
          color: #ffffff;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default PatientDetailsPage;
