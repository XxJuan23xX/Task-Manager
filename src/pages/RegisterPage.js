import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api';
import './RegisterPage.css';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser({ email, password, fullName });
            if (response.message === 'User registered successfully') {
                navigate('/login');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            alert('Error registering: ' + error.message);
        }
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <div className="register-image">
                    <h1>Bienvenido a Gestión de Tareas</h1>
                </div>
                <div className="register-form">
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <label htmlFor="fullName">Nombre</label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="register-button">Registrarse</button>
                    </form>
                    <div className="login-link">
                        <p>¿Ya tienes una cuenta? <span onClick={handleLogin}>Inicia sesión</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
