import React, {useState} from 'react';
import './App.css';
import {Page} from './Page.jsx'

function App() {
    const [data, updateData] = useState({
      surname: "", 
      name: "", 
      patronymic: "", 
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
    });

    var styles = {
      rowStyle: "form-group row",
      labelStyle: "col-sm-3 col-form-label text-right",
      inputStyle: "col-sm-9 form-control",
      messageLabelStyle: "col-sm-3 text-right"
    }

    return (
        <div>
          <Page datas={data} styles={styles} updateData={updateData}/>
        </div>
    )
};

export default App;
