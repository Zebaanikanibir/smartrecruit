import React from 'react';
import './PopUp.css';
const PopUp = (props) => {
  return(props.trigger) ?(
    
      <div className="popup">
          <div className="popup-inner">
              {/* <button onClick={() => props.setTrigger(false)}>close</button> */}

              <p style={{ textAlign:'center'}} > <span style={{color:'#3A72B7', textAlign:'center',fontWeight:'600',fontSize:'18px',borderBottom:'3px solid #F6F9FA',padding:'5px',width:'100px'}}>Submit Test</span> <br /><p style={{color:'#FA8282',textAlign:'start',marginBottom:'20px',fontWeight:'600',fontStyle:'18px',marginTop:'10px',marginLeft:'28px'}}>Quite Test</p></p>
            
              
              {props.children}
          </div>
      </div>
   
  ):"";
}

export default PopUp;
