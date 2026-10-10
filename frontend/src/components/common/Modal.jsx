import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = '550px'
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-window-card"
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-top-bar">
          <div className="modal-titles">
            {title && <h3 className="modal-title-text">{title}</h3>}
            {subtitle && <p className="modal-sub-text">{subtitle}</p>}
          </div>
          <button className="modal-close-icon-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body-area">{children}</div>
      </div>

      <style>{`
        .modal-backdrop-overlay {
          position: fixed;
          inset: 0;
          background: rgba(4, 7, 16, 0.78);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 10000;
          animation: fade-in 0.2s ease-out;
        }

        .modal-window-card {
          width: 100%;
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-xl);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.85);
          overflow: hidden;
          animation: scale-up 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-top-bar {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 20px 24px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .modal-title-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
        }

        .modal-sub-text {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .modal-close-icon-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }

        .modal-close-icon-btn:hover {
          color: #fff;
          background: rgba(239, 68, 68, 0.3);
          border-color: #ef4444;
        }

        .modal-body-area {
          padding: 20px 24px 24px;
          max-height: 80vh;
          overflow-y: auto;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-up {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Modal;
