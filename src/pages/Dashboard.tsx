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
        <div className="min-h-screen bg-mesh p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8 animate-in">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-slate-200">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">Dashboard</h1>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                            <p className="text-slate-500 font-medium">Welcome back, {user.name} <span className="text-slate-300 mx-1">|</span> <span className="text-indigo-600 capitalize">{user.role}</span></p>
                        </div>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <Button variant="outline" className="flex-1 md:flex-none h-11 px-6 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50" onClick={() => navigate('/messages')}>
                            Messages
                        </Button>
                        <Button className="btn-primary flex-1 md:flex-none h-11" onClick={handleLogout}>Log Out</Button>
                    </div>
                </header>

                <div className="relative">
                    {renderView()}
                </div>
            </div>
        </div>
    )
}

// SomoBloom V1.0
