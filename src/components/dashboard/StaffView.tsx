import { useState } from 'react';
import { useSettings } from '../../context/SettingsContext';
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { useNavigate } from 'react-router-dom';
import { Users, TrendingUp, CheckCircle, ChevronDown, Search, Bot } from 'lucide-react';

// Mock Data for Classes
const TEACHER_CLASSES = [
    { id: '4G', name: 'Grade 4 Green (Home)', students: 32, attendance: '94%' },
    { id: '5B', name: 'Grade 5 Blue (Math)', students: 28, attendance: '89%' },
    { id: '6R', name: 'Grade 6 Red (Science)', students: 30, attendance: '91%' },
];

// Mock Data for Students
const MOCK_STUDENTS = [
    { id: 1, name: 'Ian Doe', grade: '4G', status: 'Present', performance: 'A' },
    { id: 2, name: 'Sarah Smith', grade: '4G', status: 'Absent', performance: 'B+' },
    { id: 3, name: 'James Johnson', grade: '4G', status: 'Present', performance: 'A-' },
    { id: 4, name: 'Emily Davis', grade: '4G', status: 'Late', performance: 'B' },
    { id: 5, name: 'Michael Brown', grade: '4G', status: 'Present', performance: 'C+' },
];

export const StaffView = () => {
    const navigate = useNavigate();
    const [selectedClass, setSelectedClass] = useState(TEACHER_CLASSES[0]);
    const [searchQuery, setSearchQuery] = useState('');
    const { aiEnabled, setAiEnabled } = useSettings();

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header / Class Selector */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Class Overview</h2>
                    <div className="relative inline-block text-left group">
                        <button className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium bg-emerald-500/10 px-3 py-1 rounded-lg transition-colors">
                            {selectedClass.name}
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {/* Dropdown (Simple implementation for now) */}
                        <div className="absolute left-0 mt-2 w-56 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-20 hidden group-hover:block animate-fade-in">
                            {TEACHER_CLASSES.map((cls) => (
                                <button
                                    key={cls.id}
                                    onClick={() => setSelectedClass(cls)}
                                    className="w-full text-left px-4 py-3 hover:bg-slate-700 first:rounded-t-xl last:rounded-b-xl text-sm text-gray-300 hover:text-white"
                                >
                                    {cls.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                    <Button onClick={() => navigate('/events')} variant="glass">Events</Button>
                    <Button onClick={() => navigate('/enrollment')}>+ New Student</Button>
                    <Button variant="glass">Take Attendance</Button>
                </div>
            </div>

            {/* AI Control Panel */}
            <Card className="border-l-4 border-l-purple-500 bg-gradient-to-r from-slate-900 to-purple-900/10">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                            <Bot className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                AI Tutor Access
                                {aiEnabled && <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">Active</span>}
                            </h3>
                            <p className="text-sm text-gray-400">Control student access to Gemini AI features.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className={`text-sm font-medium ${aiEnabled ? 'text-purple-400' : 'text-gray-500'}`}>
                            {aiEnabled ? 'Enabled' : 'Disabled'}
                        </span>
                        <button
                            onClick={() => setAiEnabled(!aiEnabled)}
                            className={`w-14 h-7 rounded-full transition-colors relative ${aiEnabled ? 'bg-purple-600' : 'bg-slate-700'}`}
                        >
                            <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all shadow-md ${aiEnabled ? 'left-8' : 'left-1'}`} />
                        </button>
                    </div>
                </div>
            </Card>

            {/* Stats Row & Messages */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="grid gap-6">
                    <Card>
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-400 text-sm">Class Size</p>
                                <p className="text-3xl font-bold text-white">{selectedClass.students}</p>
                            </div>
                            <div className="p-2 bg-blue-500/20 rounded-lg"><Users className="w-6 h-6 text-blue-400" /></div>
                        </div>
                    </Card>
                    <div className="grid grid-cols-2 gap-6">
                        <Card>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-gray-400 text-sm">Today's Attendance</p>
                                    <p className="text-2xl font-bold text-emerald-400">{selectedClass.attendance}</p>
                                </div>
                                <div className="p-2 bg-emerald-500/20 rounded-lg"><CheckCircle className="w-5 h-5 text-emerald-400" /></div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-gray-400 text-sm">Avg. Performance</p>
                                    <p className="text-2xl font-bold text-amber-400">B+</p>
                                </div>
                                <div className="p-2 bg-amber-500/20 rounded-lg"><TrendingUp className="w-5 h-5 text-amber-400" /></div>
                            </div>
                        </Card>
                    </div>
                </div>

                <Card>
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl font-bold">Recent Messages</h2>
                        <Button variant="glass" className="h-8 text-xs" onClick={() => navigate('/messages')}>View All</Button>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                                <span className="text-xl">👩‍🏫</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-sm text-white">Mrs. Alice</h4>
                                <p className="text-xs text-gray-400 truncate">Reminder: Staff meeting at 2 PM.</p>
                            </div>
                            <span className="text-[10px] text-emerald-400">New</span>
                        </div>
                        <div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                                <span className="text-xl">👨‍💼</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-sm text-white">Principal James</h4>
                                <p className="text-xs text-gray-400 truncate">Please submit term reports by Friday.</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Student List */}
            <Card>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Student Roster</h3>
                    <div className="w-64">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search student..."
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-gray-400 text-sm border-b border-slate-700">
                                <th className="pb-3 pl-2">Name</th>
                                <th className="pb-3 text-center">Status</th>
                                <th className="pb-3 text-center">Performance</th>
                                <th className="pb-3 text-right pr-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {MOCK_STUDENTS.map((student) => (
                                <tr key={student.id} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group">
                                    <td className="py-3 pl-2 font-medium text-white">{student.name}</td>
                                    <td className="py-3 text-center">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium 
                                            ${student.status === 'Present' ? 'bg-emerald-500/10 text-emerald-400' :
                                                student.status === 'Absent' ? 'bg-rose-500/10 text-rose-400' : 'bg-amber-500/10 text-amber-400'}`}>
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="py-3 text-center font-mono text-gray-300">{student.performance}</td>
                                    <td className="py-3 text-right pr-2">
                                        <Button variant="glass" className="h-8 text-xs px-3">View</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

// Solian Wolves V1.0
