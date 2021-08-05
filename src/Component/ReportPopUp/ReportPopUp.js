import React from 'react';
import './ReportPopUp.css';
const ReportPopUp = (props) => {
    return (props.trigger) ? (
        <div className="report">
            <div className="report-popup">
                <div style={{backgroundColor:'#2C5A98', height:'30px', width:'100%', textAlign:'center', color:'white',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>
                    <h6 style={{padding:'8px'}}>Report in question</h6>
                </div>
                <div className="report-popup-inner">

                   <div className="report-popup-inner-div">
                   <p style={{ color: '#3A72B7', textAlign: 'start',width:'90%',marginLeft:'10px' }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                   </div>
                <div className="report-issue">
<p>Issue on:</p>
<div className="report-issue-input">
<input type="checkbox" id="questions" name="questions"/>
  <label style={{color:'#2C5A98'}} for="questions">Questions</label>
  <input type="checkbox" id="answer" name="answer"/>
  <label style={{color:'#2C5A98'}} for="answer">Answer</label>

</div>

                </div>
                   <div className="report-button">
                   
                    <button className="report-button-cancel" onClick={() => props.setTrigger(false)}>Cancel</button>
                    <button className="report-button-submit">Submit</button>
                   </div>
                    {props.children}
                </div>
            </div>
        </div>
    ) : "";
}

export default ReportPopUp;
