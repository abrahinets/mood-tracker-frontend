// src/services/authService.js

const API_URL = 'http://localhost:8080/api/users';

// 🔐 LOGIN
export const login = async (email, password) => {
    const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
        throw new Error('Login failed');
    }

    const data = await res.json();
    localStorage.setItem('token', data.token);
    return data;
};

// 📝 REGISTER
export const register = async (username, email, password) => {
    const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    if (!res.ok) {
        throw new Error('Register failed');
    }

    const data = await res.json();
    localStorage.setItem('token', data.token);
    return data;
};

// 👤 GET CURRENT USER
export const getMe = async () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const res = await fetch(`${API_URL}/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (res.status === 401) {
        localStorage.removeItem('token');
        return null;
    }

    return res.json();
};

// 🚪 LOGOUT
export const logout = () => {
    localStorage.removeItem('token');
};
