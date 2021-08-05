import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';
const Sidebar = ({show}) => {
  return (
    <div className={show ? 'sidebar active ':'sidebar'}>
      <ul>
          <li><Link to="/question">Question</Link></li>
          <li><Link to="/record">Record</Link></li>
          <li><Link to="/next">Next</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar
