// src/components/TaskItem.js
import React from 'react';

function TaskItem({ task, onDelete, onEdit, onComplete }) {
  return (
    <tr>
      <td>{task.rollNo}</td>
      <td>{task.name}</td>
      <td>{task.marks}</td>
      <td>{task.division}</td>
      <td>{task.submissionDate}</td>
      <td>{task.isCompleted ? 'Completed' : 'Pending'}</td>
      <td>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
        {!task.isCompleted && <button onClick={() => onComplete(task.id)}>Mark as Complete</button>}
      </td>
    </tr>
  );
}

export default TaskItem;
