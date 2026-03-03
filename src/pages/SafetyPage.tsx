import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import {
    ArrowLeft,
    MapPin,
    AlertTriangle,
    Smartphone,
    Navigation,
    Shield,
    Fuel,
    Gauge,
    Zap
} from 'lucide-react';

export const SafetyPage = () => {
    const navigate = useNavigate();

    const buses = [
        { id: 'BUS-01', location: 'Gate A-South', status: 'En-route', speed: '42 km/h', fuel: '82%', driver: 'Peter M.', behavior: 'Safe' },
        { id: 'BUS-02', location: 'Utawala Route', status: 'Idle', speed: '0 km/h', fuel: '45%', driver: 'Simon K.', behavior: 'Idle' },
        { id: 'BUS-03', location: 'Airport Road', status: 'Warning', fuel: '12%', driver: 'Luka T.', behavior: 'Harsh Braking', flag: 'Fuel Siphoning Alert' },
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
                        <h1 className="text-3xl md:text-4xl font-bold text-white">Smart Bus Sentinel</h1>
                        <p className="text-slate-400 font-medium mt-2">Fleet IoT & Driver AI for maximum safety and fuel protection.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button className="bg-rose-600 hover:bg-rose-700 h-10 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4" /> Broadcast Emergency Alert
                        </Button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* IoT Fleet Status */}
                    <Card className="lg:col-span-1 border-t-4 border-t-indigo-500">
                        <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-indigo-400" /> Fleet Overview
                        </h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5">
                                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Total Fuel Burn-rate</p>
                                <p className="text-2xl font-bold text-white">42L / hr</p>
                                <div className="flex items-center gap-2 mt-2 text-emerald-400 text-[10px] font-bold uppercase">
                                    <Zap className="w-3 h-3" /> Route Optimized
                                </div>
                            </div>
                            <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5">
                                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Driver Safety Index</p>
                                <p className="text-2xl font-bold text-white">94.2</p>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full mt-3 overflow-hidden">
                                    <div className="h-full bg-indigo-500 w-[94%]" />
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Live Tracking Map (Mock) */}
                    <Card className="lg:col-span-3 min-h-[400px] relative overflow-hidden bg-slate-950 p-0 border-white/5 shadow-2xl">
                        {/* Mock Map Background (Mesh/Overlay) */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full h-full p-8">
                                <h3 className="text-white/40 font-bold uppercase tracking-[0.5em] text-center mt-32 pointer-events-none">Live Transit Mesh Visualization</h3>

                                {/* Mock Bus Markers */}
                                <div className="absolute top-1/4 left-1/3 animate-pulse group cursor-pointer">
                                    <div className="p-2 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/20 border-2 border-white translate-x-12 translate-y-8">
                                        <Navigation className="w-4 h-4 text-white rotate-45" />
                                    </div>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-slate-900 border border-white/10 p-2 rounded text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                        <p className="font-bold text-white">BUS-01</p>
                                        <p className="text-slate-400">42 km/h | Safe</p>
                                    </div>
                                </div>

                                <div className="absolute bottom-1/3 right-1/4">
                                    <div className="p-2 bg-rose-500 rounded-full shadow-lg shadow-rose-500/40 border-2 border-white animate-bounce">
                                        <Fuel className="w-4 h-4 text-white" />
                                    </div>
                                    <Card className="absolute top-full right-0 mt-2 w-48 p-3 bg-slate-900/95 border-rose-500/50 shadow-2xl backdrop-blur-xl z-10">
                                        <p className="text-xs font-bold text-rose-500 flex items-center gap-1.5">
                                            <AlertTriangle className="w-3 h-3" /> Hardware Alert: BUS-03
                                        </p>
                                        <p className="text-[10px] text-white mt-1">Sudden Fuel Drop: -8L in 2min</p>
                                        <p className="text-[10px] text-slate-500 mt-2 uppercase font-bold">Harsh Braking Detected</p>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        {/* Map Controls */}
                        <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                            <Button variant="glass" className="w-10 h-10 p-0 rounded-xl">+</Button>
                            <Button variant="glass" className="w-10 h-10 p-0 rounded-xl">-</Button>
                        </div>
                        <div className="absolute top-6 right-6">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 backdrop-blur rounded-full border border-white/5">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-bold text-white uppercase">All Systems Nominal</span>
                            </div>
                        </div>
                    </Card>

                    {/* Transit Details Grid */}
                    <Card className="lg:col-span-4 mt-8">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-slate-500 text-[10px] font-bold uppercase tracking-widest border-b border-white/5">
                                        <th className="pb-4">Fleet Terminal</th>
                                        <th className="pb-4">Live Location</th>
                                        <th className="pb-4 text-center">Fuel Sensor</th>
                                        <th className="pb-4 text-center">Driver Safety</th>
                                        <th className="pb-4 text-right">Parent Sync</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {buses.map((bus) => (
                                        <tr key={bus.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                            <td className="py-4 font-bold text-white flex items-center gap-3">
                                                <div className={`w-2 h-2 rounded-full ${bus.status === 'Warning' ? 'bg-rose-500' : 'bg-emerald-500'}`} />
                                                {bus.id}
                                            </td>
                                            <td className="py-4">
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                                                    <span className="text-slate-300 font-medium">{bus.location}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 text-center">
                                                <div className="flex flex-col items-center gap-1">
                                                    <div className="flex items-center gap-1.5">
                                                        <Gauge className={`w-3.5 h-3.5 ${bus.fuel === '12%' ? 'text-rose-400' : 'text-emerald-400'}`} />
                                                        <span className={`font-bold ${bus.fuel === '12%' ? 'text-rose-400' : 'text-white'}`}>{bus.fuel}</span>
                                                    </div>
                                                    {bus.flag && <span className="text-[8px] font-bold text-rose-500 uppercase tracking-tighter">Siphoning Risk</span>}
                                                </div>
                                            </td>
                                            <td className="py-4 text-center">
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${bus.behavior === 'Safe' ? 'bg-emerald-500/10 text-emerald-400' :
                                                        bus.behavior === 'Idle' ? 'bg-slate-800 text-slate-500' : 'bg-rose-500/10 text-rose-400'
                                                    }`}>
                                                    {bus.behavior}
                                                </span>
                                            </td>
                                            <td className="py-4 text-right">
                                                <div className="flex items-center justify-end gap-2 text-indigo-400 text-[10px] font-bold">
                                                    <Smartphone className="w-3 h-3" /> Map Shared
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};
