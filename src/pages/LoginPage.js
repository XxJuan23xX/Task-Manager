import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { loginUser } from '../api'; // Asegúrate de importar loginUser
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser({ email, password });
            if (response.message === 'Login successful') {
                localStorage.setItem('email', response.email); // Guardar el email en localStorage
                console.log('Email saved in localStorage:', localStorage.getItem('email')); // Verificar el almacenamiento
                login();
                navigate('/tasks');
            } else {
                alert('Login failed: ' + response.message);
            }
        } catch (err) {
            console.error('Error during login:', err);
            alert('Login failed: ' + err.message);
        }
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-image">
                    <h1>Bienvenido a Task Manager</h1>
                </div>
                <div className="login-form">
                    <form onSubmit={handleLogin}>
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
                        <button type="submit" className="login-button">Iniciar Sesión</button>
                    </form>
                    <div className="register-link">
                        <p>No tienes una cuenta? <span onClick={handleRegister}>Regístrate</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
