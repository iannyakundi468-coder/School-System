import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { LoginPage } from './pages/auth/LoginPage';
import { Dashboard } from './pages/Dashboard';
import { EnrollmentPage } from './pages/EnrollmentPage';
import { FinancePage } from './pages/FinancePage';
import { MessagesPage } from './pages/communication/MessagesPage';
import { StudentReport } from './pages/academic/StudentReport';
import { EventsPage } from './pages/events/EventsPage';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
