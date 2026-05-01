import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, User, Calendar, Tag, FileText, Trash2, Download } from 'lucide-react';
import { PortfolioItem } from '../../types/portfolio';
import { Button } from '../ui/Button';
import { usePortfolio } from '../../context/PortfolioContext';

interface PortfolioPreviewProps {
    item: PortfolioItem | null;
    onClose: () => void;
}

export const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ item, onClose }) => {
    const { removeItem } = usePortfolio();

    const handleDelete = () => {
        if (item && window.confirm('Are you sure you want to delete this evidence?')) {
            removeItem(item.id);
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {item && (
                <div className="fixed inset-0 z-[110] flex justify-end">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-xl bg-slate-900 h-full shadow-2xl border-l border-white/10 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-white/5">
                            <h2 className="text-xl font-bold text-white">Artifact Details</h2>
                            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                                <X className="w-5 h-5 text-slate-400" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-8">
                            {/* Media View */}
                            <div className="rounded-2xl overflow-hidden bg-black border border-white/5">
                                {item.type === 'image' ? (
                                    <img src={item.url} alt={item.title} className="w-full h-auto" />
                                ) : (
                                    <div className="aspect-[3/4] flex flex-col items-center justify-center text-slate-500 gap-4">
                                        <FileText className="w-20 h-20" />
                                        <p className="font-bold text-lg text-white">PDF Document Preview</p>
                                        <Button variant="outline" size="sm">
                                            <Download className="w-4 h-4 mr-2" /> Open PDF
                                        </Button>
                                    </div>
                                )}
                            </div>

                            {/* Details */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <div className="flex items-center gap-3 text-slate-400">
                                        <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-indigo-400">
                                            {item.area}
                                        </span>
                                        <span className="w-1 h-1 bg-slate-700 rounded-full" />
                                        <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest">
                                            <Calendar className="w-3.5 h-3.5" /> {item.date}
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Student</p>
                                        <div className="flex items-center gap-2 text-white">
                                            <User className="w-4 h-4 text-indigo-400" />
                                            <span className="font-bold">{item.student}</span>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Engagement</p>
                                        <div className="flex items-center gap-2 text-white">
                                            <Heart className="w-4 h-4 text-rose-500" />
                                            <span className="font-bold">{item.likes} Likes</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Description & Feedback</p>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        {item.description || 'This evidence was captured during the morning activity session. The student demonstrated exceptional focus and mastery of the core concepts related to the learning area.'}
                                    </p>
                                </div>

                                {item.tags.length > 0 && (
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Tags</p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded-full border border-indigo-500/20">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-white/5 flex gap-4">
                            <Button variant="outline" className="flex-1 text-rose-500 border-rose-500/20 hover:bg-rose-500/10" onClick={handleDelete}>
                                <Trash2 className="w-4 h-4 mr-2" /> Delete
                            </Button>
                            <Button className="flex-1 btn-primary">
                                Edit Details
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
