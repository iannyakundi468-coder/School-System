import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { 
    ArrowLeft, Plus, Camera, FolderOpen, Heart, User, 
    LayoutGrid, List, Search, Filter, SlidersHorizontal 
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { EvidenceUpload } from '../../components/portfolio/EvidenceUpload';
import { PortfolioPreview } from '../../components/portfolio/PortfolioPreview';
import { PortfolioItem } from '../../types/portfolio';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '../../components/ui/LanguageToggle';
import { GamificationStats } from '../../components/ui/GamificationStats';

export const StudentPortfolio = () => {
    const navigate = useNavigate();
    const { items } = usePortfolio();
    const { t } = useTranslation();
    
    // UI State
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [isUploadOpen, setIsUploadOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('All Submissions');

    // Filtering Logic
    const filteredItems = useMemo(() => {
        return items.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 item.student.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilter = activeFilter === 'All Submissions' || item.area === activeFilter;
            return matchesSearch && matchesFilter;
        });
    }, [items, searchQuery, activeFilter]);

    return (
        <div className="min-h-screen bg-mesh p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8 animate-in">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-center gap-4">
                        <Button variant="outline" className="w-10 h-10 p-0 rounded-full border-white/10 text-slate-300" onClick={() => navigate(-1)}>
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <div>
                            <h1 className="text-3xl font-bold text-white">{t('portfolio')}</h1>
                            <p className="text-slate-400 font-medium tracking-tight">Digital evidence of blended academic progress.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-end md:items-center gap-4">
                        <div className="flex items-center gap-3">
                            <GamificationStats />
                            <LanguageToggle />
                        </div>
                        <div className="flex gap-3 w-full md:w-auto">
                            <Button variant="outline" className="flex-1 md:flex-none h-11 border-white/10 text-slate-300">
                                <Camera className="w-4 h-4 mr-2" /> Quick Snap
                            </Button>
                            <Button className="btn-primary flex-1 md:flex-none h-11" onClick={() => setIsUploadOpen(true)}>
                                <Plus className="w-4 h-4 mr-2" /> {t('upload')}
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Toolbar */}
                <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center bg-slate-900/40 p-4 rounded-2xl border border-white/5 backdrop-blur-md">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input 
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Search students or artifacts..."
                            className="w-full h-10 bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                    </div>

                    <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        <div className="flex bg-white/5 p-1 rounded-lg border border-white/10 mr-2">
                            <button 
                                onClick={() => setViewMode('grid')}
                                className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                                <LayoutGrid className="w-4 h-4" />
                            </button>
                            <button 
                                onClick={() => setViewMode('list')}
                                className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                                <List className="w-4 h-4" />
                            </button>
                        </div>
                        <Button variant="outline" size="sm" className="h-9 border-white/10 text-slate-400">
                            <SlidersHorizontal className="w-3.5 h-3.5 mr-2" /> More Filters
                        </Button>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 pb-4 border-b border-white/5">
                    {['All Submissions', 'Creative Arts', 'Mathematics', 'Language', 'Science', 'Music'].map((f, i) => (
                        <button 
                            key={i} 
                            onClick={() => setActiveFilter(f)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeFilter === f ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 border border-white/5'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Portfolio Display */}
                {filteredItems.length === 0 ? (
                    <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 glass-card border-dashed">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-600">
                            <FolderOpen className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold">No evidence found</h3>
                            <p className="text-slate-500 text-sm max-w-xs mt-1">Try adjusting your search or filters, or upload new evidence.</p>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => {setSearchQuery(''); setActiveFilter('All Submissions');}}>
                            Clear All Filters
                        </Button>
                    </div>
                ) : viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredItems.map((item) => (
                            <div 
                                key={item.id} 
                                onClick={() => setSelectedItem(item)}
                                className="glass-card flex flex-col group overflow-hidden cursor-pointer hover:border-indigo-500/30 transition-colors"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    {item.type === 'image' ? (
                                        <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    ) : (
                                        <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
                                            <FileText className="w-10 h-10" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                        <p className="text-white text-xs font-medium flex items-center gap-1">
                                            <User className="w-3 h-3" /> {item.student}
                                        </p>
                                    </div>
                                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-indigo-400 shadow-sm">
                                        {item.area}
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-white font-bold text-sm leading-tight mb-2 group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                                    <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/5">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.date}</span>
                                        <div className="flex items-center gap-1.5 text-rose-500">
                                            <Heart className="w-4 h-4" />
                                            <span className="text-xs font-bold">{item.likes}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-3">
                        {filteredItems.map((item) => (
                            <div 
                                key={item.id} 
                                onClick={() => setSelectedItem(item)}
                                className="glass-card p-4 flex items-center gap-6 cursor-pointer hover:border-indigo-500/30 transition-all group"
                            >
                                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-800">
                                    {item.type === 'image' ? (
                                        <img src={item.url} className="w-full h-full object-cover" alt="" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-500">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-white font-bold text-sm truncate group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{item.area}</span>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.student}</span>
                                    </div>
                                </div>
                                <div className="text-right flex-shrink-0 hidden md:block">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.date}</p>
                                    <div className="flex items-center justify-end gap-1.5 text-rose-500 mt-1">
                                        <Heart className="w-3.5 h-3.5" />
                                        <span className="text-xs font-bold">{item.likes}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modals & Overlays */}
            <EvidenceUpload 
                isOpen={isUploadOpen} 
                onClose={() => setIsUploadOpen(false)} 
            />
            
            <PortfolioPreview 
                item={selectedItem} 
                onClose={() => setSelectedItem(null)} 
            />
        </div>
    );
};
