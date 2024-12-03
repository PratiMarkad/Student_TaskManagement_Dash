import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import TaskTable from './Components/TaskTable';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      rollNo: '123',
      name: 'Alice Johnson',
      marks: '85',
      division: 'A',
      submissionDate: '2023-11-15',
      isCompleted: false,
    },
    // Add more initial tasks here if needed
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const markTaskAsComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: true } : task
      )
    );
  };

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route
              path="/tasks"
              element={
                <TaskTable
                  tasks={tasks}
                  onDelete={deleteTask}
                  onEdit={editTask}
                  onComplete={markTaskAsComplete}
                  onAdd={addTask}
                />
              }
            />
            <Route
              path="/"
              element={<div>Welcome to the Student Task Dashboard</div>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
