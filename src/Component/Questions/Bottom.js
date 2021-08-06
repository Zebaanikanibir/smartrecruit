import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepForward,faStepBackward } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import ReportPopUp from '../ReportPopUp/ReportPopUp';
import './Bottom.css';
const Bottom = () => {

  const [reportPopUp, setReportPopUp] = useState(false)
  return (
    <div>
      <div className="bottom">
      <div className="box3">
      <div>
     <div className="bottom-icon">

     <svg style={{width:'35px',color: '#3A72B7',padding:'5px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
</svg>
     </div>
<p style={{color:'#3A72B7', textAlign:'center'}}>Previous</p>
      </div>

<div>
<div className="bottom-icon">
<svg style={{width:'35px',color: '#3A72B7',padding:'5px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
</svg>
</div>
<p style={{color:'#3A72B7', textAlign:'center'}}>Review</p>
</div>
<div>
<Link to="/next">
<div className="bottom-icon">
<svg style={{width:'35px',color: '#3A72B7', padding:'5px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
</svg>
</div>
</Link>
<p style={{color:'#3A72B7', textAlign:'center'}}>Next</p>
</div>
      </div>
    </div>
    
    </div>
  );
}

export default Bottom;
