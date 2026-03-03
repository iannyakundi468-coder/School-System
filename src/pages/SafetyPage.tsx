import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import {
    ArrowLeft,
    MapPin,
    Navigation,
    Bell,
    ShieldCheck,
    Clock,
    AlertCircle,
    Bus
} from 'lucide-react';

export const SafetyPage = () => {
    const navigate = useNavigate();

    const busStatus = [
        { id: 'BUS-001', route: 'Syokimau - Kyangombe', status: 'En Route', students: 24, lastStop: 'Gateway Mall', nextStop: 'Kyangombe Junction', estHome: '10 mins' },
        { id: 'BUS-002', route: 'Mlolongo - Phase 3', status: 'Delayed', students: 18, lastStop: 'Signature Mall', nextStop: 'Phase 3 Entry', estHome: '25 mins' },
    ];

    return (
        <div className="min-h-screen bg-mesh p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8 animate-in">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/5">
                    <div>
                        <Button variant="outline" className="mb-4 h-10 border-white/10 text-slate-300" onClick={() => navigate('/')}>
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back
                        </Button>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">Guardian Sentinel</h1>
                        <p className="text-slate-400 font-medium mt-2">Real-time safety monitoring, GPS transit tracking, and secure alerts.</p>
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2">
                        <Bell className="w-4 h-4" /> Broadcast Safety Alert
                    </Button>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Mock Map Area */}
                    <Card className="lg:col-span-2 min-h-[400px] relative overflow-hidden bg-slate-900 border-2 border-white/5">
                        <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/36.9200,-1.4200,12,0/800x600?access_token=none')] opacity-40 bg-cover bg-center" />

                        {/* Interactive UI Over Map */}
                        <div className="absolute top-4 left-4 right-4 flex justify-between">
                            <div className="bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-2xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                    <p className="text-xs font-bold text-white uppercase tracking-widest">Active Tracking Locked</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="glass" className="h-10 px-3 bg-slate-900/50"><Navigation className="w-4 h-4" /></Button>
                                <Button variant="glass" className="h-10 px-3 bg-slate-900/50"><ShieldCheck className="w-4 h-4" /></Button>
                            </div>
                        </div>

                        {/* Animated Mock Pointers */}
                        <div className="absolute top-1/2 left-1/3 animate-bounce">
                            <div className="relative">
                                <MapPin className="w-8 h-8 text-emerald-500 fill-emerald-500/20" />
                                <div className="absolute -top-10 -left-12 bg-slate-900/90 border border-emerald-500/30 p-2 rounded text-[10px] font-bold text-white whitespace-nowrap shadow-xl">
                                    BUS-001 (On Course)
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-4 h-4 text-blue-400" />
                                    <span className="text-xs text-slate-300 font-medium">Last signal received 4 seconds ago.</span>
                                </div>
                                <span className="text-[10px] font-bold text-emerald-400">System Secure</span>
                            </div>
                        </div>
                    </Card>

                    {/* Transit Details */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-white">Transit Hub</h2>
                        {busStatus.map((bus) => (
                            <Card key={bus.id} className="group hover:border-blue-500/30 transition-all cursor-pointer">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${bus.status === 'En Route' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                                            <Bus className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">{bus.id}</h3>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase">{bus.route}</p>
                                        </div>
                                    </div>
                                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${bus.status === 'En Route' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                                        }`}>
                                        {bus.status}
                                    </span>
                                </div>
                                <div className="space-y-3 pt-2 border-t border-white/5">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-slate-500">Occupancy</span>
                                        <span className="text-white font-bold">{bus.students} Students</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-slate-500">Est. Home Arrival</span>
                                        <span className="text-blue-400 font-bold">{bus.estHome}</span>
                                    </div>
                                </div>
                                <Button variant="ghost" className="w-full mt-4 h-8 text-[10px] uppercase font-bold text-slate-400 hover:bg-white/5">
                                    Send "Home-Safe" Alert
                                </Button>
                            </Card>
                        ))}

                        <Card className="bg-blue-600/5 border-blue-600/20">
                            <div className="flex items-start gap-4">
                                <AlertCircle className="w-5 h-5 text-blue-400 shrink-0" />
                                <div>
                                    <p className="text-sm font-bold text-white">Geo-Fencing Active</p>
                                    <p className="text-xs text-slate-400 mt-1">Parents will be notified 5km before arrival.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
