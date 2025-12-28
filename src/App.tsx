import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MyMood from './pages/MyMood';

const App: React.FC = () => {
    return (
        <div className="page">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/mood" element={<MyMood />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;
