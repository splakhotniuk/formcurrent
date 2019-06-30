import React, {useEffect, useState} from 'react';
import {Link } from "react-router-dom";
import axios from 'axios';


export const BaseList = (props) =>{
  console.log("Пропсы List", props);
  const [data, setData] = useState([]);
  /**
   * Loads all data from server
   */
  const fetchData = () => {
      axios.get("/api/questionary")
          .then(
              (serverData) => {
                  console.log(`Server data = ${JSON.stringify(serverData.data)}`);
                  setData(serverData.data);
              }
          )
  }

  useEffect(fetchData, [])

  const dataRow = (person) => {
      return (
          <tr key={person._id}>
            <td>
              <div>
                <Link to={"/single/" + person._id}> Деталі </Link>
              </div>
            </td>
              <td>
                  {person.surname}
              </td> 
              <td>
                  {person.name}
              </td>
              <td>
                <div className="text-danger" onClick={() => {console.log('удаляется', person._id); axios.get("/single/delete/" + person._id).then((res)=>console.log(res))}}> Видалити </div>
              </td>
          </tr>
      )
  }

  return (
      <div>
          <table className="table">
              <thead>
                  <tr>
                      <th>

                      </th>
                      <th>
                          Прізвище
                      </th>
                      <th>
                          Ім'я
                      </th>
                  </tr>
              </thead>
              <tbody>

                  {
                      data.map(dataRow)
                  }

              </tbody>
          </table>
      </div>
  );
};