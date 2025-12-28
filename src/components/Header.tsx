import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="nav-left">
                Mood Tracker
            </div>

            <nav className="nav-right">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/profile" className="nav-link">Profile</Link>
                <Link to="/mood" className="nav-link">My Mood</Link>
            </nav>
        </header>
    );
};

export default Header;
