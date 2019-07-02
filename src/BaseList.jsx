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

  const dataRow = (person, isViewMode = false) => {
   

      return (
          <tr key={person._id}>
            <td>
              <div>
                <button className="btn btn-outline-light btn-sm" onClick={() => {isViewMode=!isViewMode;}}><Link to={"/single/" + person._id}> Деталі </Link></button>
              </div>
            </td>
              <td>
                  {person.surname}
              </td> 
              <td>
                  {person.name}
              </td>
              <td>
                <button type="button" className="btn btn-outline-light btn-sm text-danger" onClick={() => {console.log('удаляется', person._id); axios.get("/single/delete/" + person._id).then(
              (serverData) => {
                  console.log(`Был удален  ${JSON.stringify(serverData.data)}`);
              }
          )}}> Видалити </button>
              </td>
          </tr>
      )
  }

  return (
      <div>
          <table className="table table-striped  table-hover table-responsive-sm">
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