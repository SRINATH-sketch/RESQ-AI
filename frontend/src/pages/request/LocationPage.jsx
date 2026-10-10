import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin,
  Navigation,
  Building2,
  Crosshair,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import { useRequest } from '../../context/RequestContext';
import { MockMap } from '../../components/map/MockMap';
import { MOCK_HOSPITALS, MOCK_USER } from '../../data/mockData';

export const LocationPage = () => {
  const navigate = useNavigate();
  const { draftLocation, setDraftLocation } = useRequest();

  const [pickupAddress, setPickupAddress] = useState(draftLocation.pickupAddress || MOCK_USER.currentLocation.address);
  const [landmark, setLandmark] = useState(draftLocation.landmark || MOCK_USER.currentLocation.landmark);
  const [selectedHospitalId, setSelectedHospitalId] = useState(draftLocation.destinationHospital?.id || MOCK_HOSPITALS[0].id);
  const [isLocating, setIsLocating] = useState(false);
  const [locationSuccess, setLocationSuccess] = useState(false);

  const selectedHospital = MOCK_HOSPITALS.find((h) => h.id === selectedHospitalId) || MOCK_HOSPITALS[0];

  const handleUseCurrentLocation = () => {
    setIsLocating(true);
    setTimeout(() => {
      setPickupAddress(MOCK_USER.currentLocation.address);
      setLandmark(MOCK_USER.currentLocation.landmark);
      setIsLocating(false);
      setLocationSuccess(true);
      setTimeout(() => setLocationSuccess(false), 3000);
    }, 600);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (!pickupAddress.trim()) {
      alert('Please specify a pickup location address.');
      return;
    }
    setDraftLocation({
      pickupAddress,
      landmark,
      lat: 13.0850,
      lng: 80.2100,
      destinationHospital: selectedHospital
    });
    navigate('/request/patient');
  };

  return (
    <div className="location-page-root container">
      <div className="page-breadcrumb">
        <span>Step 1 of 4 • Incident Location & Receiving Facility</span>
      </div>

      <div className="location-layout-grid">
        {/* Left Form Card */}
        <div className="location-form-panel glass-panel">
          <div className="panel-header">
            <div className="step-pill">STEP 1: LOCATION</div>
            <h1 className="panel-title">Enter or Share Patient Location</h1>
            <p className="panel-desc">
              Accurate landmark coordinates ensure the dispatched ambulance navigates with zero navigation lag.
            </p>
          </div>

          <form onSubmit={handleContinue} className="loc-inputs-form">
            {/* GPS Locate Button */}
            <div className="gps-action-box">
              <button
                type="button"
                className={`btn-use-gps ${isLocating ? 'locating' : ''} ${locationSuccess ? 'success' : ''}`}
                onClick={handleUseCurrentLocation}
                id="useCurrentLocationBtn"
              >
                <Crosshair size={18} className={isLocating ? 'animate-spin-slow' : ''} />
                <span>
                  {isLocating
                    ? 'Acquiring GPS Satellite Signal...'
                    : locationSuccess
                    ? 'Current Location Latched (±3m precision)'
                    : 'Use My Current Location'}
                </span>
              </button>
            </div>

            {/* Pickup Address Field */}
            <div className="form-group">
              <label className="form-label" htmlFor="pickupAddressInput">
                <span>Pickup Address</span>
                <span className="required">*</span>
              </label>
              <div className="input-with-prefix">
                <MapPin size={18} color="#ef4444" className="input-icon" />
                <input
                  id="pickupAddressInput"
                  type="text"
                  className="form-input with-icon"
                  placeholder="e.g. Plot 42, 2nd Ave, Anna Nagar West, Chennai"
                  value={pickupAddress}
                  onChange={(e) => setPickupAddress(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Landmark Field */}
            <div className="form-group">
              <label className="form-label" htmlFor="landmarkInput">
                <span>Landmark / Gate / Apartment Floor</span>
                <span className="opt-tag">(Crucial for driver)</span>
              </label>
              <input
                id="landmarkInput"
                type="text"
                className="form-input"
                placeholder="e.g. Near Roundtana Metro, Gate 2, Flat 3B"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
              />
            </div>

            {/* Destination Hospital Selector */}
            <div className="form-group">
              <label className="form-label" htmlFor="hospitalSelect">
                <span>Destination Hospital (Emergency Bay)</span>
                <span className="required">*</span>
              </label>
              <div className="input-with-prefix">
                <Building2 size={18} color="#06b6d4" className="input-icon" />
                <select
                  id="hospitalSelect"
                  className="form-select with-icon"
                  value={selectedHospitalId}
                  onChange={(e) => setSelectedHospitalId(e.target.value)}
                >
                  {MOCK_HOSPITALS.map((hosp) => (
                    <option key={hosp.id} value={hosp.id}>
                      {hosp.name} • {hosp.eta} ({hosp.icuBedsAvailable} ICU beds open)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Selected Hospital Preview Capsule */}
            <div className="hospital-preview-capsule">
              <div className="hosp-cap-top">
                <span className="cap-label">{selectedHospital.category}</span>
                <span className="cap-eta">
                  <Clock size={12} />
                  <span>{selectedHospital.eta} away</span>
                </span>
              </div>
              <h4 className="cap-name">{selectedHospital.name}</h4>
              <p className="cap-dept">{selectedHospital.emergencyDept}</p>
            </div>

            {/* Submit Action */}
            <div className="form-submit-row">
              <button
                type="submit"
                className="btn-continue"
                id="locationContinueBtn"
              >
                <span>CONTINUE TO PATIENT DETAILS</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Live Mock Map Preview */}
        <div className="location-map-panel">
          <div className="map-card-wrapper glass-panel">
            <div className="map-header-label">
              <div className="map-badge">
                <span className="pulse-pip"></span>
                <span>INTERACTIVE DISPATCH MAP</span>
              </div>
              <span className="map-hint">Showing pickup marker and destination hospital corridor</span>
            </div>

            {/* Interactive Mock Map */}
            <MockMap
              status="REQUESTED"
              pickup={{ address: pickupAddress }}
              hospital={selectedHospital}
              height="480px"
              showControls={true}
            />

            <div className="map-footer-notes">
              <div className="note-item">
                <span className="marker-dot red"></span>
                <span>Patient Pickup: <strong>{pickupAddress.split(',')[0]}</strong></span>
              </div>
              <div className="note-item">
                <span className="marker-dot cyan"></span>
                <span>Hospital ER: <strong>{selectedHospital.name.split(' ')[0]}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .location-page-root {
          padding: 30px 20px 60px;
        }

        .page-breadcrumb {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-cyan);
          letter-spacing: 0.04em;
          margin-bottom: 20px;
        }

        .location-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 32px;
          align-items: start;
        }

        .location-form-panel {
          padding: 32px 28px;
          border-radius: var(--radius-xl);
        }

        .panel-header {
          margin-bottom: 24px;
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

        .panel-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .panel-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .gps-action-box {
          margin-bottom: 20px;
        }

        .btn-use-gps {
          width: 100%;
          padding: 12px 18px;
          border-radius: var(--radius-md);
          background: rgba(6, 182, 212, 0.1);
          border: 1px dashed rgba(6, 182, 212, 0.4);
          color: #67e8f9;
          font-weight: 700;
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-use-gps:hover {
          background: rgba(6, 182, 212, 0.2);
          border-color: #06b6d4;
        }

        .btn-use-gps.success {
          background: rgba(16, 185, 129, 0.15);
          border-color: #10b981;
          color: #6ee7b7;
        }

        .input-with-prefix {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 14px;
          pointer-events: none;
        }

        .form-input.with-icon, .form-select.with-icon {
          padding-left: 42px;
        }

        .hospital-preview-capsule {
          background: rgba(6, 182, 212, 0.05);
          border: 1px solid rgba(6, 182, 212, 0.25);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          margin: 16px 0 24px;
        }

        .hosp-cap-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .cap-label {
          font-size: 0.68rem;
          color: var(--accent-cyan);
          font-weight: 700;
          text-transform: uppercase;
        }

        .cap-eta {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #38bdf8;
        }

        .cap-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
        }

        .cap-dept {
          font-size: 0.78rem;
          color: #fca5a5;
        }

        .btn-continue {
          width: 100%;
          padding: 16px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 4px 20px rgba(239, 68, 68, 0.45);
          transition: var(--transition);
        }

        .btn-continue:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 26px rgba(239, 68, 68, 0.7);
        }

        /* Map Panel */
        .map-card-wrapper {
          padding: 20px;
          border-radius: var(--radius-xl);
        }

        .map-header-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .map-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.12);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .pulse-pip {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #06b6d4;
          box-shadow: 0 0 8px #06b6d4;
          animation: beacon-pulse 1.3s infinite;
        }

        .map-hint {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .map-footer-notes {
          display: flex;
          gap: 20px;
          margin-top: 14px;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .note-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .marker-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .marker-dot.red { background: #ef4444; }
        .marker-dot.cyan { background: #06b6d4; }

        @media (max-width: 992px) {
          .location-layout-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default LocationPage;
