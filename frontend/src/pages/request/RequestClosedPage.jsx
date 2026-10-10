import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  Ambulance,
  LayoutDashboard,
  ShieldCheck,
  Heart,
  FileCheck,
  ArrowRight
} from 'lucide-react';
import { useRequest } from '../../context/RequestContext';

export const RequestClosedPage = () => {
  const navigate = useNavigate();
  const { closeCurrentRequest } = useRequest();

  const handleBackToDashboard = () => {
    closeCurrentRequest();
    navigate('/dashboard');
  };

  const handleRequestAnother = () => {
    closeCurrentRequest();
    navigate('/request/location');
  };

  return (
    <div className="closed-page-root container-narrow">
      <div className="closed-card glass-panel glow-success">
        {/* Large Green Success Icon */}
        <div className="large-success-badge">
          <CheckCircle2 size={54} color="#10b981" />
        </div>

        <span className="closed-status-tag">LIFECYCLE RESOLVED</span>
        <h1 className="closed-headline">Emergency Request Completed</h1>
        
        {/* Required Message */}
        <p className="closed-message">
          The ambulance trip has been successfully completed.
        </p>

        <p className="closed-subtext">
          Hospital casuality reception has logged the transfer. A digital receipt and clinical handover summary have been archived in your dashboard history.
        </p>

        {/* Certificate / Receipt Voucher Box */}
        <div className="closed-voucher-box">
          <div className="voucher-row">
            <FileCheck size={18} color="#10b981" />
            <span className="voucher-title">Discharge Voucher #VCH-2026-904</span>
          </div>
          <div className="voucher-details">
            <span>Status: <strong>Signed & Handed Over</strong></span>
            <span>Priority: <strong>Emergency ALS Resuscitation</strong></span>
            <span>Payment: <strong>Direct Hospital Integrated Billing</strong></span>
          </div>
        </div>

        {/* Action Buttons: Back to Dashboard & Request Another Ambulance */}
        <div className="closed-buttons-row">
          <button
            onClick={handleBackToDashboard}
            className="btn-dash-return"
            id="backToDashboardBtn"
          >
            <LayoutDashboard size={18} />
            <span>Back to Dashboard</span>
          </button>

          <button
            onClick={handleRequestAnother}
            className="btn-request-another"
            id="requestAnotherAmbulanceBtn"
          >
            <Ambulance size={18} />
            <span>Request Another Ambulance</span>
          </button>
        </div>
      </div>

      <style>{`
        .closed-page-root {
          padding: 60px 20px 80px;
        }

        .closed-card {
          padding: 50px 36px;
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 650px;
          margin: 0 auto;
        }

        .large-success-badge {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          border: 2px solid #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 0 35px rgba(16, 185, 129, 0.5);
          animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .closed-status-tag {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #34d399;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.35);
          padding: 4px 14px;
          border-radius: var(--radius-full);
          margin-bottom: 12px;
        }

        .closed-headline {
          font-size: 2.3rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 10px;
        }

        .closed-message {
          font-size: 1.15rem;
          font-weight: 700;
          color: #34d399;
          margin-bottom: 8px;
        }

        .closed-subtext {
          font-size: 0.9rem;
          color: var(--text-muted);
          max-width: 480px;
          line-height: 1.55;
          margin-bottom: 28px;
        }

        .closed-voucher-box {
          width: 100%;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 18px 24px;
          margin-bottom: 32px;
          text-align: left;
        }

        .voucher-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .voucher-title {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: #ffffff;
        }

        .voucher-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .voucher-details strong {
          color: #ffffff;
        }

        .closed-buttons-row {
          display: flex;
          gap: 16px;
          width: 100%;
          flex-wrap: wrap;
        }

        .btn-dash-return {
          flex: 1;
          min-width: 200px;
          padding: 14px 24px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border-subtle);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.92rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-dash-return:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .btn-request-another {
          flex: 1;
          min-width: 200px;
          padding: 14px 24px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.95rem;
          letter-spacing: 0.03em;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(239, 68, 68, 0.4);
          transition: var(--transition);
        }

        .btn-request-another:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(239, 68, 68, 0.65);
        }

        @media (max-width: 640px) {
          .closed-buttons-row {
            flex-direction: column;
          }
          .btn-dash-return, .btn-request-another {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default RequestClosedPage;
