import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, FileText, Image as ImageIcon, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { usePortfolio } from '../../context/PortfolioContext';

interface EvidenceUploadProps {
    isOpen: boolean;
    onClose: () => void;
}

export const EvidenceUpload: React.FC<EvidenceUploadProps> = ({ isOpen, onClose }) => {
    const { addItem } = usePortfolio();
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [title, setTitle] = useState('');
    const [student, setStudent] = useState('');
    const [area, setArea] = useState('Creative Arts');
    const [isDragging, setIsDragging] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            processFile(selectedFile);
        }
    };

    const processFile = (selectedFile: File) => {
        if (selectedFile.type.startsWith('image/') || selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
            const url = URL.createObjectURL(selectedFile);
            setPreviewUrl(url);
        } else {
            alert('Please upload an image or PDF file.');
        }
    };

    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const onDragLeave = () => {
        setIsDragging(false);
    };

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            processFile(droppedFile);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file || !title || !student) return;

        setIsSubmitting(true);
        // Simulate upload
        await new Promise(resolve => setTimeout(resolve, 1000));

        addItem({
            title,
            student,
            area,
            type: file.type.startsWith('image/') ? 'image' : 'pdf',
            url: previewUrl || '',
            tags: []
        });

        setIsSubmitting(false);
        reset();
        onClose();
    };

    const reset = () => {
        setFile(null);
        setPreviewUrl(null);
        setTitle('');
        setStudent('');
        setArea('Creative Arts');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-slate-900 border border-white/10 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl"
                    >
                        <div className="flex justify-between items-center p-6 border-b border-white/5">
                            <h2 className="text-xl font-bold text-white">Upload Student Evidence</h2>
                            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                                <X className="w-5 h-5 text-slate-400" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-8">
                            {!file ? (
                                <div
                                    onDragOver={onDragOver}
                                    onDragLeave={onDragLeave}
                                    onDrop={onDrop}
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`relative border-2 border-dashed rounded-2xl p-12 flex flex-col items-center justify-center gap-4 transition-all cursor-pointer ${
                                        isDragging ? 'border-indigo-500 bg-indigo-500/10' : 'border-white/10 hover:border-white/20 bg-white/5'
                                    }`}
                                >
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="hidden"
                                        accept="image/*,.pdf"
                                    />
                                    <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400">
                                        <Upload className="w-8 h-8" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-white font-bold">Click to upload or drag and drop</p>
                                        <p className="text-slate-500 text-sm mt-1">Images or PDFs up to 10MB</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="relative aspect-video rounded-xl bg-slate-800 overflow-hidden border border-white/5">
                                            {file.type.startsWith('image/') ? (
                                                <img src={previewUrl || ''} className="w-full h-full object-cover" alt="Preview" />
                                            ) : (
                                                <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 gap-2">
                                                    <FileText className="w-12 h-12" />
                                                    <span className="text-xs font-medium">PDF Document</span>
                                                </div>
                                            )}
                                            <button
                                                type="button"
                                                onClick={() => { setFile(null); setPreviewUrl(null); }}
                                                className="absolute top-2 right-2 p-1.5 bg-black/50 text-white rounded-lg hover:bg-black/70"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                                            <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400">
                                                {file.type.startsWith('image/') ? <ImageIcon size={20} /> : <FileText size={20} />}
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <p className="text-white text-xs font-bold truncate">{file.name}</p>
                                                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Evidence Title</label>
                                            <input
                                                required
                                                value={title}
                                                onChange={e => setTitle(e.target.value)}
                                                placeholder="e.g. Clay Modeling - Farm Animals"
                                                className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Student Name</label>
                                            <input
                                                required
                                                value={student}
                                                onChange={e => setStudent(e.target.value)}
                                                placeholder="Enter student name"
                                                className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Learning Area</label>
                                            <select
                                                value={area}
                                                onChange={e => setArea(e.target.value)}
                                                className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                                            >
                                                <option value="Creative Arts">Creative Arts</option>
                                                <option value="Mathematics">Mathematics</option>
                                                <option value="Language">Language</option>
                                                <option value="Music">Music</option>
                                                <option value="Science">Science</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="flex gap-4 pt-4 border-t border-white/5">
                                <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button type="submit" className="flex-1 btn-primary" isLoading={isSubmitting} disabled={!file || !title || !student}>
                                    Save Evidence
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
