import React ,  {useState, useEffect} from 'react';

import axios from 'axios';



export const ViewSingle = (props) => {

    // 1.  Каким-то образом узнать идентификатор из адресной строки

    console.log("Пропсы VievSingle", props);

    // Определили идентификатор

    const id = props.match.params.id;

    console.log(id);

    // 2.  По идентификатору адресной строки получить данные из сервера. И вывести на экран.
    const [data, setData] = useState(null);

    const fetchData = () => {
        axios.get("/api/questionary/" + id)
            .then(
                (response) => setData(response.data)
            )
    }

    useEffect(
        fetchData, 
        [id]
    )

    const renderData = () => {
        return (
            <div>
            <div className="row">
              <dl className="form-control col-sm-3 text-right border-0">Прізвище</dl>
              <dd className="form-control col-sm-9 border-0 font-weight-bold">{data.surname}</dd>
            </div>
            <div className="row">
              <dl className="form-control col-sm-3 text-right border-0">Ім'я</dl>
              <dd className="form-control col-sm-9 border-0 font-weight-bold">{data.name}</dd>
            </div>
            <div className="row">
              <dl className="form-control col-sm-3 text-right border-0">По батькові</dl>
              <dd className="form-control col-sm-9 border-0 font-weight-bold">{data.patronymic}</dd>
            </div>
            <div className="row">
              <dl className="form-control col-sm-3 text-right border-0">Дата народження</dl>
              <dd className="form-control col-sm-9 border-0 font-weight-bold">{data.birthday}</dd>
            </div>
            <div className="row">
              <dl className="form-control col-sm-3 text-right border-0">Стать</dl>
              <dd className="form-control col-sm-9 border-0 font-weight-bold">{data.gender}</dd>
            </div>
            <div className="row">
              <dl className="form-control col-sm-3 text-right border-0">Паспорт серія</dl>
              <dd className="form-control col-sm-9 border-0 font-weight-bold">{data.passportSeries}</dd>
            </div>
            <div className="row">
              <dl className="form-control col-sm-3 text-right border-0">Паспорт номер</dl>
              <dd className="form-control col-sm-9 border-0 font-weight-bold">{data.passportNumber}</dd>
            </div>
            <dl className="row">
              <dl className="form-control col-sm-3 text-right border-0">Паспорт орган видачі</dl>
              <dd className="form-control col-sm-9 border-0 font-weight-bold">{data.passportIssuer}</dd>
            </dl>
            <div className="row">
              <dl className="form-control col-sm-3 text-right border-0">Паспорт дата видачі</dl>
              <dd className="form-control col-sm-9 border-0 font-weight-bold">{data.passportDate}</dd>
            </div>
            <div className="row">
              <dl className="form-control col-sm-3 text-right border-0">ІПН</dl>
              <dd className="form-control col-sm-9 border-0 font-weight-bold">{data.ipn}</dd>
            </div>
            <div className="row">
              <dl className="form-control col-sm-3 text-right border-0">Місце реєстраціЇ:</dl>
              <dd className="form-control col-sm-9 border-0 font-weight-bold">{data.regAddress}</dd>
            </div>
            <div className="row">
              <dl className="form-control col-sm-3 text-right border-0">Місце проживання:</dl>
              <dd className="form-control col-sm-9 border-0 font-weight-bold">{data.localAddress}</dd>
            </div>
            
          </div>
        )
    }

    return (
        <div>
            {(data == null) ? null : renderData()}
        </div>
    )
}