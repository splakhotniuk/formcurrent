import React from 'react';

export const AllData = (props) => {
    
  return (
    <div>
      <h1>Прізвище: {props.datas.surname}</h1>
      <h1>Ім'я: {props.datas.name}</h1>
      <h1>По батькові: {props.datas.patronymic}</h1>
      <h1>Дата народження: {props.datas.birthday}</h1>
      <h1>Стать: {props.datas.gender}</h1>
      <h1>Паспорт серія: {props.datas.passportSeries}</h1>
      <h1>Паспорт номер: {props.datas.passportNumber}</h1>
      <h1>Паспорт орган видачі: {props.datas.passportIssuer}</h1>
      <h1>ІПН: {props.datas.ipn}</h1>
      <h1>Місце реєстраціЇ: {props.datas.regAdress}</h1>
      <h1>Місце проживання: {props.datas.localAdress}</h1>
    </div>
  )
};