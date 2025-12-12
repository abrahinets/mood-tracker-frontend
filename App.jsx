// src/App.jsx
import { useEffect, useState } from 'react';
import { getMe, logout } from './services/authService';
import Login from './pages/Login';
import Moods from './pages/Moods';

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMe()
            .then((data) => setUser(data))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return <Login />;
    }

    return (
        <div>
            <header>
                <h1>Hello, {user.username}</h1>
                <p>{user.email}</p>
                <button
                    onClick={() => {
                        logout();
                        setUser(null);
                    }}
                >
                    Logout
                </button>
            </header>

            <main>
                <Moods />
            </main>
        </div>
    );
}

export default App;
