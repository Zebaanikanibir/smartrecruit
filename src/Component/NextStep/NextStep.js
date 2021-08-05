import { Doughnut } from 'react-chartjs-2';
import React from 'react'
import './NextStep.css';
const NextStep = () => {
    
  return (
    <div className="nextStep">
        <div>
        <div style={{padding:'50px'}}>
        <h1 style={{fontWeight:'700' ,fontSize:'28px',color:'#2C5A98',textAlign:'center',}}>ONE MORE STEP</h1>
        <h1 style={{fontWeight:'200' ,fontSize:'25px',color:'#2C5A98',textAlign:'center'}}>TO SUBMIT THE TEST</h1>
        </div>
      
      <div className="graph">
      <div className="donugut">
  <div className="donut-chart-block block"> 
		<div className="donut-chart">
			<div id="part1" className="portion-block"><div className="circle"></div></div>
			<div id="part2" className="portion-block"><div className="circle"></div></div>
			<div id="part3" className="portion-block"><div className="circle"></div></div>
			<p className="center" style={{fontWeight:'200' ,fontSize:'25px',color:'#44CCA4',textAlign:'center'}}><p>SUMMARY</p>
        </p>        
		</div>
   </div>
   <div className="lineDiv">
<div>
  <div className="lineDiv1">

  </div>
<p style={{color:'#2C5A98',textAlign:'center', marginBottom:'10px'}}>Attempt</p>
</div>
<div>
  <div className="lineDiv2">

  </div>
<p style={{color:'#2C5A98',textAlign:'center', marginBottom:'10px'}}>Review</p>
</div>
<div>
  <div className="lineDiv3">

  </div>
<p style={{color:'#2C5A98',textAlign:'center', marginBottom:'10px'}}>Skipped</p>
</div>


      </div>
</div>
      </div>
      
      <h1 style={{fontWeight:'700' ,fontSize:'28px',color:'#2C5A98',textAlign:'center',marginTop:'50px'}}>TEST SUMMERY</h1>
      <div className="questionInfo">
      <div className="questionInfo-1">
      <svg style={{width:'30px',color:'#2C5A98'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<p style={{ color:'#2C5A98'}}>Total questions</p>
<p style={{ color:'red'}}>25</p>
<svg style={{width:'30px', color:'#2C5A98'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
</svg>
      </div>
      <div className="questionInfo-1">
      <svg style={{width:'30px', color:'#2C5A98'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
</svg>
<p style={{ color:'#2C5A98'}}>Attempt questions</p>
<p style={{ color:'red'}}>5</p>
<svg style={{width:'30px', color:'#2C5A98'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
</svg>
      </div>
      <div className="questionInfo-1">
      <svg style={{width:'30px', color:'#2C5A98'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
</svg>
<p style={{ color:'#2C5A98'}}>Skipped questions</p>
<p style={{ color:'red'}}>2</p>
<svg style={{width:'30px', color:'#2C5A98'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
</svg>
      </div>
      <div className="questionInfo-1">
      <svg style={{width:'30px', color:'#2C5A98'}}  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
</svg>
<p style={{ color:'#2C5A98'}}>Review questions</p>
<p style={{ color:'red'}}>25</p>
<svg style={{width:'30px', color:'#2C5A98'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
</svg>
      </div>
    
      </div>
      <div className="buttonDiv">
<button className="button1">REATTEMPT</button>
<button className="button2">SUBMIT</button>
<button className="button3">EXIT</button>
      </div>
        </div>
    </div>
  )
}

export default NextStep
