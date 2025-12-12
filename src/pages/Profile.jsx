// src/pages/Profile.jsx
import { useEffect, useState } from 'react';
import { getMe, logout } from '../services/authService';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMe()
            .then((data) => setUser(data))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;

    if (!user) {
        return <p>User not authenticated</p>;
    }

    return (
        <div>
            <h2>{user.username}</h2>
            <p>{user.email}</p>

            <button
                onClick={() => {
                    logout();
                    window.location.reload();
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default Profile;
