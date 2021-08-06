import React from 'react';
import EachQuestion from './EachQuestion';
import { QUES_PER_PAGE } from './Constant';

const Question = ({question , page}) => {
    
    console.log('page',page)

    
    const startIndex = (page -1 ) * QUES_PER_PAGE
const selectedQues = question.slice(startIndex, startIndex + QUES_PER_PAGE)

console.log('start',startIndex)
return selectedQues.map(
  ques =>(
    <EachQuestion ques={ques} key={ques.id}></EachQuestion>
  )
)
}

export default Question;
