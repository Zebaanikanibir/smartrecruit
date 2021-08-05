import React from 'react'
import './Sidebar.css';
const Sidebar = ({show}) => {
  return (
    <div className={show ? 'sidebar active ':'sidebar'}>
      <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Home</a></li>
      </ul>
    </div>
  )
}

export default Sidebar
