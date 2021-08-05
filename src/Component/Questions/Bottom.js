import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import ReportPopUp from '../ReportPopUp/ReportPopUp';
const Bottom = () => {

  const [reportPopUp, setReportPopUp] = useState(false)
  return (
    <div>
      <div className="bottom">
      <div className="box3">
      <div>
      <svg style={{width:'30px',color: '#3A72B7',}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
</svg>
<p style={{color:'#3A72B7', textAlign:'center'}}>Previous</p>
      </div>

<div>
<svg onClick={() =>setReportPopUp(true)} style={{width:'30px',color: '#3A72B7',}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
</svg>
<p style={{color:'#3A72B7', textAlign:'center'}}>Review</p>
</div>
<div>
<Link to="/next">
<svg  style={{width:'30px',color: '#3A72B7',}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></Link>
<p style={{color:'#3A72B7', textAlign:'center'}}>Next</p>
</div>
      </div>
    </div>
    <ReportPopUp trigger={reportPopUp} setTrigger={setReportPopUp}></ReportPopUp>
    </div>
  );
}

export default Bottom;
