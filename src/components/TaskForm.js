import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
    const [formData, setFormData] = useState({
        taskName: '',
        startDate: '',
        endDate: '',
        deliveryDate: '',
        responsible: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = localStorage.getItem('email'); // Obtener el email del localStorage
        if (email) {
            addTask({ ...formData, email });
            setFormData({
                taskName: '',
                startDate: '',
                endDate: '',
                deliveryDate: '',
                responsible: ''
            });
        } else {
            alert('Email not found in localStorage');
        }
    };
    return (
        <div className="card mt-4 blur-background">
            <div className="card-body">
                <form id="taskForm" onSubmit={handleSubmit}>
                    <div className="form-group1">
                        <label htmlFor="taskName">Nueva Tarea</label>
                        <input type="text" className="form-control" id="taskName" placeholder="Ingrese la nueva tarea" value={formData.taskName} onChange={handleChange} required />
                    </div>
                    <div className="form-group1">
                        <label htmlFor="startDate">Fecha de Inicio</label>
                        <input type="date" className="form-control" id="startDate" value={formData.startDate} onChange={handleChange} required />
                    </div>
                    <div className="form-group1">
                        <label htmlFor="endDate">Fecha de Fin</label>
                        <input type="date" className="form-control" id="endDate" value={formData.endDate} onChange={handleChange} required />
                    </div>
                    <div className="form-group1">
                        <label htmlFor="deliveryDate">Fecha de Entrega</label>
                        <input type="date" className="form-control" id="deliveryDate" value={formData.deliveryDate} onChange={handleChange} required />
                    </div>
                    <div className="form-group1">
                        <label htmlFor="responsible">Responsable</label>
                        <input type="text" className="form-control" id="responsible" placeholder="Nombre del responsable" value={formData.responsible} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-morado-brillante btn-block">Agregar Tarea</button>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;
