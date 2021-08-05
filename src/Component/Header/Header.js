import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import Sidebar from '../Sidebar/Sidebar';
const Header = () => {

    const [showNav, setShowNav] = useState(false)
  return (
    <div >
     <header className="header">
     <FontAwesomeIcon icon={faBars} onClick={() => setShowNav(!showNav)}className="bars"/>
     </header>
     <Sidebar show={showNav}></Sidebar>
    </div>
  )
}

export default Header
