import React from 'react';
import './PopUp.css';
const PopUp = (props) => {
  return(props.trigger) ?(
    
      <div className="popup">
          <div className="popup-inner">
              {/* <button onClick={() => props.setTrigger(false)}>close</button> */}

              <p style={{color:'#3A72B7', textAlign:'center'}}>Submit Test</p>
              <p style={{color:'red',textAlign:'center'}}>Quite Test</p>
              {props.children}
          </div>
      </div>
   
  ):"";
}

export default PopUp;
