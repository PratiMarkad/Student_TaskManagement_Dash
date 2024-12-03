// src/components/TaskTable.js
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import AddEditTaskModal from './AddEditTaskModal';

function TaskTable({ tasks, onDelete, onEdit, onComplete, onAdd }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const openModal = (task = null) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  return (
    <div className="task-table">
      <button onClick={() => openModal()}>Add Task</button>
      <table>
        <thead>
          <tr>
            <th>Roll No.</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Division</th>
            <th>Submission Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onEdit={openModal}
              onComplete={onComplete}
            />
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <AddEditTaskModal
          task={editingTask}
          onSave={task => {
            if (editingTask) {
              onEdit(task);
            } else {
              onAdd(task);
            }
            closeModal();
          }}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default TaskTable;
