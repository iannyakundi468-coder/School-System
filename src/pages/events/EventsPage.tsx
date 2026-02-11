import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ChevronLeft, Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_EVENTS = [
    { id: 1, title: 'Inter-House Sports Day', date: '2026-03-15', time: '09:00 AM', location: 'Main School Field', type: 'Sports', description: 'Annual sports competition between the four houses.' },
    { id: 2, title: 'Parent-Teacher Meeting', date: '2026-03-20', time: '02:00 PM', location: 'School Hall', type: 'Academic', description: 'Consultation on student progress for Term 1.' },
    { id: 3, title: 'Science Fair', date: '2026-04-05', time: '10:00 AM', location: 'Science Labs', type: 'Academic', description: 'Exhibition of student science projects.' },
    { id: 4, title: 'Easter Value Holiday', date: '2026-04-10', time: 'All Day', location: 'N/A', type: 'Holiday', description: 'School closed for Easter break.' },
];

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const EventsPage = () => {
    const navigate = useNavigate();
    const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2)); // March 2026

    // Simple calendar logic
    const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const renderCalendar = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        const days = [];

        // Empty slots for previous month
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-24 bg-slate-800/20 border border-slate-700/50 rounded-lg opacity-50"></div>);
        }

        // Days of current month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const eventsOnDay = MOCK_EVENTS.filter(e => e.date === dateStr);

            days.push(
                <div key={day} className={`h-24 p-2 border border-slate-700/50 rounded-lg hover:bg-slate-800 transition-colors relative group ${eventsOnDay.length > 0 ? 'bg-slate-800/30' : 'bg-slate-900/50'}`}>
                    <span className={`text-sm font-medium ${eventsOnDay.length > 0 ? 'text-white' : 'text-gray-500'}`}>{day}</span>
                    <div className="mt-1 space-y-1">
                        {eventsOnDay.map(event => (
                            <div key={event.id} className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 truncate font-medium border border-blue-500/30">
                                {event.title}
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        return days;
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white p-4 md:p-8 animate-fade-in">
            <div className="max-w-6xl mx-auto space-y-6">

                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <Button variant="glass" onClick={() => navigate(-1)} className="gap-2 text-sm mb-2">
                            <ChevronLeft className="w-4 h-4" /> Back to Dashboard
                        </Button>
                        <h1 className="text-3xl font-bold flex items-center gap-3">
                            <CalendarIcon className="w-8 h-8 text-blue-400" /> School Calendar
                        </h1>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="glass" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}>
                            Prev
                        </Button>
                        <span className="flex items-center px-4 font-bold min-w-[140px] justify-center bg-slate-800 rounded-lg border border-slate-700">
                            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                        </span>
                        <Button variant="glass" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}>
                            Next
                        </Button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Calendar Grid */}
                    <Card className="lg:col-span-2">
                        <div className="grid grid-cols-7 gap-2 mb-2 text-center">
                            {DAYS.map(day => (
                                <div key={day} className="text-gray-400 text-sm font-bold uppercase tracking-wider py-2">{day}</div>
                            ))}
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                            {renderCalendar()}
                        </div>
                    </Card>

                    {/* Upcoming Events List */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold">Upcoming Events</h2>
                            <Button variant="glass" className="text-xs h-8">Sync to Google</Button>
                        </div>

                        <div className="space-y-4">
                            {MOCK_EVENTS.map(event => (
                                <Card key={event.id} className="hover:bg-slate-800 transition-colors group cursor-pointer border-l-4 border-l-blue-500">
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center justify-center p-3 bg-slate-800 rounded-lg min-w-[60px]">
                                            <span className="text-xs text-blue-400 font-bold uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                                            <span className="text-2xl font-bold text-white">{new Date(event.date).getDate()}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">{event.title}</h3>
                                            <p className="text-xs text-gray-400 mt-1 line-clamp-2">{event.description}</p>
                                            <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {event.time}</span>
                                                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        <Card className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border-emerald-500/20">
                            <h3 className="font-bold text-emerald-400 mb-2">Did You Know?</h3>
                            <p className="text-sm text-gray-300">You can subscribe to these events on your phone's calendar so you never miss an important school date.</p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
