import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './index.css';
import { LoginPage } from './pages/auth/LoginPage';
import { Dashboard } from './pages/Dashboard';
import { EnrollmentPage } from './pages/EnrollmentPage';
import { FinancePage } from './pages/FinancePage';
import { MessagesPage } from './pages/communication/MessagesPage';
import { StudentReport } from './pages/academic/StudentReport';
import { EventsPage } from './pages/events/EventsPage';
import { SettingsProvider } from './context/SettingsContext';
import { HomeLearningPage } from './pages/learning/HomeLearningPage';
import { CBCAssessment } from './pages/learning/CBCAssessment';
import { StudentPortfolio } from './pages/learning/StudentPortfolio';
import { DevelopmentPage } from './pages/DevelopmentPage';
import { OperationsPage } from './pages/OperationsPage';
import { CompliancePage } from './pages/CompliancePage';
import { SafetyPage } from './pages/SafetyPage';
import { TimetablePage } from './pages/TimetablePage';
import { ReportsPage } from './pages/ReportsPage';

export default function App() {
  return (
    <AuthProvider>
      <SettingsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Navigate to="/" replace />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/enrollment" element={<EnrollmentPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/report" element={<StudentReport />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/learning" element={<HomeLearningPage />} />
            <Route path="/learning/assessment" element={<CBCAssessment />} />
            <Route path="/learning/portfolio" element={<StudentPortfolio />} />
            <Route path="/development" element={<DevelopmentPage />} />
            <Route path="/operations" element={<OperationsPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/timetable" element={<TimetablePage />} />
            <Route path="/reports" element={<ReportsPage />} />
          </Routes>
        </BrowserRouter>
      </SettingsProvider>
    </AuthProvider>
  );
}

// Solian Wolves V1.1
