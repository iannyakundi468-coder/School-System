import React, { createContext, useContext, useState, ReactNode } from 'react';

type Role = 'guardian' | 'staff' | 'admin';

interface User {
    name: string;
    role: Role;
    id: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, role: Role) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, role: Role) => {
        try {
            // Attempt to login via API
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password: 'placeholder_password' }) // Password handling to be added in UI
            });

            if (res.ok) {
                const data = await res.json();
                setUser(data.user);
                localStorage.setItem('solian_user', JSON.stringify(data.user));
                return;
            }
        } catch (error) {
            console.warn("Backend not reachable, functioning in Offline/Mock mode.");
        }

        // Fallback to Mock Data if API fails (for local manual testing without backend)
        const mockUser: User = {
            name: role === 'guardian' ? 'John Doe' : role === 'staff' ? 'Mrs. Alice' : 'Principal James',
            role: role,
            id: Math.random().toString(36).substr(2, 9),
        };
        setUser(mockUser);
        localStorage.setItem('solian_user', JSON.stringify(mockUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('solian_user');
    };

    // Load user from local storage
    React.useEffect(() => {
        const stored = localStorage.getItem('solian_user');
        if (stored) setUser(JSON.parse(stored));
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
