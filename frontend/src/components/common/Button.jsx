import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  type = 'button',
  icon: Icon,
  className = '',
  id,
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`resq-btn btn-${variant} btn-sz-${size} ${fullWidth ? 'btn-full' : ''} ${className}`}
      {...props}
    >
      {Icon && <Icon className="btn-icon" size={size === 'lg' ? 20 : size === 'sm' ? 14 : 17} />}
      <span className="btn-label">{children}</span>

      <style>{`
        .resq-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: var(--font-body);
          font-weight: 600;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: var(--transition);
          border: 1px solid transparent;
          text-decoration: none;
          white-space: nowrap;
          user-select: none;
        }

        .resq-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          pointer-events: none;
        }

        .btn-full {
          width: 100%;
        }

        /* Sizes */
        .btn-sz-sm {
          padding: 6px 14px;
          font-size: 0.8rem;
          border-radius: var(--radius-sm);
        }
        .btn-sz-md {
          padding: 10px 20px;
          font-size: 0.9rem;
        }
        .btn-sz-lg {
          padding: 14px 28px;
          font-size: 1.05rem;
          border-radius: var(--radius-md);
        }

        /* Variants */
        .btn-primary {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.5);
        }

        .btn-emergency {
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 700;
          letter-spacing: 0.03em;
          box-shadow: 0 4px 18px rgba(239, 68, 68, 0.45);
        }
        .btn-emergency:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(239, 68, 68, 0.7);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--border-subtle);
          color: var(--text-main);
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
        }

        .btn-outline {
          background: transparent;
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }
        .btn-outline:hover {
          background: rgba(6, 182, 212, 0.1);
        }

        .btn-success {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
        }
        .btn-success:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.5);
        }

        .btn-danger {
          background: rgba(239, 68, 68, 0.15);
          border-color: rgba(239, 68, 68, 0.4);
          color: #f87171;
        }
        .btn-danger:hover {
          background: rgba(239, 68, 68, 0.25);
        }
      `}</style>
    </button>
  );
};

export default Button;
