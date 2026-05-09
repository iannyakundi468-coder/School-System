import { createContext, useContext, useState } from 'react';

const StudentContext = createContext(null);

// Default mock data for courses, tasks, portfolio (teacher-provided, not student-entered)
const DEFAULT_PORTAL_DATA = {
  id: 'STU-' + Math.floor(1000 + Math.random() * 9000),
  xp: 2450,
  courses: [
    { id: 1, title: 'Advanced Mathematics', teacher: 'Mr. Smith', progress: 85 },
    { id: 2, title: 'World History', teacher: 'Mrs. Davis', progress: 92 },
    { id: 3, title: 'Physics 101', teacher: 'Dr. Brown', progress: 78 },
    { id: 4, title: 'Literature', teacher: 'Ms. Wilson', progress: 100 },
  ],
  tasks: [
    { id: 101, title: 'Math Assignment 4', dueDate: 'Today', completed: false, course: 'Advanced Mathematics' },
    { id: 102, title: 'Read Chapter 5', dueDate: 'Tomorrow', completed: false, course: 'World History' },
    { id: 103, title: 'Physics Lab Report', dueDate: 'Friday', completed: false, course: 'Physics 101' },
    { id: 104, title: 'Essay Draft', dueDate: 'Next Monday', completed: true, course: 'Literature' },
  ],
  portfolio: [
    { id: 201, title: 'Science Fair Project: Solar Ovens', date: 'Oct 15, 2025', course: 'Physics 101', type: 'Project', tags: ['Science', 'Practical'], imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400', description: 'Built a working solar oven using recycled materials that successfully boiled water.' },
    { id: 202, title: 'Historical Essay: The Renaissance', date: 'Nov 02, 2025', course: 'World History', type: 'Essay', tags: ['History', 'Writing'], imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&q=80&w=400', description: 'A 10-page research paper exploring the economic factors that drove the Renaissance.' },
    { id: 203, title: 'Calculus Final Exam', date: 'Dec 10, 2025', course: 'Advanced Mathematics', type: 'Exam', tags: ['Math', 'Test'], imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400', description: 'Scored 98% on the final exam covering integrals and derivatives.' },
  ]
};

export function StudentProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [studentData, setStudentData] = useState(null);

  // Called from the login/onboarding page
  const login = (profileData) => {
    const avatarSeed = encodeURIComponent(profileData.name);
    const newStudent = {
      ...DEFAULT_PORTAL_DATA,
      id: 'STU-' + Math.floor(1000 + Math.random() * 9000),
      name: profileData.name,
      email: profileData.email,
      phone: profileData.phone || '',
      grade: profileData.grade,
      interests: profileData.interests || '',
      school: profileData.school || '',
      avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${avatarSeed}`,
    };
    setStudentData(newStudent);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setStudentData(null);
    setIsAuthenticated(false);
  };

  const updateProfile = (newData) => {
    setStudentData(prev => ({ ...prev, ...newData }));
  };

  const toggleTask = (taskId) => {
    setStudentData(prev => ({
      ...prev,
      tasks: prev.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    }));
  };

  return (
    <StudentContext.Provider value={{ studentData, isAuthenticated, login, logout, updateProfile, toggleTask }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudent must be used within a StudentProvider');
  }
  return context;
}
