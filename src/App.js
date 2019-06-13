import React, {useState} from 'react';
import './App.css';
import {Page} from './Page.jsx'

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [data, updateData] = useState({
                                        surname: "", 
                                        name: "", 
                                        patronymic: "", 
                                        birthday: "", 
                                        gender: "",
                                        passportSeries: "",
                                        passportNumber: "",
                                        passportIssuer: "",
                                        ipn: "",
                                        regAddress: "",
                                        localAdress: ""
  });

  
  var styles = {
    rowStyle: "form-group row",
    labelStyle: "col-sm-3 col-form-label",
    inputStyle: "col-sm-9"
}

  const handleInput = (p) => {
    updateData({
        ...data,
        [p.target.name] : p.target.value
    });
  } 

  const changePageNumber = (diff) => {
    var nextPage = pageNumber + diff;

    if ( nextPage >= 0 && nextPage <=4 ) {
      setPageNumber(nextPage);
    }
  }

  return (
    <div className="container">
      <div>
        <Page pageNumber={pageNumber} datas={data} changeData={handleInput} styles={styles}/>
      </div>
      <div>
        <button onClick={() => {changePageNumber(-1)}}>Назад</button>
        <button onClick={() => {changePageNumber(1)}}>Далі</button>
      </div>
      
    </div>
  )
};

export default App;
