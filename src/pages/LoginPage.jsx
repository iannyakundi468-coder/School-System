import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useStudent } from '../context/StudentContext';

import { useNavigate } from 'react-router-dom';
import { GraduationCap, User, Mail, Phone, BookOpen, Heart, School, ArrowRight, Sparkles, Users } from 'lucide-react';

const onboardingSchema = z.object({
  name: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  grade: z.string().min(1, 'Please select your grade'),
  school: z.string().min(2, 'School name must be at least 2 characters'),
  interests: z.string().optional(),
});

const gradeOptions = ['9th Grade', '10th Grade', '11th Grade', '12th Grade'];

export default function LoginPage() {
  const { login: studentLogin } = useStudent();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    resolver: zodResolver(onboardingSchema),
    defaultValues: { grade: '' },
  });

  const watchedName = watch('name', '');
  const avatarSeed = encodeURIComponent(watchedName || 'Student');

  const onSubmitStudent = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        studentLogin(data);
        navigate('/student');
        resolve();
      }, 800);
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">

      {/* Subtle decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-2xl">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg mb-5 shadow-indigo-200">
            <GraduationCap className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Student Portal</h1>
          <p className="text-slate-600 text-lg">Enter your details to get started</p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50">
          <form onSubmit={handleSubmit(onSubmitStudent)} className="space-y-6">
            {/* Live Avatar Preview - Removed AI image */}
            <div className="flex flex-col items-center gap-3 pb-6 border-b border-slate-100">
              <div className="w-20 h-20 rounded-full bg-slate-50 border-4 border-slate-100 shadow-sm flex items-center justify-center">
                <User className="text-slate-300" size={40} />
              </div>
              <p className="text-sm text-slate-500 flex items-center gap-1 font-medium">
                Welcome to the Student Portal
              </p>
            </div>

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <User size={14} /> Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('name')}
                  placeholder="e.g. Alex Johnson"
                  className={`w-full px-4 py-3 bg-white border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Mail size={14} /> Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="e.g. alex@school.edu"
                  className={`w-full px-4 py-3 bg-white border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            {/* School + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <School size={14} /> School Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('school')}
                  placeholder="e.g. Somobloom School"
                  className={`w-full px-4 py-3 bg-white border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.school ? 'border-red-400' : 'border-slate-200'}`}
                />
                {errors.school && <p className="text-red-500 text-xs mt-1">{errors.school.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Phone size={14} /> Phone Number <span className="text-slate-400 text-xs font-normal">(optional)</span>
                </label>
                <input
                  {...register('phone')}
                  placeholder="e.g. +1 555 000 0000"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Grade */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <BookOpen size={14} /> Grade Level <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {gradeOptions.map(grade => {
                  const isSelected = watch('grade') === grade;
                  return (
                    <label
                      key={grade}
                      className={`flex items-center justify-center px-4 py-3 rounded-xl border cursor-pointer transition-all font-semibold text-sm ${
                        isSelected
                          ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-100'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600'
                      }`}
                    >
                      <input
                        type="radio"
                        {...register('grade')}
                        value={grade}
                        className="sr-only"
                      />
                      {grade}
                    </label>
                  );
                })}
              </div>
              {errors.grade && <p className="text-red-500 text-xs mt-1">{errors.grade.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-blue-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Setting up your portal...
                </>
              ) : (
                <>
                  Enter Student Portal
                  <ArrowRight size={20} />
                </>
              )}
            </button>

            <p className="text-center text-slate-500 text-xs font-medium">
              Your data is stored locally. No account creation required.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
