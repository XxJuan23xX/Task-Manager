import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/login');
    };

    return (
        <div className="welcome-container">
            <div className="welcome-content">
                <h1>Bienvenido a TaskManager</h1>
                <h2>Descubre la mejor manera de gestionar tus tareas</h2>
                <button onClick={handleStart} className="welcome-button">Inicia Aquí</button>
            </div>
        </div>
    );
};

export default WelcomePage;
