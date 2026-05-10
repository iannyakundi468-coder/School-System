import { Navigate } from 'react-router-dom';
import { useTeacher } from '../../context/TeacherContext';

export default function ProtectedRoute({ children }) {
  const { teacherData } = useTeacher();
  
  if (!teacherData) {
    return <Navigate to="/" replace />;
  }
  
  return children;
}

