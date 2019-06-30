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
                <table>
                    <tbody>
                        <tr>
                            <td>Прізвище:</td> 
                            <td>{data.surname}</td> 
                        </tr>
                        <tr>
                            <td>Ім'я:</td>
                            <td>{data.name}</td>
                        </tr>
                        <tr>
                            <td>По-батькові</td>
                            <td>{data.patronymic}</td>
                        </tr>
                        <tr>
                            <td>Дата народження:</td>
                            <td>{data.birthday}</td>
                        </tr>
                        <tr>
                            <td>Стать:</td>
                            <td>{data.gender}</td>
                        </tr>
                        <tr>
                            <td>Паспорт серія:</td>
                            <td>{data.passportSeries}</td>
                        </tr>
                        <tr>
                            <td>Паспорт номер:</td>
                            <td>{data.passportNumber}</td>
                        </tr>
                        <tr>
                            <td>Паспорт орган видачі:</td>
                            <td>{data.passportIssuer}</td>
                        </tr>
                        <tr>
                            <td>Паспорт дата видачі</td>
                            <td>{data.passportDate}</td>
                        </tr>
                        <tr>
                            <td>ІПН:</td>
                            <td>{data.ipn}</td>
                        </tr>
                        <tr>
                            <td>Місце реєстраціЇ:</td>
                            <td>{data.regAddress}</td>
                        </tr>
                        <tr>
                            <td>Місце проживання:</td>
                            <td>{data.localAddress}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
            {(data == null) ? null : renderData()}
        </div>
    )
}