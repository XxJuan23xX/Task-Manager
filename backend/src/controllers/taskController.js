const client = require('../config/database');

const addTask = async (req, res) => {
    const { taskName, startDate, endDate, deliveryDate, responsible, email } = req.body;
    const query = 'INSERT INTO tareas (task_id, taskName, startDate, endDate, deliveryDate, responsible, email, status) VALUES (uuid(), ?, ?, ?, ?, ?, ?, ?)';
    try {
        await client.execute(query, [taskName, startDate, endDate, deliveryDate, responsible, email, 'sin completar'], { prepare: true });
        res.status(201).json({ message: 'Task added successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getTasks = async (req, res) => {
    const { email } = req.params;
    const query = 'SELECT * FROM tareas WHERE email = ?';
    try {
        const result = await client.execute(query, [email], { prepare: true });
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateTaskStatus = async (req, res) => {
    const { task_id, status } = req.body;
    const query = 'UPDATE tareas SET status = ? WHERE task_id = ?';
    try {
        await client.execute(query, [status, task_id], { prepare: true });
        res.status(200).json({ message: 'Task status updated successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteTask = async (req, res) => {
    const { task_id } = req.body;
    const query = 'DELETE FROM tareas WHERE task_id = ?';
    try {
        await client.execute(query, [task_id], { prepare: true });
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { addTask, getTasks, updateTaskStatus, deleteTask };
