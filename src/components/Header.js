import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Header.css';

const Header = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="header">
            <h1>TaskManager</h1>
            {isAuthenticated && (
                <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
            )}
        </header>
    );
};

export default Header;
