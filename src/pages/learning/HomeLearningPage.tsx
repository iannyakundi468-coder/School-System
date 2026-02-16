import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CourseCard } from '../../components/learning/CourseCard';
import { BookOpen, Download, PlayCircle, Clock, CheckCircle } from 'lucide-react';
import { GeminiTutor } from '../../components/ai/GeminiTutor';

export const HomeLearningPage = () => {
    const [activeTab, setActiveTab] = useState<'courses' | 'assignments' | 'materials'>('courses');

    return (
        <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8 ml-0 md:ml-64 animate-fade-in relative">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                        Home Learning
                    </h1>
                    <p className="text-gray-400 mt-1">Access your courses, assignments, and study materials.</p>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant={activeTab === 'courses' ? 'primary' : 'glass'}
                        onClick={() => setActiveTab('courses')}
                        className="text-xs"
                    >
                        My Courses
                    </Button>
                    <Button
                        variant={activeTab === 'assignments' ? 'primary' : 'glass'}
                        onClick={() => setActiveTab('assignments')}
                        className="text-xs"
                    >
                        Assignments
                    </Button>
                    <Button
                        variant={activeTab === 'materials' ? 'primary' : 'glass'}
                        onClick={() => setActiveTab('materials')}
                        className="text-xs"
                    >
                        Resources
                    </Button>
                </div>
            </header>

            {activeTab === 'courses' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <CourseCard
                        title="Mathematics - Grade 5"
                        progress={65}
                        nextLesson="Fractions and Decimals"
                        color="emerald"
                    />
                    <CourseCard
                        title="Integrated Science"
                        progress={40}
                        nextLesson="The Water Cycle"
                        color="blue"
                        icon={BookOpen}
                    />
                    <CourseCard
                        title="Social Studies"
                        progress={85}
                        nextLesson="History of Kenya"
                        color="amber"
                    />
                    <CourseCard
                        title="English Language"
                        progress={20}
                        nextLesson="Verbs and Tenses"
                        color="rose"
                    />
                </div>
            )}

            {activeTab === 'assignments' && (
                <div className="space-y-4 max-w-4xl">
                    <Card className="flex items-center justify-between group hover:border-emerald-500/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-rose-500/20 rounded-lg text-rose-400">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white group-hover:text-emerald-400 transition-colors">Math: Fractional Problems</h3>
                                <p className="text-sm text-gray-400">Due: Tomorrow, 4:00 PM</p>
                            </div>
                        </div>
                        <Button variant="glass">Start</Button>
                    </Card>

                    <Card className="flex items-center justify-between group hover:border-emerald-500/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white group-hover:text-emerald-400 transition-colors">Science: Plant Life Cycle</h3>
                                <p className="text-sm text-gray-400">Due: Friday, 20th Oct</p>
                            </div>
                        </div>
                        <Button variant="glass">Start</Button>
                    </Card>

                    <h3 className="text-gray-500 text-sm font-bold mt-8 mb-2 px-2">Completed</h3>
                    <Card className="flex items-center justify-between opacity-60">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-300">English: Comprehension</h3>
                                <p className="text-sm text-gray-500">Submitted: Yesterday</p>
                            </div>
                        </div>
                        <span className="text-emerald-400 text-sm font-bold">95/100</span>
                    </Card>
                </div>
            )}

            {activeTab === 'materials' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-slate-900/50 border-slate-800">
                        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                            <Download className="w-4 h-4 text-emerald-400" /> Study Guides
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                                <span className="text-sm text-gray-300">Math Formula Sheet.pdf</span>
                                <span className="text-xs text-gray-500">2.4 MB</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                                <span className="text-sm text-gray-300">Science Diagrams.pdf</span>
                                <span className="text-xs text-gray-500">5.1 MB</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                                <span className="text-sm text-gray-300">English Grammar Rules.pdf</span>
                                <span className="text-xs text-gray-500">1.2 MB</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-slate-900/50 border-slate-800">
                        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                            <PlayCircle className="w-4 h-4 text-rose-400" /> Video Library
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                                <span className="text-sm text-gray-300">Intro to Algebra (Video)</span>
                                <span className="text-xs text-gray-500">12:30</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                                <span className="text-sm text-gray-300">Photosynthesis Explained</span>
                                <span className="text-xs text-gray-500">08:45</span>
                            </div>
                        </div>
                    </Card>
                </div>
            )}

            {/* AI Tutor Integration - Always available on Learning Page (if enabled by teacher) */}
            <GeminiTutor />
        </div>
    );
};
