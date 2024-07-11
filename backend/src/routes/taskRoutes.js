const express = require('express');
const { addTask, getTasks, updateTaskStatus, deleteTask } = require('../controllers/taskController');
const router = express.Router();

router.post('/add', addTask);
router.get('/:email', getTasks);
router.put('/update', updateTaskStatus);
router.delete('/delete', deleteTask);

module.exports = router;
