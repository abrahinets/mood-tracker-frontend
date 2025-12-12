// src/pages/Moods.jsx
import { useEffect, useState } from 'react';
import { createMood, getMoods } from '../services/moodService';

const Moods = () => {
    const [moods, setMoods] = useState([]);
    const [mood, setMood] = useState('happy');
    const [note, setNote] = useState('');

    useEffect(() => {
        getMoods().then(setMoods);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createMood(mood, note);
        setNote('');
        setMoods(await getMoods());
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select value={mood} onChange={(e) => setMood(e.target.value)}>
                    <option value="happy">happy</option>
                    <option value="sad">sad</option>
                    <option value="neutral">neutral</option>
                    <option value="angry">angry</option>
                    <option value="excited">excited</option>
                    <option value="tired">tired</option>
                    <option value="stressed">stressed</option>
                    <option value="calm">calm</option>
                </select>

                <input
                    placeholder="Note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />

                <button type="submit">Add mood</button>
            </form>

            <ul>
                {moods.map((m) => (
                    <li key={m._id}>
                        {m.mood} — {m.note}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Moods;
