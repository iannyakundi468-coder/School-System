import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ChevronLeft, Download, TrendingUp, BookOpen, Clock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const StudentReport = () => {
    const navigate = useNavigate();
    const [selectedTerm, setSelectedTerm] = useState('Term 1 - 2026');

    // Mock Data
    const student = {
        name: "Ian Doe",
        id: "STU-2024-001",
        class: "Class 4A",
        attendance: 98,
        overallGrade: "B+",
        position: "5th / 32"
    };

    const subjects = [
        { name: "Mathematics", score: 85, grade: "A", teacher: "Mr. Smith" },
        { name: "English", score: 78, grade: "B+", teacher: "Mrs. Johnson" },
        { name: "Science", score: 92, grade: "A+", teacher: "Ms. Davis" },
        { name: "Social Studies", score: 70, grade: "B", teacher: "Mr. Wilson" },
        { name: "Kiswahili", score: 88, grade: "A", teacher: "Mr. Kamau" },
    ];

    const comments = [
        { teacher: "Class Teacher", comment: "Ian is a disciplined student who participates well in class. He needs to improve his handwriting." },
        { teacher: "Sports Coach", comment: "Excellent performance in the inter-house football tournament." }
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white p-4 md:p-8 animate-fade-in">
            <div className="max-w-5xl mx-auto space-y-6">

                {/* Header / Nav */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <Button variant="glass" onClick={() => navigate(-1)} className="gap-2 text-sm">
                        <ChevronLeft className="w-4 h-4" /> Back to Dashboard
                    </Button>
                    <div className="flex gap-2">
                        <select
                            className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-emerald-500"
                            value={selectedTerm}
                            onChange={(e) => setSelectedTerm(e.target.value)}
                        >
                            <option>Term 1 - 2026</option>
                            <option>Term 3 - 2025</option>
                            <option>Term 2 - 2025</option>
                        </select>
                        <Button className="gap-2">
                            <Download className="w-4 h-4" /> Download PDF
                        </Button>
                    </div>
                </div>

                {/* Student Profile Card */}
                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                        <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center border-2 border-emerald-500/50">
                            <span className="text-3xl">👨‍🎓</span>
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-white mb-2">{student.name}</h1>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-emerald-400" /> {student.id}</span>
                                <span className="flex items-center gap-1"><Users className="w-4 h-4 text-blue-400" /> {student.class}</span>
                            </div>
                        </div>
                        <div className="flex gap-8 text-center bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                            <div>
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Overall Grade</p>
                                <p className="text-4xl font-bold text-emerald-400">{student.overallGrade}</p>
                            </div>
                            <div className="w-px bg-slate-700"></div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Attendance</p>
                                <p className="text-4xl font-bold text-blue-400">{student.attendance}%</p>
                            </div>
                        </div>
                    </div>
                </Card>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Subject Performance */}
                    <Card className="md:col-span-2">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-emerald-400" /> Subject Performance
                        </h3>
                        <div className="space-y-6">
                            {subjects.map((subject) => (
                                <div key={subject.name} className="group">
                                    <div className="flex justify-between items-end mb-2">
                                        <div>
                                            <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors">{subject.name}</h4>
                                            <p className="text-xs text-gray-500">{subject.teacher}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xl font-bold text-white">{subject.score}%</span>
                                            <span className={`ml-2 text-xs px-2 py-0.5 rounded ${subject.grade === 'A' || subject.grade === 'A-' ? 'bg-emerald-500/20 text-emerald-400' :
                                                    subject.grade.startsWith('B') ? 'bg-blue-500/20 text-blue-400' :
                                                        'bg-amber-500/20 text-amber-400'
                                                }`}>{subject.grade}</span>
                                        </div>
                                    </div>
                                    <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                                            style={{ width: `${subject.score}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Side Panel: Analysis & Comments */}
                    <div className="space-y-6">
                        <Card>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-blue-400" /> Attendance Log
                            </h3>
                            <div className="flex items-center justify-center py-6">
                                <div className="relative w-40 h-40">
                                    {/* Simple CSS-based circular progress would go here, using a static image for now or simpler div structure */}
                                    <div className="w-full h-full rounded-full border-8 border-slate-700 flex items-center justify-center relative">
                                        <div className="absolute inset-0 rounded-full border-8 border-blue-500 border-t-transparent border-l-transparent rotate-45 transform"></div>
                                        <div className="text-center">
                                            <span className="text-3xl font-bold text-white">98%</span>
                                            <p className="text-xs text-gray-400">Present</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-center text-sm">
                                <div className="bg-slate-800/50 p-2 rounded-lg">
                                    <span className="block text-emerald-400 font-bold">58</span>
                                    <span className="text-gray-500">Days Present</span>
                                </div>
                                <div className="bg-slate-800/50 p-2 rounded-lg">
                                    <span className="block text-rose-400 font-bold">2</span>
                                    <span className="text-gray-500">Days Absent</span>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-amber-400" /> Teacher's Remarks
                            </h3>
                            <div className="space-y-4">
                                {comments.map((item, idx) => (
                                    <div key={idx} className="bg-slate-800/30 p-3 rounded-lg border border-slate-700/50">
                                        <p className="text-xs text-emerald-400 font-bold mb-1 uppercase">{item.teacher}</p>
                                        <p className="text-sm text-gray-300 italic">"{item.comment}"</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Icon component that was missing in imports
const Users = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

// Solian Wolves V1.0
