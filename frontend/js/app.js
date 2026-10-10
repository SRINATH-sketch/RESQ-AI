/**
 * ResQAI – Frontend Application Controller & Dispatch Engine
 * High-performance, modular ES6 architecture
 */

class ResQApp {
  constructor() {
    this.currentView = 'home';
    this.currentRole = 'patient';
    this.isAudioEnabled = true;
    this.audioCtx = null;

    // Active Mission State
    this.activeRequest = null;
    this.activeTripStatus = null; // 'SEARCHING', 'DRIVER_ASSIGNED', 'DRIVER_ON_THE_WAY', 'ARRIVED', 'PATIENT_PICKED_UP', 'GOING_TO_HOSPITAL', 'COMPLETED'
    this.mapInstance = null;
    this.mapMarkers = {
      patient: null,
      ambulance: null,
      hospital: null
    };
    this.mapRouteLine = null;
    this.etaInterval = null;
    this.autoDriveInterval = null;

    // Coordinates (Default: Metro Center, Chennai / Bangalore coordinates)
    this.userCoords = { lat: 13.0827, lng: 80.2707, address: 'Central Metro Corridor, Zone 01' };
    this.hospitalCoords = { lat: 13.0900, lng: 80.2800, name: 'Apollo Trauma & Emergency Center' };
    this.ambulanceCoords = { lat: 13.0650, lng: 80.2550 };

    // Simulated Fleet Data
    this.ambulances = [
      {
        id: 'amb-101',
        driverName: 'Vikramaditya Rao',
        phone: '+91 98765 43210',
        plate: 'TN-09-EM-108',
        type: 'Advanced Life Support (ALS)',
        rating: 4.95,
        trips: 182,
        verified: true,
        isOnline: true,
        lat: 13.0720,
        lng: 80.2610,
        equipment: ['Defibrillator', 'Ventilator', 'Oxygen Cylinder', 'Patient Monitor', 'Trauma Stretcher'],
      },
      {
        id: 'amb-102',
        driverName: 'Suresh Kumar',
        phone: '+91 98451 22334',
        plate: 'TN-07-EM-9921',
        type: 'Intensive Care Unit (ICU)',
        rating: 4.88,
        trips: 145,
        verified: true,
        isOnline: true,
        lat: 13.0680,
        lng: 80.2520,
        equipment: ['Defibrillator', 'Ventilator', 'Oxygen Cylinder', 'Suction Unit'],
      },
      {
        id: 'amb-103',
        driverName: 'Karthik Selvan',
        phone: '+91 97890 11223',
        plate: 'TN-01-EM-4455',
        type: 'Basic Life Support (BLS)',
        rating: 4.79,
        trips: 98,
        verified: false,
        isOnline: true,
        lat: 13.0950,
        lng: 80.2750,
        equipment: ['Oxygen Cylinder', 'Trauma Stretcher', 'First Aid'],
      }
    ];

    // Connected Hospitals List
    this.hospitals = [
      {
        id: 'h1',
        name: 'Apollo Trauma & Super Specialty Hospital',
        lat: 13.0900,
        lng: 80.2800,
        distance: '1.8 km',
        icuBeds: 6,
        phone: '+91 44 2829 0200',
        specialties: ['Level-1 Trauma', 'Cardiac Cath Lab', 'Neuro ICU'],
        ready: true
      },
      {
        id: 'h2',
        name: 'City General Emergency Care Hospital',
        lat: 13.0750,
        lng: 80.2880,
        distance: '2.6 km',
        icuBeds: 4,
        phone: '+91 44 2530 5000',
        specialties: ['Comprehensive ER', 'Burn Unit', 'Orthopedic Surgery'],
        ready: true
      },
      {
        id: 'h3',
        name: 'Metro Heart & Stroke Institute',
        lat: 13.0550,
        lng: 80.2450,
        distance: '3.4 km',
        icuBeds: 8,
        phone: '+91 44 2656 7000',
        specialties: ['24/7 Primary Angioplasty', 'Stroke Rapid Response'],
        ready: true
      }
    ];

    // Driver Portal State
    this.driverState = {
      isOnline: false,
      incomingRequests: [],
      currentActiveTrip: null
    };

    this.init();
  }

  init() {
    this.bindEvents();
    this.detectCurrentLocation();
    this.renderHospitals();
    this.renderAdminTables();
    console.log('⚡ ResQAI Dispatch System initialized.');
  }

  bindEvents() {
    // Escape key closes modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeEmergencyModal();
    });
  }

  /* Audio Synthesizer (Web Audio API) for Medical Chimes */
  playAudioChime(type = 'beep') {
    if (!this.isAudioEnabled) return;
    try {
      if (!this.audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) this.audioCtx = new AudioContextClass();
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      if (type === 'sos') {
        // High urgency 2-tone medical chime
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.setValueAtTime(1174, now + 0.15);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);
        osc.start(now);
        osc.stop(now + 0.45);
      } else if (type === 'accept') {
        // Driver accepted trip chime
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.12);
        osc.frequency.setValueAtTime(783.99, now + 0.24);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
      } else {
        // Standard feedback
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      }
    } catch (e) {
      console.warn('Audio feedback error', e);
    }
  }

  toggleSound() {
    this.isAudioEnabled = !this.isAudioEnabled;
    const soundIcon = document.getElementById('soundIcon');
    if (soundIcon) soundIcon.textContent = this.isAudioEnabled ? '🔊' : '🔇';
    this.showToast(this.isAudioEnabled ? 'Dispatch audio enabled' : 'Dispatch audio muted');
  }

  /* Navigation Controller */
  navigateTo(viewId) {
    this.currentView = viewId;
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));

    const targetView = document.getElementById(viewId + 'View');
    if (targetView) targetView.classList.add('active');

    // Update nav active tab
    const navBtn = document.getElementById('nav' + viewId.charAt(0).toUpperCase() + viewId.slice(1) + 'Btn');
    if (navBtn) navBtn.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Initialize or resize map if navigating to tracking
    if (viewId === 'tracking') {
      setTimeout(() => this.setupTrackingMap(), 150);
    }
  }

  handleRoleChange(role) {
    this.currentRole = role;
    if (role === 'driver') {
      this.navigateTo('driver');
      this.showToast('Switched to Driver Mode. Toggle online status to receive requests.');
    } else if (role === 'admin') {
      this.navigateTo('admin');
      this.showToast('Switched to Admin Dispatch Console.');
    } else {
      this.navigateTo('home');
      this.showToast('Switched to Patient Mode.');
    }
  }

  /* Geolocation Detection */
  detectCurrentLocation() {
    const addrEl = document.getElementById('detectedAddressText');
    if (addrEl) addrEl.textContent = 'Detecting current GPS coordinates...';

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.userCoords = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            address: `GPS Pin: ${pos.coords.latitude.toFixed(4)}°N, ${pos.coords.longitude.toFixed(4)}°E (Accuracy: ${Math.round(pos.coords.accuracy)}m)`
          };
          if (addrEl) addrEl.textContent = this.userCoords.address;
          this.showToast('📍 High-precision GPS location detected!');
        },
        (err) => {
          console.warn('Geolocation fallback used:', err.message);
          this.userCoords = { lat: 13.0827, lng: 80.2707, address: 'Central Emergency Corridor, Metro Zone 1 (Fallback)' };
          if (addrEl) addrEl.textContent = this.userCoords.address;
        },
        { enableHighAccuracy: true, timeout: 8000 }
      );
    } else {
      if (addrEl) addrEl.textContent = this.userCoords.address;
    }
  }

  toggleManualLocationInput() {
    const input = document.getElementById('manualLocationInput');
    if (input) {
      input.classList.toggle('hidden');
      if (!input.classList.contains('hidden')) {
        input.focus();
      }
    }
  }

  /* Emergency Modal & Wizard */
  openEmergencyModal() {
    this.playAudioChime('sos');
    const modal = document.getElementById('emergencyModalBackdrop');
    if (modal) modal.classList.add('active');

    // Reset to step 1
    this.showWizardStep(1);
  }

  closeEmergencyModal() {
    const modal = document.getElementById('emergencyModalBackdrop');
    if (modal) modal.classList.remove('active');
  }

  showWizardStep(stepNum) {
    document.querySelectorAll('.wizard-step-pane').forEach(p => p.classList.remove('active'));
    const pane = document.getElementById(`wizardStep${stepNum}`);
    if (pane) pane.classList.add('active');

    for (let i = 1; i <= 3; i++) {
      const ind = document.getElementById(`wizStep${i}Indicator`);
      if (ind) {
        if (i === stepNum) ind.className = 'w-step active';
        else if (i < stepNum) ind.className = 'w-step completed';
        else ind.className = 'w-step';
      }
    }
  }

  /* Instant 1-Tap SOS Button */
  triggerQuickSOS() {
    this.playAudioChime('sos');
    this.openEmergencyModal();
    const nameInput = document.getElementById('patientNameInput');
    const ageInput = document.getElementById('patientAgeInput');
    const phoneInput = document.getElementById('patientPhoneInput');
    const typeSelect = document.getElementById('emergencyTypeSelect');

    if (nameInput && !nameInput.value) nameInput.value = 'Emergency Patient (Quick SOS)';
    if (ageInput && !ageInput.value) ageInput.value = '45';
    if (phoneInput && !phoneInput.value) phoneInput.value = '+91 99999 88888';
    if (typeSelect) typeSelect.value = 'cardiac';

    this.showToast('🚨 Quick SOS activated! Review & confirm dispatch.');
  }

  onEmergencyTypeChange(type) {
    const note = document.getElementById('additionalNotesInput');
    if (note && !note.value) {
      if (type === 'cardiac') note.placeholder = 'Requires Defibrillator + ALS Paramedic';
      if (type === 'trauma') note.placeholder = 'Trauma stretcher & cervical collar required';
      if (type === 'respiratory') note.placeholder = 'Oxygen delivery & portable ventilator required';
    }
  }

  /* Form Submission & AI Matching Pipeline */
  handleEmergencyFormSubmit(e) {
    e.preventDefault();
    this.playAudioChime('beep');

    const name = document.getElementById('patientNameInput')?.value || 'Emergency Patient';
    const age = document.getElementById('patientAgeInput')?.value || '35';
    const phone = document.getElementById('patientPhoneInput')?.value || '+91 98765 00000';
    const emergencyType = document.getElementById('emergencyTypeSelect')?.value || 'general';
    const hospitalId = document.getElementById('hospitalSelect')?.value || 'h1';
    const notes = document.getElementById('additionalNotesInput')?.value || '';

    const selectedHospital = this.hospitals.find(h => h.id === hospitalId) || this.hospitals[0];

    // Build Request Object
    this.activeRequest = {
      id: 'REQ-' + Math.floor(100000 + Math.random() * 900000),
      timestamp: new Date().toLocaleTimeString(),
      patient: { name, age, phone },
      emergencyType,
      hospital: selectedHospital,
      pickupLocation: this.userCoords,
      status: 'SEARCHING',
      notes
    };

    // Advance to Step 2: AI Matching
    this.showWizardStep(2);
    this.runAIMatchingEngine();
  }

  /* Explainable AI Matching Calculation */
  runAIMatchingEngine() {
    const candidateList = document.getElementById('matchedCandidatesList');
    if (candidateList) candidateList.innerHTML = '';

    // Calculate Explainable Matching Score for each ambulance
    const scoredAmbulances = this.ambulances.map(amb => {
      // 1. Distance Calculation (Haversine formula approximation)
      const distKm = this.calculateDistance(
        this.userCoords.lat, this.userCoords.lng,
        amb.lat, amb.lng
      );

      // Distance Score: 100 max, penalize 10 points per km
      const distanceScore = Math.max(10, Math.round(100 - (distKm * 12)));

      // 2. ETA Score: 100 max, assume 35 km/h urban speed + 1 min prep
      const etaMinutes = Math.max(2, Math.round((distKm / 35) * 60 + 1));
      const etaScore = Math.max(10, Math.round(100 - (etaMinutes * 8)));

      // 3. Ambulance Suitability & Type Score
      let typeScore = 70;
      if (this.activeRequest.emergencyType === 'cardiac' || this.activeRequest.emergencyType === 'trauma') {
        if (amb.type.includes('ALS') || amb.type.includes('ICU')) typeScore = 100;
        else typeScore = 40;
      } else {
        typeScore = 90;
      }

      // 4. Equipment Compatibility Score
      let equipmentScore = 60;
      const requiredEquip = {
        cardiac: ['Defibrillator', 'Oxygen Cylinder'],
        trauma: ['Trauma Stretcher', 'Oxygen Cylinder'],
        respiratory: ['Ventilator', 'Oxygen Cylinder'],
        general: ['Oxygen Cylinder', 'First Aid']
      }[this.activeRequest.emergencyType] || ['First Aid'];

      const matches = requiredEquip.filter(eq => amb.equipment.includes(eq));
      equipmentScore = Math.round((matches.length / requiredEquip.length) * 100);

      // 5. Total Explainable Matching Score (Weighted Average)
      const totalScore = Math.round(
        (distanceScore * 0.35) +
        (etaScore * 0.25) +
        (typeScore * 0.20) +
        (equipmentScore * 0.20)
      );

      return {
        ...amb,
        distKm: distKm.toFixed(1),
        etaMinutes,
        distanceScore,
        etaScore,
        typeScore,
        equipmentScore,
        totalScore
      };
    });

    // Rank descending
    scoredAmbulances.sort((a, b) => b.totalScore - a.totalScore);
    const topMatch = scoredAmbulances[0];

    // Render Candidate Cards with Explainable Scores
    setTimeout(() => {
      if (candidateList) {
        candidateList.innerHTML = scoredAmbulances.map((c, idx) => `
          <div class="ai-candidate-card ${idx === 0 ? 'top-rank' : ''}">
            <div class="ai-candidate-header">
              <div>
                <strong>${c.driverName} • ${c.plate}</strong>
                <div style="font-size:0.8rem; color:var(--teal-primary);">${c.type}</div>
              </div>
              <div class="ai-score-pill">
                AI Score: ${c.totalScore}%
              </div>
            </div>
            <div style="font-size:0.82rem; color:var(--text-main);">
              📍 <strong>${c.distKm} km away</strong> • Est. Arrival: <strong>~${c.etaMinutes} mins</strong>
            </div>
            <div class="score-breakdown-row">
              <div>Distance: <strong>${c.distanceScore}/100</strong></div>
              <div>ETA: <strong>${c.etaScore}/100</strong></div>
              <div>Vehicle Fit: <strong>${c.typeScore}/100</strong></div>
              <div>Equipment: <strong>${c.equipmentScore}/100</strong></div>
            </div>
          </div>
        `).join('');
      }

      // Simulate Driver Acceptance after 2 seconds
      setTimeout(() => {
        this.dispatchAmbulanceToDriver(topMatch);
      }, 2200);

    }, 1200);
  }

  /* Driver Dispatch & Acceptance */
  dispatchAmbulanceToDriver(driver) {
    this.playAudioChime('accept');
    this.activeRequest.assignedDriver = driver;
    this.activeRequest.status = 'DRIVER_ON_THE_WAY';
    this.activeTripStatus = 'DRIVER_ON_THE_WAY';

    // Update Step 3
    const quickCard = document.getElementById('quickDispatchedDetails');
    if (quickCard) {
      quickCard.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <h4 style="font-size:1.1rem; color:#fff;">${driver.driverName}</h4>
            <p style="color:var(--teal-primary); font-size:0.85rem;">${driver.type} • Plate: ${driver.plate}</p>
            <p style="color:#fbbf24; font-size:0.8rem;">⭐ ${driver.rating} Rating (${driver.trips} trips)</p>
          </div>
          <div style="text-align:right;">
            <span style="font-size:0.8rem; color:var(--text-dim);">ESTIMATED ARRIVAL</span>
            <div style="font-size:1.6rem; font-weight:800; color:var(--emergency-red); font-family:var(--font-mono);">${driver.etaMinutes} MINS</div>
          </div>
        </div>
      `;
    }

    this.showWizardStep(3);
    this.showToast(`🚑 Driver ${driver.driverName} accepted your dispatch!`);
  }

  /* View Active Live Tracking */
  viewActiveLiveTracking() {
    this.closeEmergencyModal();
    this.navigateTo('tracking');
    this.updateTrackingUI();
  }

  /* Leaflet Map Setup & Telemetry */
  setupTrackingMap() {
    if (!window.L) {
      console.warn('Leaflet not loaded yet.');
      return;
    }

    const container = document.getElementById('liveTrackingMap');
    if (!container) return;

    if (!this.mapInstance) {
      this.mapInstance = L.map('liveTrackingMap', {
        zoomControl: true,
        attributionControl: false
      }).setView([this.userCoords.lat, this.userCoords.lng], 14);

      // Dark Matter Map Tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
      }).addTo(this.mapInstance);
    } else {
      this.mapInstance.invalidateSize();
    }

    this.renderMapMarkers();
  }

  renderMapMarkers() {
    if (!this.mapInstance || !window.L) return;

    // Clear old markers
    if (this.mapMarkers.patient) this.mapInstance.removeLayer(this.mapMarkers.patient);
    if (this.mapMarkers.ambulance) this.mapInstance.removeLayer(this.mapMarkers.ambulance);
    if (this.mapMarkers.hospital) this.mapInstance.removeLayer(this.mapMarkers.hospital);
    if (this.mapRouteLine) this.mapInstance.removeLayer(this.mapRouteLine);

    // Custom Icon Creators
    const patientIcon = L.divIcon({
      className: 'custom-leaflet-icon',
      html: `<div style="background:#ef4444; width:22px; height:22px; border-radius:50%; border:3px solid #fff; box-shadow:0 0 15px #ef4444; display:flex; align-items:center; justify-content:center; color:#fff; font-size:11px;">📍</div>`,
      iconSize: [22, 22],
      iconAnchor: [11, 11]
    });

    const ambulanceIcon = L.divIcon({
      className: 'custom-leaflet-icon',
      html: `<div style="background:#06b6d4; width:32px; height:32px; border-radius:50%; border:3px solid #fff; box-shadow:0 0 20px #06b6d4; display:flex; align-items:center; justify-content:center; color:#fff; font-size:16px;">🚑</div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    const hospitalIcon = L.divIcon({
      className: 'custom-leaflet-icon',
      html: `<div style="background:#10b981; width:28px; height:28px; border-radius:50%; border:3px solid #fff; box-shadow:0 0 15px #10b981; display:flex; align-items:center; justify-content:center; color:#fff; font-size:14px;">🏥</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });

    // Add Patient Marker
    this.mapMarkers.patient = L.marker([this.userCoords.lat, this.userCoords.lng], { icon: patientIcon })
      .addTo(this.mapInstance)
      .bindPopup(`<b>Patient Pickup</b><br>${this.userCoords.address}`);

    // Add Ambulance Marker
    const ambLat = this.activeRequest?.assignedDriver?.lat || this.ambulanceCoords.lat;
    const ambLng = this.activeRequest?.assignedDriver?.lng || this.ambulanceCoords.lng;
    this.mapMarkers.ambulance = L.marker([ambLat, ambLng], { icon: ambulanceIcon })
      .addTo(this.mapInstance)
      .bindPopup(`<b>Assigned Ambulance</b><br>${this.activeRequest?.assignedDriver?.plate || 'TN-09-EM-108'}`);

    // Add Hospital Marker
    this.mapMarkers.hospital = L.marker([this.hospitalCoords.lat, this.hospitalCoords.lng], { icon: hospitalIcon })
      .addTo(this.mapInstance)
      .bindPopup(`<b>Destination Hospital</b><br>${this.hospitalCoords.name}`);

    // Draw Route Polylines
    const routeCoordinates = [
      [ambLat, ambLng],
      [this.userCoords.lat, this.userCoords.lng],
      [this.hospitalCoords.lat, this.hospitalCoords.lng]
    ];

    this.mapRouteLine = L.polyline(routeCoordinates, {
      color: '#ef4444',
      weight: 4,
      opacity: 0.8,
      dashArray: '6, 8',
      lineCap: 'round'
    }).addTo(this.mapInstance);

    this.mapInstance.fitBounds(this.mapRouteLine.getBounds(), { padding: [50, 50] });

    // Start Real-Time Countdown
    this.startEtaCountdown();
  }

  startEtaCountdown() {
    if (this.etaInterval) clearInterval(this.etaInterval);
    let secondsLeft = 225; // 3 mins 45 secs

    const etaDisplay = document.getElementById('trackingEtaDisplay');
    const distDisplay = document.getElementById('trackingDistDisplay');

    this.etaInterval = setInterval(() => {
      if (secondsLeft <= 0) {
        clearInterval(this.etaInterval);
        if (etaDisplay) etaDisplay.textContent = 'ARRIVED';
        if (distDisplay) distDisplay.textContent = 'Ambulance is at pickup location';
        this.updateTripStep('ARRIVED');
        return;
      }

      secondsLeft--;
      const mins = Math.floor(secondsLeft / 60);
      const secs = secondsLeft % 60;
      if (etaDisplay) {
        etaDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }
      if (distDisplay) {
        const remainingKm = ((secondsLeft / 225) * 1.4).toFixed(2);
        distDisplay.textContent = `${remainingKm} km away • Active Siren Escort`;
      }
    }, 1000);
  }

  /* Trip Stepper Controller */
  updateTripStep(status) {
    this.activeTripStatus = status;
    const statusText = document.getElementById('trackingStatusText');
    if (statusText) statusText.textContent = status.replace(/_/g, ' ');

    const steps = [
      'stepSearching',
      'stepAssigned',
      'stepOnTheWay',
      'stepArrived',
      'stepPickedUp',
      'stepGoingHospital',
      'stepCompleted'
    ];

    const statusMap = {
      'SEARCHING': 0,
      'DRIVER_ASSIGNED': 1,
      'DRIVER_ON_THE_WAY': 2,
      'ARRIVED': 3,
      'PATIENT_PICKED_UP': 4,
      'GOING_TO_HOSPITAL': 5,
      'COMPLETED': 6
    };

    const currentIdx = statusMap[status] ?? 2;

    steps.forEach((stepId, idx) => {
      const el = document.getElementById(stepId);
      if (!el) return;
      if (idx < currentIdx) {
        el.className = 'stepper-step completed';
        el.querySelector('.step-circle').textContent = '✓';
      } else if (idx === currentIdx) {
        el.className = 'stepper-step in-progress';
        el.querySelector('.step-circle').textContent = '●';
      } else {
        el.className = 'stepper-step';
        el.querySelector('.step-circle').textContent = '○';
      }
    });

    this.showToast(`Mission Status Update: ${status.replace(/_/g, ' ')}`);
  }

  updateTrackingUI() {
    if (!this.activeRequest) return;
    const driver = this.activeRequest.assignedDriver || this.ambulances[0];
    const nameEl = document.getElementById('assignedDriverName');
    const plateEl = document.getElementById('assignedVehiclePlate');

    if (nameEl) nameEl.textContent = driver.driverName;
    if (plateEl) plateEl.textContent = `Ambulance #${driver.plate} (${driver.type})`;
  }

  cancelActiveRequest() {
    if (confirm('Are you sure you want to cancel this emergency request?')) {
      if (this.etaInterval) clearInterval(this.etaInterval);
      if (this.autoDriveInterval) clearInterval(this.autoDriveInterval);
      this.activeRequest = null;
      this.activeTripStatus = null;
      this.showToast('Emergency request cancelled.', 'toast-emergency');
      this.navigateTo('home');
    }
  }

  /* Driver Dashboard Interactions */
  toggleDriverOnline() {
    this.driverState.isOnline = !this.driverState.isOnline;
    const badge = document.getElementById('driverStatusLabel');
    const btn = document.getElementById('driverToggleOnlineBtn');

    if (this.driverState.isOnline) {
      if (badge) {
        badge.className = 'status-badge status-online';
        badge.textContent = 'ONLINE (BROADCASTING GPS)';
      }
      if (btn) btn.textContent = 'Go Offline';
      this.showToast('You are now ONLINE. Ready for emergency calls.');
    } else {
      if (badge) {
        badge.className = 'status-badge status-offline';
        badge.textContent = 'OFFLINE';
      }
      if (btn) btn.textContent = 'Go Online';
      this.showToast('You are now OFFLINE.');
    }
  }

  simulateIncomingRequest() {
    this.playAudioChime('sos');
    const container = document.getElementById('incomingRequestsList');
    const badge = document.getElementById('incomingCountBadge');
    if (badge) badge.textContent = '1 Emergency Call';

    if (container) {
      container.innerHTML = `
        <div class="incoming-item-card">
          <div class="incoming-header">
            <div>
              <span class="badge-tag" style="background:#ef4444; color:#fff; font-size:0.75rem; padding:2px 8px; border-radius:4px;">
                URGENT: CARDIAC EMERGENCY
              </span>
              <h4 style="margin-top:6px;">Patient: Sundaram Ramesh (Age 58)</h4>
              <p style="font-size:0.82rem; color:var(--text-muted);">Pickup: Anna Salai, Metro Junction (1.3 km away)</p>
            </div>
            <div class="incoming-countdown">28s left</div>
          </div>
          <p style="font-size:0.8rem; color:#fca5a5;">Requires: ALS / Defibrillator onboard</p>
          <div class="incoming-actions">
            <button class="btn-accept-req" onclick="window.resqApp.driverAcceptTrip()">
              ✓ ACCEPT DISPATCH
            </button>
            <button class="btn-reject-req" onclick="window.resqApp.driverRejectTrip()">
              ✕ REJECT
            </button>
          </div>
        </div>
      `;
    }
    this.showToast('🚨 Incoming Emergency Request within 1.5 km!');
  }

  driverAcceptTrip() {
    this.playAudioChime('accept');
    const container = document.getElementById('incomingRequestsList');
    if (container) {
      container.innerHTML = `<div class="empty-state"><p class="text-muted">No pending requests.</p></div>`;
    }

    const tag = document.getElementById('activeTripStatusTag');
    if (tag) {
      tag.className = 'badge-tag';
      tag.style.background = 'var(--emergency-red)';
      tag.style.color = '#fff';
      tag.textContent = 'MISSION IN PROGRESS';
    }

    const content = document.getElementById('activeTripContent');
    if (content) {
      content.innerHTML = `
        <div style="background:rgba(255,255,255,0.03); padding:16px; border-radius:8px;">
          <h4>Active Mission: Sundaram Ramesh</h4>
          <p style="font-size:0.85rem; color:var(--teal-primary);">Destination: Apollo Trauma Hospital</p>
          <div style="margin-top:14px; display:flex; flex-direction:column; gap:8px;">
            <button class="action-btn-primary" onclick="window.resqApp.updateTripStep('ARRIVED')">
              📍 Mark "Arrived at Scene"
            </button>
            <button class="action-btn-secondary" onclick="window.resqApp.updateTripStep('PATIENT_PICKED_UP')">
              🚑 Mark "Patient Picked Up"
            </button>
            <button class="action-btn-secondary" onclick="window.resqApp.updateTripStep('GOING_TO_HOSPITAL')">
              🏥 Mark "Going To Hospital"
            </button>
            <button class="btn-accept-req" onclick="window.resqApp.updateTripStep('COMPLETED'); alert('Trip successfully completed and patient handed over!');">
              ✓ Complete Mission & Close
            </button>
          </div>
        </div>
      `;
    }

    this.showToast('✓ Trip accepted! Telemetry broadcasting.');
  }

  driverRejectTrip() {
    const container = document.getElementById('incomingRequestsList');
    if (container) {
      container.innerHTML = `<div class="empty-state"><p class="text-muted">Request passed to next available ambulance.</p></div>`;
    }
    this.showToast('Request rejected. AI dispatch will reroute.');
  }

  stepDriverGPS() {
    if (this.mapMarkers.ambulance) {
      const currentLatLng = this.mapMarkers.ambulance.getLatLng();
      const targetLat = this.userCoords.lat;
      const targetLng = this.userCoords.lng;

      // Move 20% closer
      const newLat = currentLatLng.lat + (targetLat - currentLatLng.lat) * 0.25;
      const newLng = currentLatLng.lng + (targetLng - currentLatLng.lng) * 0.25;

      this.mapMarkers.ambulance.setLatLng([newLat, newLng]);
      this.showToast('📍 Driver GPS coordinates updated.');
    }
  }

  autoDriveSimulation() {
    if (this.autoDriveInterval) {
      clearInterval(this.autoDriveInterval);
      this.autoDriveInterval = null;
      this.showToast('Auto-drive simulation stopped.');
      return;
    }

    this.showToast('▶ Auto-drive simulation started.');
    this.autoDriveInterval = setInterval(() => {
      this.stepDriverGPS();
    }, 1500);
  }

  /* Hospitals List Rendering */
  renderHospitals() {
    const container = document.getElementById('hospitalsGridContainer');
    if (!container) return;

    container.innerHTML = this.hospitals.map(h => `
      <div class="hospital-card">
        <div class="hospital-header">
          <div>
            <h3>${h.name}</h3>
            <span style="font-size:0.8rem; color:var(--teal-primary);">📍 ${h.distance} from your location</span>
          </div>
          <span class="hosp-badge">${h.icuBeds} ICU Beds</span>
        </div>
        <div style="font-size:0.82rem; color:var(--text-muted);">
          Specialties: ${h.specialties.join(', ')}
        </div>
        <div style="margin-top:auto; display:flex; justify-content:space-between; align-items:center;">
          <a href="tel:${h.phone}" style="color:var(--color-success); text-decoration:none; font-size:0.85rem; font-weight:700;">
            📞 ${h.phone}
          </a>
          <button class="action-btn-secondary" style="font-size:0.78rem; padding:6px 12px;" onclick="window.resqApp.openEmergencyModal()">
            Dispatch Here
          </button>
        </div>
      </div>
    `).join('');
  }

  /* Admin Dashboard Rendering */
  renderAdminTables() {
    const reqBody = document.getElementById('adminRequestsTableBody');
    if (reqBody) {
      reqBody.innerHTML = `
        <tr>
          <td><strong style="color:var(--teal-primary);">#REQ-91024</strong></td>
          <td>Ramesh Kumar (54)</td>
          <td><span style="color:#ef4444; font-weight:700;">Cardiac (ALS)</span></td>
          <td>TN-09-EM-108</td>
          <td><span class="status-badge status-online">ON THE WAY</span></td>
          <td><button class="link-btn" onclick="window.resqApp.viewActiveLiveTracking()">View Map</button></td>
        </tr>
        <tr>
          <td><strong style="color:var(--teal-primary);">#REQ-91021</strong></td>
          <td>Ananya Sharma (29)</td>
          <td>Maternity Care</td>
          <td>TN-07-EM-9921</td>
          <td><span class="status-badge" style="background:#f59e0b20; color:#fbbf24;">ARRIVED</span></td>
          <td><button class="link-btn" onclick="alert('Viewing telemetry')">View Map</button></td>
        </tr>
      `;
    }

    const driverBody = document.getElementById('adminDriversTableBody');
    if (driverBody) {
      driverBody.innerHTML = this.ambulances.map(a => `
        <tr>
          <td><strong>${a.driverName}</strong></td>
          <td>${a.plate}</td>
          <td>${a.type}</td>
          <td>⭐ ${a.rating}</td>
          <td>
            <span class="status-badge ${a.verified ? 'status-online' : 'status-offline'}">
              ${a.verified ? 'VERIFIED' : 'PENDING'}
            </span>
          </td>
          <td>
            <button class="link-btn" onclick="window.resqApp.toggleDriverVerify('${a.id}')">
              ${a.verified ? 'Revoke' : 'Verify'}
            </button>
          </td>
        </tr>
      `).join('');
    }
  }

  toggleDriverVerify(ambId) {
    const amb = this.ambulances.find(a => a.id === ambId);
    if (amb) {
      amb.verified = !amb.verified;
      this.renderAdminTables();
      this.showToast(`Driver ${amb.driverName} status updated to ${amb.verified ? 'VERIFIED' : 'PENDING'}`);
    }
  }

  refreshAdminData() {
    this.renderAdminTables();
    this.showToast('Admin operational data refreshed.');
  }

  /* Distance Helper */
  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  /* Toast Notification */
  showToast(message, extraClass = '') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${extraClass}`;
    toast.innerHTML = `<span>ℹ️</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
}

// Instantiate Global App
window.addEventListener('DOMContentLoaded', () => {
  window.resqApp = new ResQApp();
});
