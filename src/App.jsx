import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PortalLayout from './layouts/PortalLayout';
import LoginPage from './pages/LoginPage';
import { TeacherProvider } from './context/TeacherContext';
import ProtectedRoute from './components/common/ProtectedRoute';

// Teacher Pages
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import Classes from './pages/teacher/Classes';
import TeacherPortfolio from './pages/teacher/TeacherPortfolio';
import TeacherProfile from './pages/teacher/TeacherProfile';

function App() {
  return (
    <TeacherProvider>
      <BrowserRouter>
        <Routes>
          {/* Login Page */}
          <Route path="/" element={<LoginPage />} />

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
    </TeacherProvider>
  );
}

export default App;
