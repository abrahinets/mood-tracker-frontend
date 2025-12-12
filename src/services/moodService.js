// src/services/moodService.js

const API_URL = 'http://localhost:8080/api/moods';

// ➕ CREATE MOOD
export const createMood = async (mood, note = '') => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No auth token');

    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ mood, note })
    });

    if (res.status === 401) {
        localStorage.removeItem('token');
        throw new Error('Unauthorized');
    }

    if (!res.ok) {
        throw new Error('Failed to create mood');
    }

    return res.json();
};

// 📋 GET MY MOODS
export const getMoods = async () => {
    const token = localStorage.getItem('token');
    if (!token) return [];

    const res = await fetch(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (res.status === 401) {
        localStorage.removeItem('token');
        return [];
    }

    if (!res.ok) {
        throw new Error('Failed to fetch moods');
    }

    return res.json();
};
