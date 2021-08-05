import React, { useEffect, useState } from 'react'
import data from './data.json';
import Box from './Box.js';
import './Questions.css';
import Bottom from './Bottom';
import PopUp from '../PopUp/PopUp';
import Pagination from './Pagination';
const Questions = () => {

const [question, setQuestion] = useState([])

  const [pageNumber, setPageNumber] = useState(0);
  
const [popUp, setPopUp] = useState(false)
const [currentPage, setCurrentPage] = useState(1)
const [quesPerPage, setQuesPerPage] = useState(1)
useEffect(()=>{


    setQuestion(data)
console.log("qqqq",question)
},[])

const indexOfLastQues = currentPage * quesPerPage
const indexOfFirstQues = indexOfLastQues - quesPerPage
const currentQues = question.slice(indexOfFirstQues, indexOfLastQues)

// const paginate = (pageNumber => setCurrentPage(pageNumber))
  return (
    <div>
        
      <div className="questions">
      {/* <Pagination quesPerPage={quesPerPage} totalQues={question.length} paginate={paginate}></Pagination> */}
         
            <div className="line">
                <h4 style={{ color: '#3A72B7',marginRight:'40px',marginTop:'40px'}}>Question: </h4>
               
                
                <svg style={{ width: '30px',color: '#3A72B7',marginTop:'18px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <svg onClick={() => setPopUp(true)} style={{ width: '30px',color: 'red',marginTop:'18px'}}  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            </div>


            <div className="box1">
             {
                 currentQues.map(ques =><p>{ques.questions}</p>)
             }
            </div>

            <div className="box0">
            
           
           {
              
              currentQues.map(ques=>ques.options.map(

                    option=>(
                        <div className="d-flex box2">
                        <p className="line1">{option.num}</p>
                            <p className="para">{option.choice}</p>
                        </div>
                    )
                ))
            
           }
            
           
            
    </div>
        </div>
        <PopUp trigger={popUp} setTrigger={setPopUp}>
           
        </PopUp>
        
        <Bottom></Bottom>
    </div>
  )
}

export default Questions
