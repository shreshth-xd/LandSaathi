export const proposals = [
  {
    id: "LA-UP-JHS-2026-014",
    projectName: "NH-44 Jhansi Bypass Widening — Phase II",
    requiringBody: "NHAI (Ministry of Road Transport & Highways)",
    district: "Jhansi, Uttar Pradesh",
    landArea: "38.6 hectares across 3 villages, 187 parcels",
    householdsAffected: "64 (41 agricultural landholders)",
    compensation: {
      total: "₹7.14 crore",
      disbursed: "₹5.8 crore",
      familiesPaid: 52,
      totalFamilies: 64
    },
    currentStage: "Possession Taken",
    rr: {
      enrolled: 12,
      eligible: 41
    },
    submissionDate: "2026-01-15",
    isDelayed: false,
  },
  {
    id: "LA-MH-PUN-2026-088",
    projectName: "Pune Metro Line 3 Extension",
    requiringBody: "Pune Metropolitan Region Development Authority",
    district: "Pune, Maharashtra",
    landArea: "12.4 hectares across 2 villages, 45 parcels",
    householdsAffected: "120 (85 urban residential)",
    compensation: {
      total: "₹45.2 crore",
      disbursed: "₹0",
      familiesPaid: 0,
      totalFamilies: 120
    },
    currentStage: "Under Scrutiny",
    rr: {
      enrolled: 0,
      eligible: 85
    },
    submissionDate: "2026-08-01",
    isDelayed: true,
  },
  {
    id: "LA-GJ-SRT-2025-102",
    projectName: "Surat-Chennai Expressway Phase 1",
    requiringBody: "NHAI",
    district: "Surat, Gujarat",
    landArea: "150.2 hectares across 12 villages, 410 parcels",
    householdsAffected: "320 (210 agricultural landholders)",
    compensation: {
      total: "₹120.5 crore",
      disbursed: "₹120.5 crore",
      familiesPaid: 320,
      totalFamilies: 320
    },
    currentStage: "Rehabilitation & Resettlement",
    rr: {
      enrolled: 210,
      eligible: 210
    },
    submissionDate: "2025-03-10",
    isDelayed: false,
  },
  {
    id: "LA-TN-CBE-2026-045",
    projectName: "Coimbatore Industrial Corridor",
    requiringBody: "SIPCOT",
    district: "Coimbatore, Tamil Nadu",
    landArea: "85.0 hectares across 5 villages, 230 parcels",
    householdsAffected: "150 (100 agricultural landholders)",
    compensation: {
      total: "₹55.0 crore",
      disbursed: "₹20.0 crore",
      familiesPaid: 60,
      totalFamilies: 150
    },
    currentStage: "Compensation Disbursement",
    rr: {
      enrolled: 0,
      eligible: 100
    },
    submissionDate: "2026-05-20",
    isDelayed: false,
  }
];

export const stages = [
  "Proposal Submission",
  "Scrutiny & Routing",
  "Notification Issued",
  "Survey & SIA",
  "Award Declaration",
  "Compensation Disbursement",
  "Possession Taken",
  "Rehabilitation & Resettlement"
];
