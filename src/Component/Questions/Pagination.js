import React, { useState } from 'react';
import PopUp from './../PopUp/PopUp';

const Pagination = ({totalPage,handleClick, handleBack}) => {
  const [popUp, setPopUp] = useState(false)
  const pages = [...Array(totalPage).keys()].map(num => num+1);
  const num = pages.map(num =>num)
  return (
    <div>
<div className="pagination-header">
  <div className="pagination-header-backward">
  <svg onClick={() =>handleBack(num-1)} style={{ width: '25px', color: 'white',marginTop:'10px',marginLeft:'10px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
</svg>
  </div>
<div className="menu">
<svg onClick={() => setPopUp(true)} style={{ width: '30px', color: '#3A72B7', textAlign:'end',marginRight:'20px' }}  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
</svg>
</div>
</div>
<div className="d-flex align-items-center justify-content-space-around">
     {
       pages.map(num =>
        <button key={num}
        className="pagination-button"
        onClick={() => handleClick(num)}
        >
          {num}
        </button>
        )
     }
     <button className="pagination-button-fixed">
       . .  .  .  .25
     </button>
    </div>
    <PopUp trigger={popUp} setTrigger={setPopUp}>

            </PopUp>
    </div>
  );
}

export default Pagination;
