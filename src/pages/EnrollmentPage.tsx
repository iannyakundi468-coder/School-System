import { useState } from 'react';
// import { QRCodeSVG } from 'qrcode.react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { User, Users, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export const EnrollmentPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        grade: '',
        parentName: '',
        parentPhone: '',
    });
    const [studentId, setStudentId] = useState<string | null>(null);

    const handleNext = () => setStep((prev) => prev + 1);
    const handleBack = () => setStep((prev) => prev - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call to save student
        const newId = `SOL-${Math.floor(Math.random() * 10000)}`;
        setStudentId(newId);
        setStep(3); // Move to Success/QR step
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white p-4 md:p-8">
            <div className="max-w-2xl mx-auto space-y-8">
                <header className="text-center space-y-2">
                    <h1 className="text-3xl font-bold">New Student Enrollment</h1>
                    <p className="text-gray-400">Register a new student and generate their unique ID.</p>
                </header>

                {/* Progress Steps */}
                <div className="flex justify-center gap-4 mb-8">
                    {[1, 2, 3].map((s) => (
                        <div
                            key={s}
                            className={`w-3 h-3 rounded-full transition-colors ${s === step ? 'bg-emerald-500 scale-125' : s < step ? 'bg-emerald-500/50' : 'bg-slate-700'}`}
                        />
                    ))}
                </div>

                <Card className="relative overflow-hidden">
                    {/* Step 1: Student Details */}
                    {step === 1 && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-emerald-500/10 rounded-lg"><User className="w-6 h-6 text-emerald-400" /></div>
                                <h2 className="text-xl font-bold">Student Details</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <Input
                                    label="First Name"
                                    placeholder="e.g. Joy"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                />
                                <Input
                                    label="Last Name"
                                    placeholder="e.g. Wanjiru"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                />
                            </div>
                            <Input
                                label="Grade / Class"
                                placeholder="e.g. Grade 4"
                                value={formData.grade}
                                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                            />

                            <div className="flex justify-end pt-4">
                                <Button onClick={handleNext}>Next Step <ArrowRight className="w-4 h-4" /></Button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Parent Details */}
                    {step === 2 && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-emerald-500/10 rounded-lg"><Users className="w-6 h-6 text-emerald-400" /></div>
                                <h2 className="text-xl font-bold">Guardian Details</h2>
                            </div>

                            <Input
                                label="Guardian Name"
                                placeholder="e.g. John Doe"
                                value={formData.parentName}
                                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                            />
                            <Input
                                label="Phone Number (For MPESA/SMS)"
                                placeholder="e.g. 0712 345 678"
                                value={formData.parentPhone}
                                onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                            />

                            <div className="flex flex-col-reverse md:flex-row justify-between gap-4 pt-4">
                                <Button variant="glass" onClick={handleBack} className="w-full md:w-auto"><ArrowLeft className="w-4 h-4" /> Back</Button>
                                <Button onClick={handleSubmit} variant="primary" className="w-full md:w-auto">Complete Enrollment</Button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Success & QR */}
                    {step === 3 && studentId && (
                        <div className="text-center space-y-6 animate-fade-in py-8">
                            <div className="inline-flex p-4 bg-emerald-500/20 rounded-full mb-4">
                                <CheckCircle className="w-12 h-12 text-emerald-400" />
                            </div>

                            <h2 className="text-2xl font-bold">Enrollment Successful!</h2>
                            <p className="text-gray-400">Student <span className="text-white font-semibold">{formData.firstName} {formData.lastName}</span> has been registered.</p>

                            <div className="bg-white p-4 rounded-xl inline-block shadow-xl shadow-emerald-500/20">
                                {/* <QRCodeSVG value={studentId} size={150} /> */}
                                <div style={{ width: 150, height: 150, background: 'black', color: 'white' }}>QR PLACEHOLDER</div>
                            </div>

                            <p className="text-sm font-mono text-emerald-400 bg-emerald-950/30 py-2 px-4 rounded-lg inline-block">
                                ID: {studentId}
                            </p>

                            <p className="text-sm text-gray-500 max-w-xs mx-auto">
                                Scan this QR code to quickly access student profile, record attendance, or process payments.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
                                <Button variant="glass" onClick={() => window.print()} className="w-full md:w-auto">Print Card</Button>
                                <Button onClick={() => setStep(1)} className="w-full md:w-auto">Enroll Another</Button>
                            </div>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
};
