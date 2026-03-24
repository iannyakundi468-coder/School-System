import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Save, Send, User, BookOpen, Layers, Bot, MessageSquareQuote } from 'lucide-react';

const students = [
    { id: 1, name: 'Alice Wambui', grade: 'Grade 6 Emerald' },
    { id: 2, name: 'John Kamau', grade: 'Grade 6 Emerald' },
    { id: 3, name: 'Sarah Njeri', grade: 'Grade 6 Emerald' },
    { id: 4, name: 'Maina Joseph', grade: 'Grade 6 Emerald' },
];

const strands = [
    { id: 1, name: 'Mathematics (CBC)', subStrands: ['Addition of 4-Digit Numbers', 'Market Transactions & Percentages', 'Geometric Shapes'] },
    { id: 2, name: 'Science and Technology', subStrands: ['Indigenous Plants of Nyanza', 'Human Body Systems', 'The Water Cycle'] },
    { id: 3, name: 'Social Studies & RE', subStrands: ['Pre-colonial History of Kisii County', 'Kenyan National Symbols', 'Values and Ethics'] },
];

const ratings = [
    { label: 'EE', title: 'Exceeding Expectation', color: 'bg-indigo-500', bg: 'bg-indigo-500/20', text: 'text-indigo-400', border: 'border-indigo-500/30' },
    { label: 'ME', title: 'Meeting Expectation', color: 'bg-sky-500', bg: 'bg-sky-500/20', text: 'text-sky-400', border: 'border-sky-500/30' },
    { label: 'AE', title: 'Approaching Expectation', color: 'bg-amber-500', bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
    { label: 'BE', title: 'Below Expectation', color: 'bg-rose-500', bg: 'bg-rose-500/20', text: 'text-rose-400', border: 'border-rose-500/30' },
];

export const CBCAssessment = () => {
    const navigate = useNavigate();
    const [selectedStudent, setSelectedStudent] = useState(students[0]);
    const [selectedStrand, setSelectedStrand] = useState(strands[0]);
    const [assessment, setAssessment] = useState<Record<string, string>>({});
    const [aiComment, setAiComment] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const handleRate = (subStrand: string, rating: string) => {
        setAssessment(prev => ({ ...prev, [subStrand]: rating }));
    };

    const generateAIComment = () => {
        setIsGenerating(true);
        setTimeout(() => {
            const hasEE = Object.values(assessment).includes('EE');
            const name = selectedStudent.name.split(' ')[0];
            const comment = hasEE
                ? `${name} has shown exceptional mastery in ${selectedStrand.name.toLowerCase()}. They demonstrate high-level critical thinking and apply concepts independently.`
                : `${name} is meeting expectations in ${selectedStrand.name.toLowerCase()}. I recommend focus on consistent practice to bridgeApproaching Expectation areas into Meeting Expectation.`;
            setAiComment(comment);
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-mesh p-4 md:p-8">
            <div className="max-w-6xl mx-auto space-y-8 animate-in">
                <header className="flex items-center gap-4">
                    <Button variant="outline" className="w-10 h-10 p-0 rounded-full" onClick={() => navigate(-1)}>
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold text-white">CBC Assessment Engine</h1>
                        <p className="text-slate-500 font-medium mt-1">Grade-specific Competency Reporting</p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Panel: Selection */}
                    <div className="space-y-6">
                        <div className="glass-card p-6">
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <User className="w-4 h-4" /> Select Student
                            </h3>
                            <div className="space-y-2">
                                {students.map(s => (
                                    <button
                                        key={s.id}
                                        onClick={() => setSelectedStudent(s)}
                                        className={`w-full text-left p-4 rounded-xl transition-all duration-200 border ${selectedStudent.id === s.id
                                            ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400 font-semibold'
                                            : 'bg-slate-900 border-white/5 text-slate-400 hover:bg-slate-800 hover:border-white/10'
                                            }`}
                                    >
                                        <p className="text-sm">{s.name}</p>
                                        <p className="text-[10px] opacity-70 uppercase tracking-wider">{s.grade}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card p-6">
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" /> Learning Area
                            </h3>
                            <div className="space-y-2">
                                {strands.map(strand => (
                                    <button
                                        key={strand.id}
                                        onClick={() => setSelectedStrand(strand)}
                                        className={`w-full text-left p-4 rounded-xl transition-all duration-200 border ${selectedStrand.id === strand.id
                                            ? 'bg-sky-500/10 border-sky-500/20 text-sky-400 font-semibold'
                                            : 'bg-slate-900 border-white/5 text-slate-400 hover:bg-slate-800 hover:border-white/10'
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
                            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400">
                                        <Layers className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-white">{selectedStrand.name}</h2>
                                        <p className="text-slate-400 text-sm">Assessing: <span className="text-slate-200 font-semibold">{selectedStudent.name}</span></p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-bold text-slate-500 uppercase">Status</p>
                                    <p className="text-amber-400 font-bold text-sm">In Progress</p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                {selectedStrand.subStrands.map(ss => (
                                    <div key={ss} className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <h4 className="font-semibold text-slate-200">{ss}</h4>
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
                                                        : 'bg-slate-900 border-white/5 hover:border-white/20'
                                                        }`}
                                                >
                                                    <span className={`text-sm font-bold ${assessment[ss] === r.label ? r.text : 'text-slate-500 opacity-60'}`}>{r.label}</span>
                                                    <span className="text-[8px] font-bold uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{r.title.split(' ')[0]}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* AI Comment Generator */}
                            <div className="mt-12 pt-8 border-t border-white/5">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <MessageSquareQuote className="w-5 h-5 text-purple-400" /> Professional Comments
                                    </h3>
                                    <Button
                                        onClick={generateAIComment}
                                        disabled={isGenerating || Object.keys(assessment).length === 0}
                                        variant="glass"
                                        className="text-[10px] h-8 gap-2 bg-purple-500/10 text-purple-400 border-purple-500/20"
                                    >
                                        <Bot className={`w-3 h-3 ${isGenerating ? 'animate-spin' : ''}`} />
                                        {aiComment ? 'Draft New Comment' : 'Draft AI Comment'}
                                    </Button>
                                </div>

                                {aiComment ? (
                                    <div className="animate-in slide-in-from-top-4">
                                        <textarea
                                            value={aiComment}
                                            onChange={(e) => setAiComment(e.target.value)}
                                            className="w-full bg-slate-900/50 border border-purple-500/20 rounded-xl p-4 text-sm text-slate-200 focus:outline-none focus:border-purple-500/50 min-h-[100px]"
                                            placeholder="Drafting professional comment..."
                                        />
                                        <p className="text-[10px] text-slate-500 mt-2 font-medium">AI generated a personalized comment based on {Object.keys(assessment).length} assessment points.</p>
                                    </div>
                                ) : (
                                    <div className="p-8 border-2 border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center text-slate-600">
                                        <Bot className="w-8 h-8 opacity-20 mb-2" />
                                        <p className="text-xs">Select ratings to enable AI comment drafting.</p>
                                    </div>
                                )}
                            </div>

                            <div className="mt-12 flex gap-4">
                                <Button className="btn-primary flex-1 h-12">
                                    <Save className="w-5 h-5" /> Save Assessment
                                </Button>
                                <Button variant="outline" className="flex-1 h-12 border-white/10 text-white hover:bg-white/5">
                                    <Send className="w-5 h-5" /> Submit to Portal
                                </Button>
                            </div>
                        </div>

                        {/* AI Insights Card (Investor Feature) */}
                        <div className="glass-card p-6 bg-gradient-to-br from-indigo-600 to-sky-700 border-none relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <CheckCircle2 className="w-32 h-32 text-white" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" /> AI Learning Insight
                                </h3>
                                <p className="text-sky-100 text-sm mt-2 max-w-md">
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
