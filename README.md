# 🚑 ResQAI – AI-Powered Ambulance Assistance Platform

**ResQAI** is an AI-powered ambulance assistance platform designed to connect patients or nearby people with available private ambulance drivers. It helps users request emergency transportation, discover nearby ambulances, and track ambulance arrival through a streamlined digital experience.

The platform aims to reduce the time spent searching for ambulance services by providing location-based ambulance discovery and AI-assisted matching.

## 🎯 Problem Statement

During medical emergencies, finding an available ambulance quickly can be challenging. Traditional ambulance booking methods may require multiple phone calls, manual coordination, and uncertain arrival times.

ResQAI addresses this problem by connecting users with nearby ambulance drivers through a centralized platform that supports ambulance discovery, intelligent matching, request management, and trip tracking.

## 💡 Key Features

- **🚨 Emergency Ambulance Request** – Request an ambulance by providing the pickup location and necessary details.
- **📍 Location-Based Discovery** – Identify nearby available ambulances using the user's location.
- **🤖 AI-Powered Matching** – Rank nearby ambulances based on relevant matching criteria to help users find a suitable option.
- **🚑 Driver Request Management** – Allow ambulance drivers to receive and respond to requests.
- **✅ Request Acceptance** – Display ambulance and driver details after a request is accepted.
- **🗺️ Live ETA and Navigation** – Support estimated arrival time updates and navigation to the pickup location and hospital.
- **📦 Trip Management** – Track the journey from request creation through pickup to trip completion.
- **👤 User-Friendly Interface** – Provide a simple workflow for users during stressful emergency situations.

## 🔄 How It Works

1. The user selects **Need an Ambulance**.
2. The platform obtains the pickup location and collects the required emergency details.
3. Nearby available ambulances are identified.
4. The AI-assisted matching system ranks suitable ambulances.
5. Drivers receive the request and can accept it.
6. The user views the accepted ambulance's details and estimated arrival time.
7. The ambulance navigates to the pickup location.
8. The patient is transported to the selected hospital.
9. The trip is marked as completed.

## 🏗️ System Architecture

```text
        Patient / Nearby Person
                  |
                  v
          ResQAI Web Interface
                  |
                  v
        Backend API / Server
                  |
          +-------+-------+
          |               |
          v               v
   Location Service   AI Matching
          |               |
          +-------+-------+
                  |
                  v
          Ambulance Drivers
                  |
                  v
       Request and Trip Tracking
                  |
                  v
            Hospital
```

## 🛠️ Technology Stack

The following technologies are suitable for the planned platform. Update this section to reflect the technologies actually implemented in your repository.

| Component | Technology |
|---|---|
| Frontend | React.js |
| Backend | Python / FastAPI |
| AI Matching | Python, ranking algorithms |
| Location Services | Geolocation and mapping APIs |
| API Communication | REST APIs |
| Version Control | Git and GitHub |

## 📂 Project Structure

```text
ResQAI/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── ...
├── README.md
└── .gitignore
```

*The folder structure may differ depending on the current implementation.*

## ⚙️ Installation and Setup

### Prerequisites

- Python 3.10 or later
- Node.js and npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/SRINATH-sketch/ResQAI.git
cd ResQAI
```

### 2. Set Up the Backend

```bash
cd backend
python -m venv venv
```

Activate the virtual environment on Windows:

```powershell
.\venv\Scripts\Activate.ps1
```

Install the backend dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

The API documentation will typically be available at:

`http://127.0.0.1:8000/docs`

### 3. Set Up the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm start
```

The frontend development server will start at the address displayed in the terminal, commonly `http://localhost:3000`.

*Note: These commands assume the repository uses the directory structure and entry points shown above. Adjust them if your project differs.*

## 🔐 Security and Privacy

- Protect user and driver information.
- Validate ambulance requests and user input.
- Secure API endpoints and authentication.
- Request location permissions before accessing location data.
- Restrict access to sensitive trip information.

## 🌟 Expected Impact

- Reduce the effort required to find available ambulance services.
- Improve coordination between patients and ambulance drivers.
- Provide better visibility into ambulance availability and arrival estimates.
- Support a more organized emergency transportation workflow.

## 🚀 Future Enhancements

- Real-time ambulance location tracking.
- Improved AI-based ambulance ranking.
- Hospital discovery based on location and emergency requirements.
- Driver and patient notifications.
- Emergency contact integration.
- Multilingual support.
- Analytics for ambulance availability and response times.

## ⚠️ Disclaimer

ResQAI is a technology platform concept intended to improve ambulance discovery and coordination. It does not replace emergency dispatch services, medical professionals, or official emergency response systems. Availability, location accuracy, and arrival estimates depend on the actual service integrations and participating ambulance providers.

## 👨‍💻 Developer

**G Srinath**

B.Tech – Artificial Intelligence and Machine Learning  
Sri Shakthi Institute of Engineering and Technology, Coimbatore

- GitHub: https://github.com/SRINATH-sketch
- LinkedIn: https://www.linkedin.com/in/gsrinath

---

**ResQAI — Connecting People to Ambulance Services When Every Second Matters.** 🚑
