import React from 'react';

export const Passport = (props) => {
    
    
  return (
    <div>
        <h4 align="center">Паспорт</h4>
        <div className={props.styles.rowStyle}>
            <label htmlFor="inputPassportSeries" className={props.styles.labelStyle} align="right">Серія</label>
            <div className={props.styles.inputStyle}>
                <input type="text" className="form-control" id="nputPassportSeries" placeholder="АА" onChange={(e)=>{props.changeData(e)}} name="passportSeries" value={props.datas.passportSeries}/>
            </div>
        </div>
        <div className={props.styles.rowStyle}>
            <label htmlFor="inputPassportNumber" className={props.styles.labelStyle} align="right">Номер</label>
            <div className={props.styles.inputStyle}>
                <input type="text" className="form-control" id="inputPassportNumber" placeholder="000000" onChange={(e)=>{props.changeData(e)}} name="passportNumber" value={props.datas.passportNumber}/>
            </div>
        </div>
        <div className={props.styles.rowStyle}>
            <label htmlFor="inputPassportIssuer" className={props.styles.labelStyle} align="right">Ким виданий</label>
            <div className={props.styles.inputStyle}>
                <input type="text" className="form-control" id="inputPassportIssuer" placeholder="" onChange={(e)=>{props.changeData(e)}} name="passportIssuer" value={props.datas.passportIssuer}/>
            </div>
        </div>
    </div>
  )
};