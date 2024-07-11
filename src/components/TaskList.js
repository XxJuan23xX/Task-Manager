import React from 'react';
import TaskRow from './TaskRow';

const TaskList = ({ tasks, markCompleted, unmarkCompleted, deleteTask }) => {
    return (
        <div className="task-list">
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar tarea por nombre..."
                />
                <div className="sort-buttons">
                    <button>Ascendente</button>
                    <button>Descendente</button>
                    <button>Orden Alfabético</button>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Tarea</th>
                        <th>Fecha de Inicio</th>
                        <th>Fecha de Fin</th>
                        <th>Fecha de Entrega</th>
                        <th>Responsable</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <TaskRow
                            key={task.task_id}
                            task={task}
                            markCompleted={markCompleted}
                            unmarkCompleted={unmarkCompleted}
                            deleteTask={deleteTask}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
