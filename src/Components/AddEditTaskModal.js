// src/components/AddEditTaskModal.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

function AddEditTaskModal({ task, onSave, onClose }) {
  const [rollNo, setRollNo] = useState('');
  const [name, setName] = useState('');
  const [marks, setMarks] = useState('');
  const [division, setDivision] = useState('');
  const [submissionDate, setSubmissionDate] = useState('');

  useEffect(() => {
    if (task) {
      setRollNo(task.rollNo);
      setName(task.name);
      setMarks(task.marks);
      setDivision(task.division);
      setSubmissionDate(task.submissionDate);
    }
  }, [task]);

  const handleSubmit = () => {
    const newTask = {
      id: task ? task.id : Date.now(),
      rollNo,
      name,
      marks,
      division,
      submissionDate,
      isCompleted: task ? task.isCompleted : false
    };
    onSave(newTask);
  };

  return (
    <Modal isOpen={true} onRequestClose={onClose}>
      <h2>{task ? 'Edit Task' : 'Add Task'}</h2>
      <form>
        <div>
          <label>Roll No.</label>
          <input type="text" value={rollNo} onChange={e => setRollNo(e.target.value)} />
        </div>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Marks</label>
          <input type="text" value={marks} onChange={e => setMarks(e.target.value)} />
        </div>
        <div>
          <label>Division</label>
          <input type="text" value={division} onChange={e => setDivision(e.target.value)} />
        </div>
        <div>
          <label>Submission Date</label>
          <input type="date" value={submissionDate} onChange={e => setSubmissionDate(e.target.value)} />
        </div>
        <button type="button" onClick={handleSubmit}>
          {task ? 'Save Changes' : 'Add Task'}
        </button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </Modal>
  );
}

export default AddEditTaskModal;
