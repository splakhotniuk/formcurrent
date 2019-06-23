import React, {useState} from 'react';

import {NameBirthGen} from './NameBirthGen'
import {Passport} from './Passport'
import {Address} from './Address'
import {Ipn} from './Ipn'
import {AllData} from './AllData'

export const Page = (props) => {
  const [pageNumber, setPageNumber] = useState(0);
  const[isNextPagePossible, setIsNextPagePossible] = useState(false);
  const[isReqNextPage, setIsReqNextPage] = useState(false);

  var prop = { 
    datas: props.datas,
    updateData: props.updateData,
    styles: props.styles,
    setIsNextPagePossible: setIsNextPagePossible,
    isReqNextPage: isReqNextPage
  }

  var pages = [
    <NameBirthGen {...prop}/>,
    <Passport {...prop}/>,
    <Ipn {...prop}/>,
    <Address {...prop}/>,
    <AllData datas={props.datas}/>,
  ];
  
  const changePageNumber = (diff) => {
    var nextPage = pageNumber + diff;

    if ( nextPage >= 0 && nextPage <=4 ) {
      setPageNumber(nextPage); 
    }
  }

  const moveForvard = () => {
    setIsReqNextPage(true);

    if ( isNextPagePossible ) {
      changePageNumber(1);
      setIsReqNextPage(false); 
    }
  }

  return (
    <div className="container">
      {pages[pageNumber]}
      <div className="text-center">
          <button className="btn btn-primary" onClick={() => {changePageNumber(-1)}}>Назад</button>
          <button className="btn btn-primary" onClick={() => {moveForvard()}}>Далі</button>
        </div>
    </div>
  )
};