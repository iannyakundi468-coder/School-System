import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PortalLayout from './layouts/PortalLayout';
import LoginPage from './pages/LoginPage';
import { TeacherProvider } from './context/TeacherContext';
import { StudentProvider } from './context/StudentContext';
import { GamificationProvider } from './context/GamificationContext';
import ProtectedRoute from './components/common/ProtectedRoute';

// Student Pages
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import AiStudy from './pages/AiStudy';

// Teacher Pages
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import Classes from './pages/teacher/Classes';
import TeacherPortfolio from './pages/teacher/TeacherPortfolio';
import TeacherProfile from './pages/teacher/TeacherProfile';

function App() {
  return (
    <TeacherProvider>
      <StudentProvider>
        <GamificationProvider>
          <BrowserRouter>
            <Routes>
              {/* Login Page */}
              <Route path="/" element={<LoginPage />} />

              {/* Protected Student Portal Routes */}
              <Route
                path="/student"
                element={
                  <ProtectedRoute>
                    <PortalLayout role="student" />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Dashboard />} />
                <Route path="ai-study" element={<AiStudy />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="profile" element={<Profile />} />
              </Route>

              {/* Protected Teacher Portal Routes */}
              <Route
                path="/teacher"
                element={
                  <ProtectedRoute>
                    <PortalLayout role="teacher" />
                  </ProtectedRoute>
                }
              >
                <Route index element={<TeacherDashboard />} />
                <Route path="classes" element={<Classes />} />
                <Route path="portfolio" element={<TeacherPortfolio />} />
                <Route path="profile" element={<TeacherProfile />} />
              </Route>

              {/* Catch-all redirect to login */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </GamificationProvider>
      </StudentProvider>
    </TeacherProvider>
  );
}

export default App;
