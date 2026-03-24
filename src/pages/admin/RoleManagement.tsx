import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { ArrowLeft, Users, Shield, Search, Filter, MoreVertical, Edit2, Trash2, Key } from 'lucide-react';
import { motion } from 'framer-motion';

const MOCK_USERS = [
    { id: '1', name: 'James Kimani', email: 'j.kimani@somobloom.edu', role: 'Super Admin', status: 'Active', lastLogin: '10 mins ago' },
    { id: '2', name: 'Mary Njogu', email: 'm.njogu@somobloom.edu', role: 'Principal', status: 'Active', lastLogin: '1 hour ago' },
    { id: '3', name: 'David Omondi', email: 'd.omondi@somobloom.edu', role: 'Teacher (Science)', status: 'Active', lastLogin: '3 hours ago' },
    { id: '4', name: 'Mercy Wamalwa', email: 'm.wamalwa@somobloom.edu', role: 'Bursar', status: 'Active', lastLogin: 'Yesterday' },
    { id: '5', name: 'Peter Karanja', email: 'p.karanja@somobloom.edu', role: 'Guardian', status: 'Inactive', lastLogin: '1 week ago' },
];

export const RoleManagement = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="min-h-screen bg-mesh p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8 animate-in">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/5">
                    <div>
                        <Button variant="outline" className="mb-4 h-10 border-white/10 text-slate-300" onClick={() => navigate('/')}>
                            <ArrowLeft className="w-4 h-4 mr-2" /> Digital Command
                        </Button>
                        <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-4">
                            <Shield className="w-8 h-8 text-indigo-400" /> Identity & Access Management
                        </h1>
                        <p className="text-slate-400 font-medium mt-2">Manage institutional roles, permissions, and security protocols.</p>
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <Button variant="ghost" className="h-11 border-white/10 hover:bg-white/5">Export Roster</Button>
                        <Button variant="premium" className="h-11">
                            <Users className="w-4 h-4 mr-2" /> Invite User
                        </Button>
                    </div>
                </header>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <Card className="border-t-4 border-t-indigo-500 bg-gradient-to-br from-slate-900/80 to-indigo-950/20 hover:border-t-indigo-400 transition-colors group">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest group-hover:text-indigo-400 transition-colors">Total Staff & Board</p>
                        <p className="text-3xl font-black text-white mt-2 drop-shadow-md">142</p>
                    </Card>
                    <Card className="border-t-4 border-t-amber-500 bg-gradient-to-br from-slate-900/80 to-amber-950/20 hover:border-t-amber-400 transition-colors group">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest group-hover:text-amber-400 transition-colors">Active Guardians</p>
                        <p className="text-3xl font-black text-white mt-2 drop-shadow-md">856</p>
                    </Card>
                    <Card className="border-t-4 border-t-rose-500 bg-gradient-to-br from-slate-900/80 to-rose-950/20 hover:border-t-rose-400 transition-colors group">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest group-hover:text-rose-400 transition-colors">Pending Invitations</p>
                        <p className="text-3xl font-black text-white mt-2 drop-shadow-md">24</p>
                    </Card>
                </motion.div>

                <Card className="p-0 overflow-hidden border-t-0">
                    <div className="p-6 border-b border-white/5 flex flex-col md:flex-row gap-4 justify-between items-center bg-white/[0.02]">
                        <div className="relative w-full md:w-96">
                            <Input
                                placeholder="Search users by name or email..."
                                icon={<Search className="w-5 h-5" />}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-slate-900/50 border-white/5 h-12"
                            />
                        </div>
                        <div className="flex gap-3 w-full md:w-auto">
                            <Button variant="outline" className="h-12 border-white/5"><Filter className="w-4 h-4 mr-2" /> Filter Roles</Button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/5 bg-slate-900/50">
                                    <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">User Details</th>
                                    <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Security Role</th>
                                    <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                    <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Last Auth</th>
                                    <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <motion.tbody 
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.1 } }
                                }}
                                className="divide-y divide-white/5"
                            >
                                {MOCK_USERS.filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase())).map((user) => (
                                    <motion.tr 
                                        variants={{
                                            hidden: { opacity: 0, x: -20 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                        key={user.id} 
                                        className="hover:bg-white/[0.04] transition-all duration-300 group cursor-pointer"
                                    >
                                        <td className="p-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-indigo-400 border border-white/5 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-white group-hover:text-indigo-300 transition-colors drop-shadow-sm">{user.name}</p>
                                                    <p className="text-xs text-slate-500 font-medium">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <div className="flex items-center gap-2">
                                                {user.role === 'Super Admin' && <Key className="w-3 h-3 text-amber-500" />}
                                                <span className={`text-[10px] uppercase font-black tracking-wider px-2.5 py-1 rounded-full border ${user.role === 'Super Admin' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]'
                                                        : user.role === 'Principal' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.1)]'
                                                            : 'bg-slate-800 text-slate-300 border-white/5'
                                                    }`}>
                                                    {user.role}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <span className={`text-[10px] uppercase font-black tracking-wider px-2.5 py-1 rounded-md ${user.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="p-6 text-xs font-semibold text-slate-400 group-hover:text-slate-300 transition-colors">
                                            {user.lastLogin}
                                        </td>
                                        <td className="p-6 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                                                <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10"><Edit2 className="w-4 h-4" /></Button>
                                                {user.role !== 'Super Admin' && <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10"><Trash2 className="w-4 h-4" /></Button>}
                                                <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-white/10"><MoreVertical className="w-4 h-4" /></Button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </motion.tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    );
};

// SomoBloom V1.0
