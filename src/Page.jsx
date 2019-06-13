import React, {useState} from 'react';
import {NameBirthGen} from './NameBirthGen'
import {Passport} from './Passport'
import {Adress} from './Adress'
import {Ipn} from './Ipn'
import {AllData} from './AllData'

export const Page = (props) => {
  const [isIpn, setIsIpn] = useState(true);
  const [isLiveRegAdress, setIsLiveRegAdress] = useState(false);

  const changeIsIpn = () => {setIsIpn(!isIpn);}

    var pages = [
    <NameBirthGen datas={props.datas} changeData={props.changeData} styles={props.styles}/>,
    <Passport datas={props.datas} changeData={props.changeData} styles={props.styles}/>,
    <Ipn datas={props.datas} changeData={props.changeData} styles={props.styles} isIpn={isIpn} changeIsIpn={changeIsIpn}/>,
    <Adress datas={props.datas} changeData={props.changeData} styles={props.styles}/>,
    <AllData datas={props.datas}/>,
    
    
];
  return (
    <div>
        
      {pages[props.pageNumber]}
    </div>
  )
};