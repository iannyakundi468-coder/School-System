import { Button } from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";
import { GuardianView } from "../components/dashboard/GuardianView";
import { StaffView } from "../components/dashboard/StaffView";
import { AdminView } from "../components/dashboard/AdminView";
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user) {
        return (
            <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-4">Access Denied</h2>
                    <Button onClick={() => navigate('/login')}>Go to Login</Button>
                </div>
            </div>
        );
    }

    const renderView = () => {
        switch (user.role) {
            case 'guardian':
                return <GuardianView />;
            case 'staff':
                return <StaffView />;
            case 'admin':
                return <AdminView />;
            default:
                return <GuardianView />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-800">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
                        <p className="text-emerald-400 text-sm">Welcome, {user.name} ({user.role})</p>
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <Button variant="glass" className="flex-1 md:flex-none justify-center" onClick={() => navigate('/messages')}>
                            Messages
                        </Button>
                        <Button variant="glass" className="flex-1 md:flex-none justify-center" onClick={handleLogout}>Log Out</Button>
                    </div>
                </header>

                {renderView()}
            </div>
        </div>
    )
}

// Solian Wolves V1.0
