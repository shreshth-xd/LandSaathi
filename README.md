# 🌍 LandSaathi

> A Real-Time National Land Acquisition & Management System

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![SIH Problem ID](https://img.shields.io/badge/SIH%20Problem%20ID-SIH26016-orange.svg)
![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)

---

## 📑 Table of Contents

- [Problem Statement](#-problem-statement)
- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Getting Started](#-getting-started)
- [Team](#-team)
- [Roadmap / Future Scope](#-roadmap--future-scope)
- [References](#-references)
- [License](#-license)

---

## 🛑 Problem Statement

**Problem Statement ID:** SIH26016 (Ministry of Rural Development, Government of India)

Currently, India's land acquisition process—governed by the Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement (RFCTLARR) Act, 2013—is highly manual, fragmented across various states, and suffers from a lack of real-time visibility. This leads to delays, opacity, and difficulties in monitoring the progress of land acquisition for crucial infrastructure projects.

---

## 📖 Overview

**LandSaathi** is a "Real-Time National Land Acquisition & Management System" built as a prototype for the Smart India Hackathon (SIH) internal hackathon under the Smart Automation theme. It serves as a single web platform that digitizes the entire land acquisition lifecycle, providing end-to-end monitoring and decision support. 

By tracking 8 core stages through a role-based workflow engine with a comprehensive audit trail, LandSaathi brings transparency, efficiency, and accountability to the land acquisition process:
1. Proposal Submission
2. Scrutiny & Routing
3. Notification Issued
4. Survey & Social Impact Assessment (SIA)
5. Award Declaration
6. Compensation Disbursement
7. Possession
8. Rehabilitation & Resettlement (R&R)

---

## ✨ Key Features

- **Role-Based Access Control (RBAC):** Tailored dashboards and permissions for Central Ministries, State Governments, District Authorities, and Project Implementing Agencies.
- **Workflow Engine:** Tracks the stage of every proposal in real-time, accompanied by a secure audit logging system.
- **GIS-Based Geo-Tagging:** Visualizes land parcels on an interactive map using Leaflet.js and PostGIS.
- **Versioned Document Repository:** Secure storage and version control for all official documents and notifications.
- **Real-Time Analytics Dashboard:** Tracks key performance indicators (KPIs) such as area notified/acquired, compensation disbursed, families rehabilitated, and timeline adherence.
- **Bilingual Interface:** Supports English and Hindi with an easy language toggle for wider accessibility.
- **Automated Notifications:** Sends alerts and updates to relevant stakeholders at each stage transition.

---

## 💻 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | Next.js |
| **Backend** | Node.js, Express |
| **Database** | PostgreSQL, PostGIS |
| **Maps / GIS** | Leaflet.js |
| **Authentication** | JWT-based Auth |

---

## 🏛️ System Architecture

1. **Login & Proposal Submission:** Secure entry point based on user roles leading to the submission of land acquisition proposals.
2. **Workflow Engine:** Processes proposals through predefined stages, enforcing checks and generating audit trails.
3. **Core Modules:**
   - **GIS Tagging:** Associates geographic data with acquisition proposals.
   - **Compensation & R&R:** Tracks financial disbursement and rehabilitation efforts.
   - **Document Repository:** Centralized secure storage.
4. **Output & Monitoring:**
   - **Analytics Dashboard:** Displays real-time KPIs.
   - **Alerts:** Automated notifications for stakeholders.

*(Placeholder for Architecture Diagram)*
![System Architecture Flow](https://via.placeholder.com/800x400?text=System+Architecture+Diagram)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL with PostGIS extension enabled
- npm or yarn or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MrigankShekhar08/LandSaathi.git
   cd LandSaathi
   ```

2. **Install dependencies for backend:**
   ```bash
   cd backend
   npm install
   ```

3. **Install dependencies for frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables

Create a `.env` file in both `frontend` and `backend` directories.

**Backend `.env` example:**
```env
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/landsaathi
JWT_SECRET=your_jwt_secret
```

**Frontend `.env.local` example:**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Running Locally

1. **Start the Backend Server:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the Frontend Application:**
   ```bash
   cd frontend
   npm run dev
   ```

The application will be accessible at `http://localhost:3000`.

---

## 👥 Team

- Mridul Pathak
- Ansh Yadav
- Shreshth Kanchan
- Ayush Mishra
- Anshika Agarwal
- Namami Srivastava

---

## 🔮 Roadmap / Future Scope

As a hackathon prototype, LandSaathi establishes the core workflow. Future iterations could include:
- **Integration with DILRMP:** Syncing with the Digital India Land Records Modernization Programme.
- **ULPIN (Bhu-Aadhaar) Integration:** Utilizing the Unique Land Parcel Identification Number for flawless tracking.
- **NGDRS Sync:** Connecting with the National Generic Document Registration System.
- **Mobile Application:** A dedicated app for on-ground surveyors and field agents.

---

## 📚 References

- **RFCTLARR Act, 2013:** The legal framework guiding fair compensation and transparency.
- **DILRMP:** Digital India Land Records Modernization Programme.
- **ULPIN (Bhu-Aadhaar):** Unique Land Parcel Identification Number scheme.
- **NGDRS:** National Generic Document Registration System.
- **Karnataka's Bhoomi:** State-level precedent for digital land records.

---

## 📜 License

This project is licensed under the MIT License.