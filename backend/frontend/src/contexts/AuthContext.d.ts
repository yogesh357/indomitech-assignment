import React, { type ReactNode } from 'react';
interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string, role?: string) => Promise<void>;
    logout: () => void;
    updateUser: (userData: Partial<User>) => void;
}
export declare const useAuth: () => AuthContextType;
export declare const AuthProvider: React.FC<{
    children: ReactNode;
}>;
export {};
//# sourceMappingURL=AuthContext.d.ts.map