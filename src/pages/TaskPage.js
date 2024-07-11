import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { addTask, getTasks, updateTaskStatus, deleteTask } from '../api';
import './TaskPage.css';

const TaskPage = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const email = localStorage.getItem('email'); // Suponiendo que el correo del usuario se guarda en el localStorage
        if (email) {
            const fetchedTasks = await getTasks(email);
            setTasks(fetchedTasks);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleAddTask = async (task) => {
        const email = localStorage.getItem('email'); // Suponiendo que el correo del usuario se guarda en el localStorage
        if (!email) {
            alert('Email not found in localStorage');
            return;
        }
        const newTask = { ...task, email };
        console.log('Adding task with data:', newTask);  // Log para verificar los datos
        await addTask(newTask);
        fetchTasks();
    };

    const markCompleted = async (id) => {
        const task = tasks.find(t => t.task_id === id);
        if (task) {
            await updateTaskStatus({ task_id: task.task_id, status: 'completada' });
            fetchTasks();
        }
    };

    const unmarkCompleted = async (id) => {
        const task = tasks.find(t => t.task_id === id);
        if (task) {
            await updateTaskStatus({ task_id: task.task_id, status: 'sin completar' });
            fetchTasks();
        }
    };

    const handleDeleteTask = async (id) => {
        await deleteTask({ task_id: id });
        fetchTasks();
    };

    const searchTasks = (query) => {
        const filteredTasks = tasks.filter(task => task.taskName.toLowerCase().includes(query.toLowerCase()));
        setTasks(filteredTasks);
    };

    const sortTasks = (type) => {
        let sortedTasks;
        switch (type) {
            case 'dateNewest':
                sortedTasks = [...tasks].sort((a, b) => new Date(b.endDate) - new Date(a.endDate));
                break;
            case 'dateOldest':
                sortedTasks = [...tasks].sort((a, b) => new Date(a.endDate) - new Date(b.endDate));
                break;
            case 'alphabetical':
                sortedTasks = [...tasks].sort((a, b) => a.taskName.localeCompare(b.taskName));
                break;
            default:
                sortedTasks = tasks;
        }
        setTasks(sortedTasks);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">LISTADO DE TAREAS</h2>
            <TaskForm addTask={handleAddTask} />
            <h2 className="text-center mt-5">REGISTROS DE TAREAS</h2>
            <TaskList tasks={tasks} markCompleted={markCompleted} unmarkCompleted={unmarkCompleted} deleteTask={handleDeleteTask} searchTasks={searchTasks} sortTasks={sortTasks} />
        </div>
    );
};

export default TaskPage;
