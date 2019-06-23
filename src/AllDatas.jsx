import React from 'react';

export const AllDatas = (props) => {
  var heading = {
        surname: "Прізвище", 
        name: "Ім'я:", 
        patronymic: "По батькові:", 
        birthday: "", 
        gender: "",
        passportSeries: "",
        passportNumber: "",
        passportIssuer: "",
        passportDate: "",
        ipn: "",
        isIpn: true,
        regAddress: "",
        localAddress: "",
        isLiveRegAddress: false
      }

      const renderHeading = () => {
          for ( var key in heading ) {
              return <h2>{heading[key]}</h2>
          }

      }
    
  return (
    <div>
      {renderHeading()}
    </div>
  )
};
