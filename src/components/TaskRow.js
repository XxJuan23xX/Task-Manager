import React from 'react';

const TaskRow = ({ task, markCompleted, unmarkCompleted, deleteTask }) => {
    return (
        <tr key={task.task_id}>
            <td>{task.taskname}</td>
            <td>{task.startdate}</td>
            <td>{task.enddate}</td>
            <td>{task.deliverydate}</td>
            <td>{task.responsible}</td>
            <td>{task.status}</td>
            <td>
                {task.status === 'sin completar' && <button onClick={() => markCompleted(task.task_id)}>Completar</button>}
                {task.status === 'completada' && <button onClick={() => unmarkCompleted(task.task_id)}>Desmarcar</button>}
                <button onClick={() => deleteTask(task.task_id)}>Eliminar</button>
            </td>
        </tr>
    );
};

export default TaskRow;
