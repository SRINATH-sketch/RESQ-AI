// ResQAI Centralized Mock Data Source
// Comprehensive mock records for Patients, Drivers, Ambulances, Hospitals, and Requests

export const MOCK_USER = {
  id: 'USR-8902',
  name: 'Rajesh Sharma',
  phone: '+91 98765 43210',
  email: 'rajesh.sharma@example.com',
  currentLocation: {
    address: 'Plot 42, 2nd Avenue, Anna Nagar West, Chennai - 600040',
    lat: 13.0850,
    lng: 80.2100,
    city: 'Chennai',
    landmark: 'Near Roundtana Metro Station'
  },
  emergencyContacts: [
    { name: 'Priya Sharma (Spouse)', phone: '+91 98765 43211', relationship: 'Spouse' },
    { name: 'Dr. S. K. Raman', phone: '+91 98400 11223', relationship: 'Family Physician' }
  ],
  bloodGroup: 'B+',
  allergies: 'Penicillin',
  medicalNotes: 'Mild hypertension'
};

export const MOCK_DRIVERS = [
  {
    id: 'DRV-201',
    name: 'Kumar Selvam',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    phone: '+91 94441 23456',
    rating: 4.9,
    reviewsCount: 382,
    tripsCompleted: 428,
    experience: '6 Years Emergency Driving',
    status: 'online',
    isAvailable: true,
    currentLocation: {
      address: 'Near Thirumangalam Flyover, Chennai',
      lat: 13.0892,
      lng: 80.1985
    },
    assignedAmbulanceId: 'AMB-301',
    certifications: ['First Responder Certified', 'Defibrillator Operator', 'Defensive Driving Gold']
  },
  {
    id: 'DRV-202',
    name: 'Manoj Verma',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    phone: '+91 98882 34567',
    rating: 4.8,
    reviewsCount: 264,
    tripsCompleted: 312,
    experience: '4.5 Years Emergency Driving',
    status: 'online',
    isAvailable: true,
    currentLocation: {
      address: 'Koyambedu Junction, Chennai',
      lat: 13.0712,
      lng: 80.2015
    },
    assignedAmbulanceId: 'AMB-302',
    certifications: ['BLS Level 2 Certified', 'CPR Specialist']
  },
  {
    id: 'DRV-203',
    name: 'Anand Sundaram',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    phone: '+91 97773 45678',
    rating: 4.7,
    reviewsCount: 172,
    tripsCompleted: 198,
    experience: '3 Years Experience',
    status: 'online',
    isAvailable: true,
    currentLocation: {
      address: 'Shenoy Nagar Metro, Chennai',
      lat: 13.0784,
      lng: 80.2241
    },
    assignedAmbulanceId: 'AMB-303',
    certifications: ['Basic EMT Certified']
  }
];

export const MOCK_AMBULANCES = [
  {
    id: 'AMB-301',
    unitName: 'Ambulance Unit Alpha',
    vehicleNumber: 'TN-01-AB-1234',
    type: 'Advanced Life Support',
    typeCode: 'ALS',
    category: 'Critical Care Mobile ICU',
    distance: '2.1 km',
    distanceVal: 2.1,
    eta: '6 min',
    etaMinutes: 6,
    status: 'Available',
    driverId: 'DRV-201',
    driverName: 'Kumar Selvam',
    driverPhone: '+91 94441 23456',
    rating: 4.9,
    baseFare: '₹1,499',
    estimatedCost: '₹1,850',
    equipment: [
      'Transport Ventilator (Hamilton-T1)',
      'Defibrillator / AED (Zoll X-Series)',
      'Multiparameter ICU Monitor',
      'Dual Oxygen Cylinders (4000L)',
      '12-Lead ECG Telemetry',
      'Emergency Resuscitation Drug Kit'
    ],
    recommended: true,
    aiMatchScore: 98,
    aiMatchReason: 'Optimal match for severe emergencies. Equipped with Mobile ICU ventilator, closest response vector (2.1 km), and fastest clear-lane ETA.'
  },
  {
    id: 'AMB-302',
    unitName: 'Ambulance Unit Bravo',
    vehicleNumber: 'TN-09-CD-5678',
    type: 'Basic Life Support',
    typeCode: 'BLS',
    category: 'Emergency Trauma Transport',
    distance: '2.8 km',
    distanceVal: 2.8,
    eta: '7 min',
    etaMinutes: 7,
    status: 'Available',
    driverId: 'DRV-202',
    driverName: 'Manoj Verma',
    driverPhone: '+91 98882 34567',
    rating: 4.8,
    baseFare: '₹950',
    estimatedCost: '₹1,200',
    equipment: [
      'High Flow Oxygen Delivery',
      'Trauma Immobilization Spinal Board',
      'Vacuum Splints & Neck Collars',
      'Suction Machine & Bag-Valve-Mask',
      'Emergency First Aid & Burn Dressing Kit'
    ],
    recommended: false,
    aiMatchScore: 89,
    aiMatchReason: 'Well-suited for fractures, non-invasive trauma, and stable medical transfers.'
  },
  {
    id: 'AMB-303',
    unitName: 'Ambulance Unit Charlie',
    vehicleNumber: 'TN-02-EF-9012',
    type: 'Basic Life Support',
    typeCode: 'BLS',
    category: 'Rapid First Responder',
    distance: '3.5 km',
    distanceVal: 3.5,
    eta: '9 min',
    etaMinutes: 9,
    status: 'Available',
    driverId: 'DRV-203',
    driverName: 'Anand Sundaram',
    driverPhone: '+91 97773 45678',
    rating: 4.7,
    baseFare: '₹799',
    estimatedCost: '₹1,050',
    equipment: [
      'Standard Oxygen Inhaler',
      'Foldable Wheelchair & Stretcher',
      'Standard Trauma Kit',
      'Pulse Oximeter & BP Monitor'
    ],
    recommended: false,
    aiMatchScore: 82,
    aiMatchReason: 'Reliable unit for non-critical ambulatory patients and elderly transfers.'
  }
];

export const MOCK_HOSPITALS = [
  {
    id: 'HSP-01',
    name: 'Apollo Multi-Speciality Hospital',
    category: 'Apex Trauma & Cardiac Emergency Care',
    address: '21 Greams Road, Thousand Lights, Chennai - 600006',
    distance: '5.4 km',
    eta: '12 min',
    phone: '+91 44 2829 0200',
    emergencyDept: '24/7 Level-1 Emergency & Critical Trauma Bay 4',
    emergencyHotline: '1066',
    icuBedsAvailable: 7,
    bloodBankStatus: 'O+, A+, B+, AB+ available',
    rating: 4.9,
    openStatus: 'Open 24/7',
    facilities: ['24/7 Cath Lab', 'Level-1 Trauma Center', 'Dedicated Stroke Team', 'Pediatric ICU', 'Blood Bank']
  },
  {
    id: 'HSP-02',
    name: 'MIOT International Hospital',
    category: 'Comprehensive Orthopaedics & Trauma Hub',
    address: '4/112 Mount Poonamallee Road, Manapakkam, Chennai - 600089',
    distance: '7.2 km',
    eta: '16 min',
    phone: '+91 44 4200 2288',
    emergencyDept: 'Rapid Resuscitation & Acute Trauma Suite',
    emergencyHotline: '+91 44 2249 2288',
    icuBedsAvailable: 4,
    bloodBankStatus: 'All critical groups stocked',
    rating: 4.8,
    openStatus: 'Open 24/7',
    facilities: ['Emergency Ortho Care', 'Neurosurgical OT', 'Hyperbaric Oxygen Wing', '24/7 Imaging']
  },
  {
    id: 'HSP-03',
    name: 'Govt. Multi-Speciality Hospital (Omandurar)',
    category: 'Government Tertiary Emergency Hospital',
    address: 'Omandurar Estate, Anna Salai, Chennai - 600002',
    distance: '6.1 km',
    eta: '14 min',
    phone: '+91 44 2530 5000',
    emergencyDept: 'State Emergency Casualty & Triage Wing',
    emergencyHotline: '108',
    icuBedsAvailable: 14,
    bloodBankStatus: 'Government Central Blood Reserve',
    rating: 4.6,
    openStatus: 'Open 24/7',
    facilities: ['Govt Casualty Unit', 'Free Emergency Stabilization', 'Mass Casualty Care', '24/7 Pharmacy']
  }
];

export const EMERGENCY_TYPES = [
  {
    id: 'heart',
    label: 'Heart Emergency',
    icon: 'HeartPulse',
    severity: 'critical',
    desc: 'Chest pain, cardiac arrest, palpitations, stroke signs',
    suggestedType: 'ALS'
  },
  {
    id: 'breathing',
    label: 'Breathing Problem',
    icon: 'Wind',
    severity: 'critical',
    desc: 'Severe shortness of breath, asthma attack, choking',
    suggestedType: 'ALS'
  },
  {
    id: 'accident',
    label: 'Accident',
    icon: 'CarFront',
    severity: 'high',
    desc: 'Road vehicular collision, heavy vehicle collision, fall from height',
    suggestedType: 'ALS'
  },
  {
    id: 'injury',
    label: 'Injury',
    icon: 'Bone',
    severity: 'moderate',
    desc: 'Bone fractures, severe cuts, head laceration, burn injury',
    suggestedType: 'BLS'
  },
  {
    id: 'medical',
    label: 'Medical Emergency',
    icon: 'Stethoscope',
    severity: 'high',
    desc: 'Unconsciousness, severe allergic reaction, seizures',
    suggestedType: 'ALS'
  },
  {
    id: 'other',
    label: 'Other',
    icon: 'AlertCircle',
    severity: 'normal',
    desc: 'Scheduled transfer, maternal emergency, general critical care',
    suggestedType: 'BLS'
  }
];

export const INITIAL_RECENT_REQUESTS = [
  {
    id: 'REQ-9081',
    date: 'Yesterday, 8:40 PM',
    patientName: 'Kavitha Raman',
    emergencyType: 'Breathing Problem',
    ambulanceNumber: 'TN-01-AB-1234',
    driverName: 'Kumar Selvam',
    pickupLocation: 'Anna Nagar West, Chennai',
    destinationHospital: 'Apollo Multi-Speciality Hospital',
    status: 'COMPLETED',
    duration: '22 mins',
    distance: '5.8 km',
    rating: 5
  },
  {
    id: 'REQ-8742',
    date: '12 Sep 2026, 3:15 PM',
    patientName: 'Rajesh Sharma (Self)',
    emergencyType: 'Accident',
    ambulanceNumber: 'TN-09-CD-5678',
    driverName: 'Manoj Verma',
    pickupLocation: 'Poonamallee High Rd, Chennai',
    destinationHospital: 'MIOT International Hospital',
    status: 'COMPLETED',
    duration: '18 mins',
    distance: '4.2 km',
    rating: 5
  }
];

export const WORKFLOW_STAGES = [
  { key: 'REQUESTED', label: 'Requested', step: 1 },
  { key: 'MATCHING', label: 'AI Matching', step: 2 },
  { key: 'DRIVER_ACCEPTED', label: 'Driver Accepted', step: 3 },
  { key: 'ON_THE_WAY', label: 'On The Way', step: 4 },
  { key: 'ARRIVED', label: 'Arrived', step: 5 },
  { key: 'PATIENT_PICKED_UP', label: 'Patient Picked Up', step: 6 },
  { key: 'AT_HOSPITAL', label: 'At Hospital', step: 7 },
  { key: 'COMPLETED', label: 'Completed', step: 8 }
];
