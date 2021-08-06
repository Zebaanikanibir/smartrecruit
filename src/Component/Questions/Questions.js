import React, { useEffect, useState } from 'react'
import data from './data.json';
import Box from './Box.js';
import './Questions.css';
import Bottom from './Bottom';
import PopUp from '../PopUp/PopUp';
import Pagination from './Pagination';
import Question from './Question';
import { QUES_PER_PAGE } from './Constant';
const Questions = () => {

  const [question, setQuestion] = useState([])

  const [page, setPage] = useState(1);


  const [totalPage, setTotalPage] = useState(0)
  console.log('total', totalPage)
  // const [quesPerPage, setQuesPerPage] = useState(1)
  useEffect(() => {


    setQuestion(data)
    console.log("qqqq", question)
    setTotalPage(Math.ceil(data.length) / QUES_PER_PAGE)
  }, [])

  const handleClick = num => {
    setPage(num);
  }

  return (
    <div>
      
      <Pagination handleClick={handleClick} totalPage={totalPage}></Pagination>





      <div className="questions">

        <Question question={question} page={page}></Question>
      </div>
      <Bottom></Bottom>
    </div>





  )
}

export default Questions
