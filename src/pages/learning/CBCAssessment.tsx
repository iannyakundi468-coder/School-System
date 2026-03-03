import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Save, Send, User, BookOpen, Layers } from 'lucide-react';

const students = [
    { id: 1, name: 'Alice Wambui', grade: 'Grade 3 Blue' },
    { id: 2, name: 'John Kamau', grade: 'Grade 3 Blue' },
    { id: 3, name: 'Sarah Njeri', grade: 'Grade 3 Blue' },
];

const strands = [
    { id: 1, name: 'Mathematical Activities', subStrands: ['Addition of 3-Digit Numbers', 'Multiplication Tables', 'Measurement of Length'] },
    { id: 2, name: 'Language Activities', subStrands: ['Oral Communication', 'Reading Comprehension', 'Creative Writing'] },
];

const ratings = [
    { label: 'EE', title: 'Exceeding Expectation', color: 'bg-emerald-500', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
    { label: 'ME', title: 'Meeting Expectation', color: 'bg-blue-500', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    { label: 'AE', title: 'Approaching Expectation', color: 'bg-amber-500', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
    { label: 'BE', title: 'Below Expectation', color: 'bg-rose-500', bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
];

export const CBCAssessment = () => {
    const navigate = useNavigate();
    const [selectedStudent, setSelectedStudent] = useState(students[0]);
    const [selectedStrand, setSelectedStrand] = useState(strands[0]);
    const [assessment, setAssessment] = useState<Record<string, string>>({});

    const handleRate = (subStrand: string, rating: string) => {
        setAssessment(prev => ({ ...prev, [subStrand]: rating }));
    };

    return (
        <div className="min-h-screen bg-mesh p-4 md:p-8">
            <div className="max-w-6xl mx-auto space-y-8 animate-in">
                <header className="flex items-center gap-4">
                    <Button variant="outline" className="w-10 h-10 p-0 rounded-full" onClick={() => navigate(-1)}>
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">CBC Assessment Engine</h1>
                        <p className="text-slate-500 font-medium mt-1">Grade-specific Competency Reporting</p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Panel: Selection */}
                    <div className="space-y-6">
                        <div className="glass-card p-6">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <User className="w-4 h-4" /> Select Student
                            </h3>
                            <div className="space-y-2">
                                {students.map(s => (
                                    <button
                                        key={s.id}
                                        onClick={() => setSelectedStudent(s)}
                                        className={`w-full text-left p-4 rounded-xl transition-all duration-200 border ${selectedStudent.id === s.id
                                            ? 'bg-emerald-50 border-emerald-200 text-emerald-700 font-semibold'
                                            : 'bg-white border-slate-100 text-slate-600 hover:bg-slate-50'
                                            }`}
                                    >
                                        <p className="text-sm">{s.name}</p>
                                        <p className="text-[10px] opacity-70 uppercase tracking-wider">{s.grade}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card p-6">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" /> Learning Area
                            </h3>
                            <div className="space-y-2">
                                {strands.map(strand => (
                                    <button
                                        key={strand.id}
                                        onClick={() => setSelectedStrand(strand)}
                                        className={`w-full text-left p-4 rounded-xl transition-all duration-200 border ${selectedStrand.id === strand.id
                                            ? 'bg-blue-50 border-blue-200 text-blue-700 font-semibold'
                                            : 'bg-white border-slate-100 text-slate-600 hover:bg-slate-50'
                                            }`}
                                    >
                                        <p className="text-sm">{strand.name}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Scoring */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="glass-card p-8">
                            <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600">
                                        <Layers className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900">{selectedStrand.name}</h2>
                                        <p className="text-slate-400 text-sm">Assessing: <span className="text-slate-600 font-semibold">{selectedStudent.name}</span></p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-bold text-slate-400 uppercase">Status</p>
                                    <p className="text-amber-500 font-bold text-sm">In Progress</p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                {selectedStrand.subStrands.map(ss => (
                                    <div key={ss} className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <h4 className="font-semibold text-slate-800">{ss}</h4>
                                            {assessment[ss] && (
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${ratings.find(r => r.label === assessment[ss])?.bg} ${ratings.find(r => r.label === assessment[ss])?.text}`}>
                                                    Rated: {assessment[ss]}
                                                </span>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-4 gap-3">
                                            {ratings.map(r => (
                                                <button
                                                    key={r.label}
                                                    onClick={() => handleRate(ss, r.label)}
                                                    className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all duration-200 group ${assessment[ss] === r.label
                                                        ? `${r.bg} ${r.border} border-current scale-[1.02]`
                                                        : 'bg-white border-slate-100 hover:border-slate-200'
                                                        }`}
                                                >
                                                    <span className={`text-sm font-bold ${assessment[ss] === r.label ? r.text : 'text-slate-400 opacity-60'}`}>{r.label}</span>
                                                    <span className="text-[8px] font-bold uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{r.title.split(' ')[0]}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 flex gap-4">
                                <Button className="btn-primary flex-1 h-12">
                                    <Save className="w-5 h-5" /> Save Assessment
                                </Button>
                                <Button variant="outline" className="flex-1 h-12">
                                    <Send className="w-5 h-5" /> Submit to Portal
                                </Button>
                            </div>
                        </div>

                        {/* AI Insights Card (Investor Feature) */}
                        <div className="glass-card p-6 bg-gradient-to-br from-indigo-600 to-blue-700 border-none relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <CheckCircle2 className="w-32 h-32 text-white" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> AI Learning Insight
                                </h3>
                                <p className="text-blue-100 text-sm mt-2 max-w-md">
                                    Based on previous data, {selectedStudent.name.split(' ')[0]} shows strong potential in spatial reasoning. Suggesting advanced 3D modeling sub-strands for next term.
                                </p>
                                <button className="mt-4 text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all">
                                    View personalized learning path
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
