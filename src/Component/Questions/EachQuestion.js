import React, { useState } from 'react'
import PopUp from './../PopUp/PopUp';
import ReportPopUp from './../ReportPopUp/ReportPopUp';

const EachQuestion = ({ ques }) => {

    const [reportPopUp, setReportPopUp] = useState(false)
    console.log('ques', ques)
    return (
        <div>
            
            <div className="line">
                <h4 style={{ color: '#3A72B7', marginRight: '40px', marginTop: '20px',lineHeight: '20px',fontSize:'17px',fontWeight:'600' }}>Question: {ques.id}</h4>


                <div className="line-svg">
                <svg style={{ width: '30px', color: '#3A72B7',marginLeft:'100px' }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <svg onClick={() =>setReportPopUp(true)}   style={{ width: '30px', color: 'rgb(236, 108, 108)',marginLeft:'15px' }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
            </div>

            <div className="box1">
                <p>{ques.questions}</p>
            </div>
            <div className="box0">


                {

                    ques.options.map(option =>

                        <div className="d-flex box2">
                            <div className="line1">
                            <p>{option.num}</p>
                            </div>
                            <p className="para">{option.choice}</p>
                        </div>
                    )

                }



            </div>
            <ReportPopUp trigger={reportPopUp} setTrigger={setReportPopUp}></ReportPopUp>
        </div>
    )
}

export default EachQuestion
