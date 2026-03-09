import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { BookOpen, CheckCircle, Lock, PlayCircle, FileText, ChevronRight } from 'lucide-react';

const MODULES = [
    {
        id: 1,
        title: 'Unit 1: Foundations of CBC Mathematics',
        description: 'Master the core principles of the new Competency Based Curriculum.',
        lessons: [
            { title: 'Numbers and Operations', status: 'completed', type: 'reading' },
            { title: 'Algebraic Expressions', status: 'in-progress', type: 'video' },
            { title: 'Geometric Shapes', status: 'locked', type: 'quiz' },
        ],
        progress: 66,
    },
    {
        id: 2,
        title: 'Unit 2: Real-World Applications',
        description: 'Applying mathematical concepts to everyday business and market scenarios.',
        lessons: [
            { title: 'Market Transactions', status: 'locked', type: 'reading' },
            { title: 'Percentage and Profit', status: 'locked', type: 'video' },
        ],
        progress: 0,
    }
];

export const CourseModules = () => {
    return (
        <div className="space-y-8 animate-in">
            {MODULES.map((module) => (
                <Card key={module.id} className="p-0 overflow-hidden border-white/5 bg-slate-900/40 backdrop-blur-xl">
                    <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] bg-indigo-500/10 px-3 py-1 rounded-lg">Module {module.id}</span>
                                <span className="text-[10px] font-bold text-slate-500 uppercase">{module.progress}% Complete</span>
                            </div>
                            <h3 className="text-2xl font-black text-white tracking-tight">{module.title}</h3>
                            <p className="text-slate-400 text-sm mt-1 font-medium italic">{module.description}</p>
                        </div>
                        <div className="h-2 w-32 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${module.progress}%` }} />
                        </div>
                    </div>

                    <div className="divide-y divide-white/5">
                        {module.lessons.map((lesson, idx) => (
                            <div key={idx} className="p-6 flex items-center justify-between group hover:bg-white/[0.02] transition-colors cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl border ${lesson.status === 'completed' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                                            lesson.status === 'in-progress' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                                                'bg-slate-800 border-white/5 text-slate-500'
                                        }`}>
                                        {lesson.status === 'completed' ? <CheckCircle className="w-5 h-5" /> :
                                            lesson.status === 'locked' ? <Lock className="w-5 h-5" /> :
                                                lesson.type === 'video' ? <PlayCircle className="w-5 h-5" /> :
                                                    <FileText className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <p className={`font-bold text-sm ${lesson.status === 'locked' ? 'text-slate-500' : 'text-white'}`}>{lesson.title}</p>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">{lesson.type}</p>
                                    </div>
                                </div>
                                <ChevronRight className={`w-5 h-5 ${lesson.status === 'locked' ? 'text-slate-800' : 'text-slate-500 group-hover:text-white transition-colors'}`} />
                            </div>
                        ))}
                    </div>
                </Card>
            ))}

            <Card variant="premium" className="p-10 border-t-0 bg-indigo-600/5 border-indigo-500/20 text-center">
                <BookOpen className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
                <h3 className="text-xl font-black text-white">Unlock Advanced Modules</h3>
                <p className="text-sm text-slate-400 mt-2 max-w-md mx-auto">Complete Unit 1 and 2 to gain access to the "Future Tech & Coding" module powered by our AI Copilot.</p>
                <Button className="mt-8 bg-indigo-600 hover:bg-indigo-500 h-12 px-10">Purchase Course Extension</Button>
            </Card>
        </div>
    );
};
