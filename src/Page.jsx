import React, {useState} from 'react';
import {NameBirthGen} from './NameBirthGen'
import {Passport} from './Passport'
import {Adress} from './Adress'
import {Ipn} from './Ipn'
import {AllData} from './AllData'

export const Page = (props) => {
  console.log("isReqNextPage=", props.isReqNextPage);
  const [isIpn, setIsIpn] = useState(true);
  const [isL, setIsL] = useState(false);

  const changeIsIpn = () => {setIsIpn(!isIpn);}
  const changeIsL = (e) => {setIsL(!isL);}

    var pages = [
    <NameBirthGen 
      datas={props.datas} 
      changeData={props.changeData} 
      styles={props.styles}
      isNextPagePossible={props.isNextPagePossible} 
      changeIsNextPagePossible={props.changeIsNextPagePossible}
      isReqNextPage={props.isReqNextPage}
      changeIsReqNextPage={props.changeIsReqNextPage}/>,
    <Passport 
      datas={props.datas} 
      changeData={props.changeData} 
      styles={props.styles}
      isNextPagePossible={props.isNextPagePossible} 
      changeIsNextPagePossible={props.changeIsNextPagePossible}
      isReqNextPage={props.isReqNextPage}
      changeIsReqNextPage={props.changeIsReqNextPage}/>,
    <Ipn 
      datas={props.datas} 
      changeData={props.changeData} 
      styles={props.styles} 
      isIpn={isIpn} 
      changeIsIpn={changeIsIpn}
      isNextPagePossible={props.isNextPagePossible} 
      changeIsNextPagePossible={props.changeIsNextPagePossible}
      isReqNextPage={props.isReqNextPage}
      changeIsReqNextPage={props.changeIsReqNextPage}/>,
    <Adress 
      datas={props.datas} 
      changeData={props.changeData} 
      styles={props.styles} 
      isL={isL} 
      changeIsL={changeIsL}
      isNextPagePossible={props.isNextPagePossible} 
      changeIsNextPagePossible={props.changeIsNextPagePossible}
      isReqNextPage={props.isReqNextPage}
      changeIsReqNextPage={props.changeIsReqNextPage}/>,
    <AllData datas={props.datas}/>,
    
    
];
  return (
    <div>
      {pages[props.pageNumber]}
    </div>
  )
};