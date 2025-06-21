import React, { createContext, useContext, useState } from 'react';
import * as authApi from '../api/authApi';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }){
    const [user, setUser] = useState(
        () => JSON.parse(localStorage.getItem('user')) || null
    );
    const [token, setToken] = useState(
        () => localStorage.getItem('token') || null
    );

    const signup = async creds => {
        const res = await authApi.signup(creds);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        setToken(res.data.token);
        setUser(res.data.user);
    };

    const login = async creds => {
        const res = await authApi.login(creds);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        setToken(res.data.token);
        setUser(res.data.user);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
    };

    if(token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return(
        <AuthContext.Provider value = {{ user, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    ); 
}

export function useAuth(){
    return useContext(AuthContext);
}