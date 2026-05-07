import { Navigate } from 'react-router-dom';
import { useStudent } from '../../context/StudentContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useStudent();
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}
