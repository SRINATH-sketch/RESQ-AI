import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { RequestProvider } from './context/RequestContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserDashboard from './pages/UserDashboard';

// Patient Request Flow
import LocationPage from './pages/request/LocationPage';
import PatientDetailsPage from './pages/request/PatientDetailsPage';
import AmbulanceMatchingPage from './pages/request/AmbulanceMatchingPage';
import RequestSentPage from './pages/request/RequestSentPage';
import DriverAcceptedPage from './pages/request/DriverAcceptedPage';
import LiveTrackingPage from './pages/request/LiveTrackingPage';
import AmbulanceArrivedPage from './pages/request/AmbulanceArrivedPage';
import HospitalNavigationPage from './pages/request/HospitalNavigationPage';
import TripCompletedPage from './pages/request/TripCompletedPage';
import RequestClosedPage from './pages/request/RequestClosedPage';

// Driver Flow
import DriverLogin from './pages/driver/DriverLogin';
import DriverDashboard from './pages/driver/DriverDashboard';
import DriverIncomingRequest from './pages/driver/DriverIncomingRequest';
import DriverActiveTrip from './pages/driver/DriverActiveTrip';

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RequestProvider>
          <div className="resq-app-container">
            <Navbar />
            <main className="resq-main-content">
              <Routes>
                {/* Landing & Citizen Access */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<UserDashboard />} />

                {/* Patient Ambulance Booking Workflow */}
                <Route path="/request/location" element={<LocationPage />} />
                <Route path="/request/patient" element={<PatientDetailsPage />} />
                <Route path="/request/matching" element={<AmbulanceMatchingPage />} />
                <Route path="/request/sent" element={<RequestSentPage />} />
                <Route path="/request/accepted" element={<DriverAcceptedPage />} />
                <Route path="/request/tracking" element={<LiveTrackingPage />} />
                <Route path="/request/arrived" element={<AmbulanceArrivedPage />} />
                <Route path="/request/hospital" element={<HospitalNavigationPage />} />
                <Route path="/request/completed" element={<TripCompletedPage />} />
                <Route path="/request/closed" element={<RequestClosedPage />} />

                {/* Driver Portal Workflow */}
                <Route path="/driver/login" element={<DriverLogin />} />
                <Route path="/driver/dashboard" element={<DriverDashboard />} />
                <Route path="/driver/request" element={<DriverIncomingRequest />} />
                <Route path="/driver/trip" element={<DriverActiveTrip />} />

                {/* Catch-all */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </RequestProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
