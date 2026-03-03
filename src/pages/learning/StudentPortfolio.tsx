import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, Plus, Camera, FolderOpen, Heart, User } from 'lucide-react';

const portfolios = [
    { id: 1, title: 'Clay Modeling - Farm Animals', date: '2026-03-01', student: 'Alice Wambui', image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&q=80', likes: 12, area: 'Creative Arts' },
    { id: 2, title: 'Drawing: My Neighborhood', date: '2026-02-28', student: 'Sarah Njeri', image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=500&q=80', likes: 8, area: 'Language' },
    { id: 3, title: 'Number Chart Construction', date: '2026-02-25', student: 'John Kamau', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80', likes: 15, area: 'Mathematics' },
    { id: 4, title: 'Singing Game: Mtoto Wetu', date: '2026-02-20', student: 'James Maina', image: 'https://images.unsplash.com/photo-1514466750941-c80f08779607?w=500&q=80', likes: 20, area: 'Music' },
];

export const StudentPortfolio = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-mesh p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8 animate-in">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-center gap-4">
                        <Button variant="outline" className="w-10 h-10 p-0 rounded-full border-white/10 text-slate-300" onClick={() => navigate(-1)}>
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <div>
                            <h1 className="text-3xl font-bold text-white">Student Portfolios</h1>
                            <p className="text-slate-400 font-medium tracking-tight">Digital evidence of competency-based learning.</p>
                        </div>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <Button variant="outline" className="flex-1 md:flex-none h-11 border-white/10 text-slate-300">
                            <Camera className="w-4 h-4 mr-2" /> Quick Snap
                        </Button>
                        <Button className="btn-primary flex-1 md:flex-none h-11">
                            <Plus className="w-4 h-4 mr-2" /> Upload Work
                        </Button>
                    </div>
                </header>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 pb-4 border-b border-white/5">
                    {['All Submissions', 'Grade 1', 'Grade 2', 'Grade 3', 'Mathematics', 'Language', 'Environmental'].map((f, i) => (
                        <button key={i} className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${i === 0 ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-white/5'}`}>
                            {f}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {portfolios.map((item) => (
                        <div key={item.id} className="glass-card flex flex-col group overflow-hidden">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <p className="text-white text-xs font-medium flex items-center gap-1">
                                        <User className="w-3 h-3" /> {item.student}
                                    </p>
                                </div>
                                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-emerald-400 shadow-sm">
                                    {item.area}
                                </div>
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-white font-bold text-sm leading-tight mb-2">{item.title}</h3>
                                <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/5">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.date}</span>
                                    <div className="flex items-center gap-1.5 text-rose-500 cursor-pointer">
                                        <Heart className="w-4 h-4" />
                                        <span className="text-xs font-bold">{item.likes}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Investor Spotlight (Value Prop) */}
                <div className="glass-card p-10 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <FolderOpen className="w-48 h-48" />
                    </div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent italic">Impact Reporting</h2>
                            <p className="mt-4 text-slate-400 leading-relaxed">
                                Our portfolio system doesn't just store images; it maps every submission to a specific CBC competency strand. This provides parents with a visual "Living Report" of their child's growth, significantly increasing customer retention and satisfaction.
                            </p>
                            <div className="mt-8 flex gap-6">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-emerald-400">85%</p>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase mt-1">Parent Engagement</p>
                                </div>
                                <div className="w-px h-12 bg-slate-800" />
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-blue-400">1.2M</p>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase mt-1">Artifacts Stored</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex justify-center">
                            <div className="w-64 h-64 border-4 border-emerald-500/20 rounded-full flex items-center justify-center relative">
                                <div className="w-48 h-48 border-4 border-blue-500/20 rounded-full flex items-center justify-center">
                                    <div className="w-32 h-32 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40">
                                        <Plus className="w-12 h-12 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
