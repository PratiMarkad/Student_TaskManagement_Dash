// // src/components/Sidebar.js
// import React from 'react';

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <h2>Dashboard</h2>
//       <ul>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Settings</a></li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;

// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Student Dashboard</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </div>
  );
}


export default Sidebar;
