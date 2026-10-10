// ResQAI API Service Layer
// Prepared for seamless integration with FastAPI backend (http://localhost:8000/api)
// Currently provides simulated async responses with realistic network latency

import {
  MOCK_USER,
  MOCK_DRIVERS,
  MOCK_AMBULANCES,
  MOCK_HOSPITALS
} from '../data/mockData';

const SIMULATE_LATENCY = 400; // ms
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class ApiService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_API_BASE_URL || '/api';
    this.isMockMode = true; // Toggle to false when connecting to live FastAPI
  }

  // POST /api/auth/login
  async login(credentials) {
    if (!this.isMockMode) {
      const res = await fetch(`${this.baseUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      return res.json();
    }

    await sleep(SIMULATE_LATENCY);
    const { email, role } = credentials;

    if (role === 'driver') {
      const driver = MOCK_DRIVERS[0];
      return {
        success: true,
        user: {
          id: driver.id,
          name: driver.name,
          role: 'driver',
          phone: driver.phone,
          ambulanceId: driver.assignedAmbulanceId,
          avatar: driver.avatar
        },
        token: 'mock-jwt-driver-token-2026'
      };
    }

    return {
      success: true,
      user: {
        id: MOCK_USER.id,
        name: MOCK_USER.name,
        role: 'patient',
        phone: MOCK_USER.phone,
        email: email || MOCK_USER.email
      },
      token: 'mock-jwt-patient-token-2026'
    };
  }

  // GET /api/ambulances/nearby
  async getNearbyAmbulances(lat, lng, emergencyType = 'Heart Emergency') {
    if (!this.isMockMode) {
      const res = await fetch(`${this.baseUrl}/ambulances/nearby?lat=${lat}&lng=${lng}&type=${encodeURIComponent(emergencyType)}`);
      return res.json();
    }

    await sleep(SIMULATE_LATENCY + 300);
    // Score based on emergency type
    return {
      success: true,
      count: MOCK_AMBULANCES.length,
      ambulances: MOCK_AMBULANCES.map((amb) => {
        let matchScore = amb.aiMatchScore;
        let recommended = amb.recommended;
        if (emergencyType === 'Injury' && amb.typeCode === 'BLS') {
          matchScore = 95;
          recommended = true;
        }
        return {
          ...amb,
          aiMatchScore: matchScore,
          recommended: recommended
        };
      })
    };
  }

  // POST /api/ambulance/request
  async createAmbulanceRequest(requestPayload) {
    if (!this.isMockMode) {
      const res = await fetch(`${this.baseUrl}/ambulance/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestPayload)
      });
      return res.json();
    }

    await sleep(SIMULATE_LATENCY);
    const requestId = `REQ-${Math.floor(1000 + Math.random() * 9000)}`;

    const newRequest = {
      id: requestId,
      createdAt: new Date().toISOString(),
      patientName: requestPayload.patientName || MOCK_USER.name,
      patientAge: requestPayload.patientAge || 45,
      patientGender: requestPayload.patientGender || 'Male',
      contactNumber: requestPayload.contactNumber || MOCK_USER.phone,
      emergencyType: requestPayload.emergencyType || 'Heart Emergency',
      additionalNotes: requestPayload.additionalNotes || '',
      pickupLocation: requestPayload.pickupLocation || MOCK_USER.currentLocation,
      destinationHospital: requestPayload.destinationHospital || MOCK_HOSPITALS[0],
      ambulance: requestPayload.ambulance || MOCK_AMBULANCES[0],
      driver: requestPayload.driver || MOCK_DRIVERS[0],
      status: 'REQUESTED'
    };

    return {
      success: true,
      request: newRequest
    };
  }

  // POST /api/ambulance/accept
  async acceptRequest(requestId, driverId) {
    if (!this.isMockMode) {
      const res = await fetch(`${this.baseUrl}/ambulance/accept`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requestId, driverId })
      });
      return res.json();
    }

    await sleep(SIMULATE_LATENCY);
    return {
      success: true,
      message: 'Ambulance dispatch accepted by driver',
      status: 'DRIVER_ACCEPTED',
      driver: MOCK_DRIVERS.find((d) => d.id === driverId) || MOCK_DRIVERS[0]
    };
  }

  // GET /api/ambulance/status
  async getAmbulanceStatus(requestId) {
    if (!this.isMockMode) {
      const res = await fetch(`${this.baseUrl}/ambulance/status?requestId=${requestId}`);
      return res.json();
    }

    await sleep(200);
    return {
      success: true,
      requestId,
      status: 'ON_THE_WAY',
      etaMinutes: 5,
      distanceKm: 1.8
    };
  }

  // GET /api/ambulance/location
  async getAmbulanceLocation(ambulanceId) {
    if (!this.isMockMode) {
      const res = await fetch(`${this.baseUrl}/ambulance/location?ambulanceId=${ambulanceId}`);
      return res.json();
    }

    await sleep(150);
    return {
      success: true,
      ambulanceId,
      lat: 13.0865,
      lng: 80.2050,
      heading: 145,
      speedKmh: 48,
      timestamp: new Date().toISOString()
    };
  }

  // POST /api/trip/complete
  async completeTrip(requestId, tripData) {
    if (!this.isMockMode) {
      const res = await fetch(`${this.baseUrl}/trip/complete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requestId, ...tripData })
      });
      return res.json();
    }

    await sleep(SIMULATE_LATENCY);
    return {
      success: true,
      message: 'Trip safely completed and hospital handover recorded',
      status: 'COMPLETED',
      completedAt: new Date().toISOString()
    };
  }

  // GET /api/hospitals
  async getHospitals() {
    if (!this.isMockMode) {
      const res = await fetch(`${this.baseUrl}/hospitals`);
      return res.json();
    }
    await sleep(100);
    return {
      success: true,
      hospitals: MOCK_HOSPITALS
    };
  }
}

export const api = new ApiService();
export default api;
