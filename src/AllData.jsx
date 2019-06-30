import React from 'react';

export const AllData = (props) => {
    
  return (
    <div>
      <div className="row">
        <div className="col-sm-3 text-right"><h2>Прізвище:</h2></div>
        <div className="cal-sm-9"><h3>{props.datas.surname}</h3></div>
      </div>
      <div className="row">
        <div className="col-sm-3 text-right"><h2>Ім'я:</h2></div>
        <div className="cal-sm-9"><h3>{props.datas.name}</h3></div>
      </div>
      <div className="row">
        <div className="col-sm-3 text-right"><h2>По батькові:</h2></div>
        <div className="cal-sm-9"><h3>{props.datas.patronymic}</h3></div>
      </div>
      <div className="row">
        <div className="col-sm-3 text-right"><h2>Дата народження:</h2></div>
        <div className="cal-sm-9"><h3>{props.datas.birthday}</h3></div>
      </div>
      <div className="row">
        <div className="col-sm-3 text-right"><h2>Стать:</h2></div>
        <div className="cal-sm-9"><h3>{props.datas.gender}</h3></div>
      </div>
      <div className="row">
        <div className="col-sm-3 text-right"><h2>Паспорт серія:</h2></div>
        <div className="cal-sm-9"><h3>{props.datas.passportSeries}</h3></div>
      </div>
      <div className="row">
        <div className="col-sm-3 text-right"><h2>Паспорт номер:</h2></div>
        <div className="cal-sm-9"><h3>{props.datas.passportNumber}</h3></div>
      </div>
      <div className="row">
        <div className="col-sm-3 text-right"><h2>Паспорт орган видачі:</h2></div>
        <div className="cal-sm-9"><h3>{props.datas.passportIssuer}</h3></div>
      </div>
      <div className="row">
        <div className="col-sm-3 text-right"><h2>Паспорт дата видачі:</h2></div>
        <div className="cal-sm-9"><h3>{props.datas.passportDate}</h3></div>
      </div>
      <div className="row">
        <div className="col-sm-3 text-right"><h2>ІПН:</h2></div>
        <div className="cal-sm-9"><h3>{props.datas.ipn}</h3></div>
      </div>
      <div className="row">
        <div className="col-sm-3 text-right"><h2>Місце реєстраціЇ: </h2></div>
        <div className="cal-sm-9"><h3>{props.datas.regAddress}</h3></div>
      </div>
      <div className="row">
        <div className="col-sm-3 text-right"><h2>Місце проживання:  </h2></div>
        <div className="cal-sm-9"><h3>{props.datas.localAddress}</h3></div>
      </div>
      <div className="container text-center">{props.setNavigationButtons()}</div>
    </div>
  )
};