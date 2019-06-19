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
                                        regAdress: "",
                                        localAdress: ""
  });
  const[isNextPagePossible, setIsNextPagePossible] = useState(false);
  const[isReqNextPage, setIsReqNextPage] = useState(false);
  console.log("regAdress=", data.regAdress);
  console.log("localAdress=", data.localAdress);
  
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

  const changeIsNextPagePossible = (val) => {setIsNextPagePossible(val)}
  const changeIsReqNextPage = (val) => {setIsReqNextPage(val)}

  return (
    <div className="container">
      <div>
        <Page 
        pageNumber={pageNumber}
        datas={data} 
        changeData={handleInput} 
        styles={styles} 
        isNextPagePossible={isNextPagePossible} 
        changeIsNextPagePossible={changeIsNextPagePossible}
        isReqNextPage={isReqNextPage}
        changeIsReqNextPage={changeIsReqNextPage}/>
      </div>
      <div>
        <button onClick={() => {changePageNumber(-1)}}>Назад</button>
        <button onClick={() => {setIsReqNextPage(true);
                                if ( isNextPagePossible ) {
                                  changePageNumber(1);
                                  setIsReqNextPage(false); 
                                }
                                }
                        }>Далі</button>
      </div>
      
    </div>
  )
};

export default App;
