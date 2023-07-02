"use client";

import { ReactNode, createContext, useState } from "react";
const AuthContext = createContext({});

type AuthProviderProps = {
    children: ReactNode;
};

export type AuthContextType = {
    userId: string;
    token: string;
    username?: string;
    email?: string;
    // user: {

    // }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, setAuth] = useState<AuthContextType>({
        userId: "",
        token: "",
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
