import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({quesPerPage, totalQues, paginate}) => {
const pageNumbers = []

for (let i = 1; i <= Math.ceil(totalQues / quesPerPage); i++) {
    pageNumbers.push(i)
    console.log('page',pageNumbers)
}
  return (
    <nav>
      <ul className="pagination">
          {
              pageNumbers.map(number => (

                <li  key={number}  className="page">
                    <a onClick={()=> paginate(number)} href="!#" style={{color:'blue'}}>
                        {number}
                    </a>
                </li>
              ))
          }
      </ul>
      
          {/* {
              pageNumbers.map(number => (

                <p key={number}  className="page">
                    <a href="!" className="page">
                        {number}
                    </a>
                </p>
              ))
          } */}
    
    </nav>
  );
}

export default Pagination;
