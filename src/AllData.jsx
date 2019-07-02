import React from 'react';

export const AllData = (props) => {
    
  return (
    <div>
      <div className="row">
        <dl className="form-control col-sm-3 text-right border-0">Прізвище</dl>
        <dd className="form-control col-sm-9 border-0 font-weight-bold">{props.datas.surname}</dd>
      </div>
      <div className="row">
        <dl className="form-control col-sm-3 text-right border-0">Ім'я</dl>
        <dd className="form-control col-sm-9 border-0 font-weight-bold">{props.datas.name}</dd>
      </div>
      <div className="row">
        <dl className="form-control col-sm-3 text-right border-0">По батькові</dl>
        <dd className="form-control col-sm-9 border-0 font-weight-bold">{props.datas.patronymic}</dd>
      </div>
      <div className="row">
        <dl className="form-control col-sm-3 text-right border-0">Дата народження</dl>
        <dd className="form-control col-sm-9 border-0 font-weight-bold">{props.datas.birthday}</dd>
      </div>
      <div className="row">
        <dl className="form-control col-sm-3 text-right border-0">Стать</dl>
        <dd className="form-control col-sm-9 border-0 font-weight-bold">{props.datas.gender}</dd>
      </div>
      <div className="row">
        <dl className="form-control col-sm-3 text-right border-0">Паспорт серія</dl>
        <dd className="form-control col-sm-9 border-0 font-weight-bold">{props.datas.passportSeries}</dd>
      </div>
      <div className="row">
        <dl className="form-control col-sm-3 text-right border-0">Паспорт номер</dl>
        <dd className="form-control col-sm-9 border-0 font-weight-bold">{props.datas.passportNumber}</dd>
      </div>
      <dl className="row">
        <dl className="form-control col-sm-3 text-right border-0">Паспорт орган видачі</dl>
        <dd className="form-control col-sm-9 border-0 font-weight-bold">{props.datas.passportIssuer}</dd>
      </dl>
      <div className="row">
        <dl className="form-control col-sm-3 text-right border-0">Паспорт дата видачі</dl>
        <dd className="form-control col-sm-9 border-0 font-weight-bold">{props.datas.passportDate}</dd>
      </div>
      <div className="row">
        <dl className="form-control col-sm-3 text-right border-0">ІПН</dl>
        <dd className="form-control col-sm-9 border-0 font-weight-bold">{props.datas.ipn}</dd>
      </div>
      <div className="row">
        <dl className="form-control col-sm-3 text-right border-0">Місце реєстраціЇ:</dl>
        <dd className="form-control col-sm-9 border-0 font-weight-bold">{props.datas.regAddress}</dd>
      </div>
      <div className="row">
        <dl className="form-control col-sm-3 text-right border-0">Місце проживання:</dl>
        <dd className="form-control col-sm-9 border-0 font-weight-bold">{props.datas.localAddress}</dd>
      </div>
      <div className="container text-center">{props.setNavigationButtons()}</div>
    </div>
  )
};