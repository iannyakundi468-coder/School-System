import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CourseCard } from '../../components/learning/CourseCard';
import { BookOpen, Download, PlayCircle, Clock, CheckCircle } from 'lucide-react';
import { GeminiTutor } from '../../components/ai/GeminiTutor';

export const HomeLearningPage = () => {
    const [activeTab, setActiveTab] = useState<'courses' | 'assignments' | 'materials'>('courses');

    return (
        <div className="min-h-screen bg-mesh text-white p-4 md:p-8 animate-fade-in relative">
            <div className="max-w-7xl mx-auto space-y-8">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/5">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                            Home Learning Hub
                        </h1>
                        <p className="text-gray-400 mt-1 font-medium italic">Premium CBC-aligned digital learning experience.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Button
                            variant={activeTab === 'courses' ? 'primary' : 'glass'}
                            onClick={() => setActiveTab('courses')}
                            className="text-xs px-6 h-10"
                        >
                            My Courses
                        </Button>
                        <Button
                            variant={activeTab === 'assignments' ? 'primary' : 'glass'}
                            onClick={() => setActiveTab('assignments')}
                            className="text-xs px-6 h-10"
                        >
                            Assignments
                        </Button>
                        <Button
                            variant={activeTab === 'materials' ? 'primary' : 'glass'}
                            onClick={() => setActiveTab('materials')}
                            className="text-xs px-6 h-10"
                        >
                            Resources
                        </Button>
                    </div>
                </header>

                <div className="mt-8">
                    {activeTab === 'courses' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <CourseCard
                                title="Mathematics - Grade 6 (CBC)"
                                progress={65}
                                nextLesson="Fractions and Decimals"
                                color="emerald"
                            />
                            <CourseCard
                                title="Science and Technology - Grade 6"
                                progress={40}
                                nextLesson="The Water Cycle"
                                color="blue"
                                icon={BookOpen}
                            />
                            <CourseCard
                                title="Social Studies & Religious Education"
                                progress={85}
                                nextLesson="Pre-colonial History of Kisii County"
                                color="amber"
                            />
                            <CourseCard
                                title="English & Kiswahili Literacy"
                                progress={20}
                                nextLesson="Verbs and Tenses"
                                color="rose"
                            />
                        </div>
                    )}

                    {activeTab === 'assignments' && (
                        <div className="space-y-6 max-w-4xl">
                            <Card className="flex items-center justify-between group hover:border-emerald-500/50 transition-all p-6 backdrop-blur-md bg-slate-900/40">
                                <div className="flex items-center gap-5">
                                    <div className="p-4 bg-rose-500/10 rounded-2xl text-rose-400 border border-rose-500/20">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg group-hover:text-emerald-400 transition-colors">CBC Math: Market Transactions & Percentages</h3>
                                        <p className="text-sm text-gray-400">Deadline: Tomorrow, 4:00 PM • Priority High</p>
                                    </div>
                                </div>
                                <Button variant="glass" className="px-8 border-white/10">Start</Button>
                            </Card>

                            <Card className="flex items-center justify-between group hover:border-emerald-500/50 transition-all p-6 backdrop-blur-md bg-slate-900/40">
                                <div className="flex items-center gap-5">
                                    <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 border border-blue-500/20">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg group-hover:text-emerald-400 transition-colors">Science: Indigenous Plants of Nyanza</h3>
                                        <p className="text-sm text-gray-400">Deadline: Friday, 20th Oct • Term Project</p>
                                    </div>
                                </div>
                                <Button variant="glass" className="px-8 border-white/10">Start</Button>
                            </Card>

                            <h3 className="text-slate-500 text-xs font-bold mt-12 mb-4 px-2 uppercase tracking-widest">Completed Portfolio Pieces</h3>
                            <Card className="flex items-center justify-between opacity-60 p-6 bg-slate-900/20 border-white/5">
                                <div className="flex items-center gap-5">
                                    <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400 border border-emerald-500/20">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-300">English: Comprehension</h3>
                                        <p className="text-sm text-gray-500">Submitted: Yesterday • Grade 6 Emerald</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-emerald-400 text-xl font-black">95/100</span>
                                    <p className="text-[10px] text-emerald-500/60 font-bold uppercase">Excellent</p>
                                </div>
                            </Card>
                        </div>
                    )}

                    {activeTab === 'materials' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card className="bg-slate-900/40 border-slate-800 p-8 backdrop-blur-md">
                                <h3 className="font-bold text-white text-xl mb-6 flex items-center gap-3">
                                    <Download className="w-5 h-5 text-emerald-400" /> Study Guides
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { name: 'Math Formula Sheet.pdf', size: '2.4 MB' },
                                        { name: 'Science Diagrams.pdf', size: '5.1 MB' },
                                        { name: 'English Grammar Rules.pdf', size: '1.2 MB' }
                                    ].map((file, i) => (
                                        <div key={i} className="flex justify-between items-center p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-all cursor-pointer border border-white/5">
                                            <span className="text-sm text-gray-300 font-medium">{file.name}</span>
                                            <span className="text-[10px] font-bold text-slate-500 bg-slate-900 px-2 py-1 rounded-md">{file.size}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            <Card className="bg-slate-900/40 border-slate-800 p-8 backdrop-blur-md">
                                <h3 className="font-bold text-white text-xl mb-6 flex items-center gap-3">
                                    <PlayCircle className="w-5 h-5 text-rose-400" /> Video Library
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { name: 'Intro to Algebra (Video)', duration: '12:30' },
                                        { name: 'Photosynthesis Explained', duration: '08:45' }
                                    ].map((video, i) => (
                                        <div key={i} className="flex justify-between items-center p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-all cursor-pointer border border-white/5">
                                            <span className="text-sm text-gray-300 font-medium">{video.name}</span>
                                            <span className="text-[10px] font-bold text-slate-500 bg-slate-900 px-2 py-1 rounded-md">{video.duration}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    )}
                </div>

                {/* AI Tutor Integration */}
                <GeminiTutor />
            </div>
        </div>
    );
    );
};
