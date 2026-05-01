import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
import { GatePage } from './pages/GatePage';
import { CanteenPage } from './pages/CanteenPage';
import { ReportsPage } from './pages/ReportsPage';
import { HistoricalPerformance } from './pages/academic/HistoricalPerformance';
import { RoleManagement } from './pages/admin/RoleManagement';
import { AuditLogs } from './pages/admin/AuditLogs';
import { PortfolioProvider } from './context/PortfolioContext';
import { GamificationProvider } from './context/GamificationContext';
import { ParentFeesPage } from './pages/parent/ParentFeesPage';



function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Navigate to="/" replace />} />
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/enrollment" element={<EnrollmentPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/report" element={<StudentReport />} />
        <Route path="/history" element={<HistoricalPerformance />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/roles" element={<RoleManagement />} />
        <Route path="/audit" element={<AuditLogs />} />
        <Route path="/learning" element={<HomeLearningPage />} />
        <Route path="/learning/assessment" element={<CBCAssessment />} />
        <Route path="/learning/portfolio" element={<StudentPortfolio />} />
        <Route path="/development" element={<DevelopmentPage />} />
        <Route path="/operations" element={<OperationsPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/safety" element={<SafetyPage />} />
        <Route path="/timetable" element={<TimetablePage />} />
        <Route path="/gate" element={<GatePage />} />
        <Route path="/canteen" element={<CanteenPage />} />
        <Route path="/parent/fees" element={<ParentFeesPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <GamificationProvider>
        <PortfolioProvider>
          <SettingsProvider>
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </SettingsProvider>
      </PortfolioProvider>
    </AuthProvider>
  );
}

// SomoBloom V1.2 - Premium Experience
