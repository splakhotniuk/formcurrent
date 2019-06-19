import React from 'react';

export const Passport = (props) => {
    console.log("Запрос на след стр=", props.isReqNextPage);
    var placeholderSeries = "AA";
    var placeholderNumber = "000000";
    var placeholderIssuer = "";
   

    if ( !props.datas.passportSeries ) {
        props.changeIsNextPagePossible(false);
        if ( props.isReqNextPage ) {
            placeholderSeries = "ОБОВ'ЯЗКОВО ЗАПОВНІТЬ ЦЕ ПОЛЕ!";
        }
    } else if ( !props.datas.passportNumber ) {
        props.changeIsNextPagePossible(false);
        if ( props.isReqNextPage ) {
            placeholderNumber = "ОБОВ'ЯЗКОВО ЗАПОВНІТЬ ЦЕ ПОЛЕ!";
        }
    } else if ( !props.datas.passportIssuer ) { 
        props.changeIsNextPagePossible(false);
        if ( props.isReqNextPage ) {
            placeholderIssuer = "ОБОВ'ЯЗКОВО ЗАПОВНІТЬ ЦЕ ПОЛЕ!";
        }
    } else {
        props.changeIsNextPagePossible(true);
    }
    
    
  return (
    <div>
        <h4 align="center">Паспорт</h4>
        <div className={props.styles.rowStyle}>
            <label htmlFor="inputPassportSeries" className={props.styles.labelStyle} align="right">Серія</label>
            <div className={props.styles.inputStyle}>
                <input type="text" className="form-control" id="inputPassportSeries" placeholder={placeholderSeries} onChange={(e)=>{props.changeData(e)}} name="passportSeries" value={props.datas.passportSeries}/>
            </div>
        </div>
        <div className={props.styles.rowStyle}>
            <label htmlFor="inputPassportNumber" className={props.styles.labelStyle} align="right">Номер</label>
            <div className={props.styles.inputStyle}>
                <input type="text" className="form-control" id="inputPassportNumber" placeholder={placeholderNumber} onChange={(e)=>{props.changeData(e)}} name="passportNumber" value={props.datas.passportNumber}/>
            </div>
        </div>
        <div className={props.styles.rowStyle}>
            <label htmlFor="inputPassportIssuer" className={props.styles.labelStyle} align="right">Ким виданий</label>
            <div className={props.styles.inputStyle}>
                <input type="text" className="form-control" id="inputPassportIssuer" placeholder={placeholderIssuer} onChange={(e)=>{props.changeData(e)}} name="passportIssuer" value={props.datas.passportIssuer}/>
            </div>
        </div>
    </div>
  )
};