import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, User, FolderGit2, LogOut, GraduationCap, Bot } from 'lucide-react';
import { ErrorBoundary } from '../components/common/ErrorBoundary';
import { useStudent } from '../context/StudentContext';
import GlobalAiAssistant from '../components/ai/GlobalAiAssistant';

export default function PortalLayout() {
  const { studentData, logout } = useStudent();
  const navigate = useNavigate();

  const navItems = [
    { to: '/student', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/student/portfolio', label: 'Portfolio', icon: FolderGit2 },
    { to: '/student/ai', label: 'AI Study Center', icon: Bot },
    { to: '/student/profile', label: 'Profile', icon: User },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative">
      {/* Persistent AI Assistant (Gemini-style) */}
      <GlobalAiAssistant />

      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        
        {/* Logo */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
          <div className="w-9 h-9 bg-yellow-400 rounded-xl flex items-center justify-center shadow-md shadow-amber-200 dark:shadow-amber-900/50">
            <GraduationCap size={18} className="text-slate-900" />
          </div>
          <h1 className="text-lg font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Student Portal
          </h1>
        </div>

        {/* User Info Card */}
        {studentData && (
          <div className="mx-3 mt-4 p-3 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800/50 flex items-center gap-3">
            <img
              src={studentData.avatarUrl}
              alt={studentData.name}
              className="w-10 h-10 rounded-full bg-white border-2 border-white shadow-sm flex-shrink-0"
            />
            <div className="min-w-0">
              <p className="font-semibold text-sm text-gray-900 dark:text-gray-100 truncate">{studentData.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{studentData.grade}</p>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 px-3 mt-4 space-y-1">
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-3 mb-2">Navigation</p>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/student'}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 font-semibold shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-200'
                }`
              }
            >
              <item.icon size={19} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-3 border-t border-gray-100 dark:border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 rounded-xl transition-all font-medium text-sm group"
          >
            <LogOut size={18} className="group-hover:rotate-12 transition-transform" />
            <span>Exit Portal</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto">
        <div className="p-8 max-w-7xl mx-auto pb-24">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
}
