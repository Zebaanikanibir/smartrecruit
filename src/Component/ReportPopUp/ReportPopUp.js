import React from 'react';

import './ReportPopUp.css';
const ReportPopUp = (props) => {
    return (props.trigger) ? (
        <div className="report">
            <div className="report-popup">
                <div style={{backgroundColor:'#2C5A98', height:'40px', width:'100%', textAlign:'center', color:'white',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>
                    <p style={{padding:'7px' ,fontSize:'17px'}}>Report Error in question</p>
                </div>
                <div className="report-popup-inner">

                   <div className="report-popup-inner-div">
                   <p style={{ color: '#3A72B7', textAlign: 'start',width:'100%',marginLeft:'10px',fontSize:'17px',}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                   </div>
                <div className="report-issue">
<p style={{marginLeft:'20px',lineHeight:'17px',fontSize:'18px',fontWeight:'400'}} >Issue in:</p>
<div className="report-issue-input">

  
  <div className="div">
  <div class="checkbox" >
  <input  type="checkbox" id="questions" name="questions"/>
  <label  style={{color:'#2C5A98', fontSize:'14px',marginLeft:'10px',fontWeight:'600'}} for="questions"><span>Questions</span></label>
  </div>

  </div>
  <div className="div">
  <div class="checkbox">
  <input   type="checkbox" id="answer" name="answer"/>
  <label style={{color:'#2C5A98',fontSize:'14px',marginRight:'10px',fontWeight:'600' }} for="answer"><span>Answer</span></label>
  </div>
  </div>


</div>

                </div>
                   <div className="report-button">
                   
                    <button className="report-button-cancel" onClick={() => props.setTrigger(false)}>CANCLE</button>
                    <button className="report-button-submit">SUBMIT</button>
                   </div>
                    {props.children}
                </div>
            </div>
        </div>
    ) : "";
}

export default ReportPopUp;
