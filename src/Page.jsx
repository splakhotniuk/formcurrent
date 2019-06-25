import React, {useState} from 'react';
import axios from 'axios';

import {NameBirthGen} from './NameBirthGen'
import {Passport} from './Passport'
import {Address} from './Address'
import {Ipn} from './Ipn'
import {AllData} from './AllData'
import {StartPage} from './StartPage'

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
    <StartPage {...prop}/>,
    <NameBirthGen {...prop}/>,
    <Passport {...prop}/>,
    <Ipn {...prop}/>,
    <Address {...prop}/>,
    <AllData datas={props.datas}/>,
  ];
  
  const changePageNumber = (diff) => {
    var nextPage = pageNumber + diff;

    if ( nextPage >= 0 && nextPage <=5 ) {
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

  const moveDownloadForvard = () => {
      props.datas.surname = "Ivanov";
      props.datas.name = "Ivan"; 
      props.datas.patronymic =  "Ivanovich"; 
      props.datas.birthday = "1960-12-18";
      props.datas.gender = "Чоловіча";
      props.datas.passportSeries =  "AA";
      props.datas.passportNumber = "777777";
      props.datas.passportIssuer =  "Issuer";
      props.datas.passportDate = "1990-12-18";
      props.datas.ipn = "123456789";
      props.datas.isIpn = true;
      props.datas.regAddress =  "Kiev";
      props.datas.localAddress = "";
      props.datas.isLiveRegAddress =  true;

      setPageNumber(5);
  }

  const sendDatas = () => {
    axios.post('localhost:3000', props.datas);
  }

  const setButtons = () => {
    if ( !pageNumber ) {
      return (
        <div>
          <button className="btn btn-success" onClick={() => moveForvard()}>Заповнити вручну</button>
          <button className="btn btn-primary" onClick={() => moveDownloadForvard()}>Отримати список даних</button>
        </div>
      )
    } else if ( pageNumber === 5 ) {
      return (
        <div>
          <button className="btn btn-light" onClick={() => changePageNumber(-1)}>Назад</button>
          <button className="btn btn-primary" onClick={() => sendDatas()}>Відправити</button>
      </div>
      )
    }
    return (
      <div>
          <button className="btn btn-light" onClick={() => changePageNumber(-1)}>Назад</button>
          <button className="btn btn-success" onClick={() => moveForvard()}>Далі</button>
      </div>
    )
  }

  return (
    <div className="container">
      {pages[pageNumber]}
      <div className="text-center">
          {setButtons()}
      </div>
    </div>
  )
};