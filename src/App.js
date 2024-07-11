import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TaskPage from './pages/TaskPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WelcomePage from './pages/WelcomePage';
import PrivateRoute from './components/PrivateRoute';
import AuthProvider from './context/AuthContext';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/login" element={<div className="login-page"><LoginPage /></div>} />
                    <Route path="/register" element={<div className="register-page"><RegisterPage /></div>} />
                    <Route path="/" element={<div className="welcome-page"><WelcomePage /></div>} />
                    <Route path="/tasks" element={
                        <PrivateRoute>
                            <div className="task-page"><TaskPage /></div>
                        </PrivateRoute>
                    } />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
