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

  const setNavigationButtons = () => {
    if ( !pageNumber ) {
      return (
        <div>
          <div>
            <button className="btn btn-success btn-block" onClick={() => setPageNumber(1)}>Ввести нові дані</button>
          </div>
          <div>
            <button className="btn btn-outline-primary btn-block" onClick={() => moveDownloadForvard()}>Завантажити готові дані</button>
          </div>
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
          <button className="btn btn-light" onClick={() => {changePageNumber(-1); setIsReqNextPage(false)}}>Назад</button>
          <button className="btn btn-success" onClick={() => moveForvard()}>Далі</button>
      </div>
    )
  }

  var prop = { 
    datas: props.datas,
    updateData: props.updateData,
    styles: props.styles,
    setIsNextPagePossible: setIsNextPagePossible,
    isReqNextPage: isReqNextPage,
    setNavigationButtons: setNavigationButtons
  } 

  var pages = [
    <StartPage setNavigationButtons={setNavigationButtons}/>,
    <NameBirthGen {...prop}/>,
    <Passport {...prop}/>,
    <Ipn {...prop}/>,
    <Address {...prop}/>,
    <AllData datas={props.datas} setNavigationButtons={setNavigationButtons}/>,
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
      props.datas.surname = "Иванов";
      props.datas.name = "Ivan"; 
      props.datas.patronymic =  "Ivanovich"; 
      props.datas.birthday = "1960-12-18";
      props.datas.gender = "Чоловіча";
      props.datas.passportSeries =  "AA";
      props.datas.passportNumber = "777777";
      props.datas.passportIssuer =  "Кивський обласний МВГУ МВС в Київській області";
      props.datas.passportDate = "1990-12-18";
      props.datas.ipn = "123456789";
      props.datas.isIpn = true;
      props.datas.regAddress =  "Kiev";
      props.datas.localAddress = "";
      props.datas.isLiveRegAddress =  true;

      setPageNumber(5);
  }

  const sendDatas = () => {
    axios.post('/api/questionary', props.datas);
  }

  return (
    <div className="container border border-info rounded">
      {pages[pageNumber]}
      
    </div>
  )
};
