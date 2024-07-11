import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Registro de usuario
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
};

// Inicio de sesión de usuario
export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data;
};

// Obtener tareas de un usuario
export const getTasks = async (email) => {
    const response = await axios.get(`${API_URL}/tasks/${email}`);
    return response.data;
};

// Agregar una nueva tarea
export const addTask = async (taskData) => {
    const response = await axios.post(`${API_URL}/tasks/add`, taskData);
    return response.data;
};

// Actualizar el estado de una tarea
export const updateTaskStatus = async (taskData) => {
    const response = await axios.put(`${API_URL}/tasks/update`, taskData);
    return response.data;
};

// Eliminar una tarea
export const deleteTask = async (taskData) => {
    const response = await axios.delete(`${API_URL}/tasks/delete`, { data: taskData });
    return response.data;
};
