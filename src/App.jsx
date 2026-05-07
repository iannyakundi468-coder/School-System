import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PortalLayout from './layouts/PortalLayout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import AiStudy from './pages/AiStudy';
import LoginPage from './pages/LoginPage';
import { StudentProvider } from './context/StudentContext';
import { GamificationProvider } from './context/GamificationContext';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  return (
    <StudentProvider>
      <GamificationProvider>
        <BrowserRouter>
          <Routes>
            {/* Login / Onboarding Page */}
            <Route path="/" element={<LoginPage />} />

            {/* Protected Student Portal Routes */}
            <Route
              path="/student"
              element={
                <ProtectedRoute>
                  <PortalLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="ai" element={<AiStudy />} />
            </Route>

            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </GamificationProvider>
    </StudentProvider>
  );
}

export default App;
