import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { AuthLayout } from '../../layouts/AuthLayout';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Mail, Lock, Phone, ArrowRight, User, Shield, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Role = 'guardian' | 'staff' | 'admin';

export const LoginPage = () => {
    const { login } = useAuth();
    const [role, setRole] = useState<Role>('guardian');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock login delay or API call
        setTimeout(async () => {
            await login(email || 'test@solian.com', role);
            setIsLoading(false);
            navigate('/dashboard');
        }, 1500);
    };

    return (
        <AuthLayout
            title={`Welcome back, ${role.charAt(0).toUpperCase() + role.slice(1)}`}
            subtitle="Access your Solian Wolves portal securely."
        >
            <div className="flex justify-center gap-4 mb-8">
                <button
                    onClick={() => setRole('guardian')}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${role === 'guardian' ? 'bg-emerald-500/20 ring-2 ring-emerald-500' : 'bg-slate-800/50 hover:bg-slate-800'}`}
                >
                    <Users className={`w-6 h-6 ${role === 'guardian' ? 'text-emerald-400' : 'text-gray-400'}`} />
                    <span className="text-xs font-medium">Guardian</span>
                </button>
                <button
                    onClick={() => setRole('staff')}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${role === 'staff' ? 'bg-emerald-500/20 ring-2 ring-emerald-500' : 'bg-slate-800/50 hover:bg-slate-800'}`}
                >
                    <User className={`w-6 h-6 ${role === 'staff' ? 'text-emerald-400' : 'text-gray-400'}`} />
                    <span className="text-xs font-medium">Staff</span>
                </button>
                <button
                    onClick={() => setRole('admin')}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${role === 'admin' ? 'bg-emerald-500/20 ring-2 ring-emerald-500' : 'bg-slate-800/50 hover:bg-slate-800'}`}
                >
                    <Shield className={`w-6 h-6 ${role === 'admin' ? 'text-emerald-400' : 'text-gray-400'}`} />
                    <span className="text-xs font-medium">Admin</span>
                </button>
            </div>

            <Card className="border-t-4 border-t-emerald-500">
                <form onSubmit={handleLogin} className="space-y-6">
                    {role === 'guardian' ? (
                        <Input
                            label="Phone Number"
                            type="tel"
                            placeholder="e.g 0712 345 678"
                            icon={<Phone className="w-4 h-4" />}
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                        />
                    ) : (
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="name@solian.com"
                            icon={<Mail className="w-4 h-4" />}
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                        />
                    )}

                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        icon={<Lock className="w-4 h-4" />}
                    />

                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                            <input type="checkbox" className="rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500/20" />
                            Remember me
                        </label>
                        <a href="#" className="text-emerald-400 hover:text-emerald-300">Forgot Password?</a>
                    </div>

                    <Button type="submit" className="w-full py-3 text-lg group" disabled={isLoading}>
                        {isLoading ? 'Signing in...' : 'Sign In Dashboard'}
                        {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </Button>
                </form>
            </Card>

            {role === 'guardian' && (
                <div className="text-center">
                    <p className="text-gray-400 text-sm">New Parent?</p>
                    <Button variant="glass" className="mt-2 text-sm">Register via SMS / QR</Button>
                </div>
            )}
        </AuthLayout>
    );
};
