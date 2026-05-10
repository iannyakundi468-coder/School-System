import { Navigate } from 'react-router-dom';
import { useTeacher } from '../../context/TeacherContext';
import { useStudent } from '../../context/StudentContext';

export default function ProtectedRoute({ children }) {
  const { teacherData } = useTeacher();
  const { studentData } = useStudent();
  
  // If neither teacher nor student is logged in, redirect to login
  if (!teacherData && !studentData) {
    return <Navigate to="/" replace />;
  }
  
  return children;
}
