import React from 'react';
import './badges.css'


export const Passport = (props) => {
    var inputStyle = props.styles.inputStyle;

    const setInputStyle = (inputName) => {
        if ( props.isReqNextPage ) {
            if ( props.datas[inputName] ) {
                return inputStyle + " is-valid";
            } else {
                return inputStyle + " is-invalid";
            } 
        }
        return inputStyle;
    }

    const handleInput = (p) => {
        props.updateData({
            ...props.datas,
            [p.target.name] : p.target.value
        });
    } 

    const showValidationMessage = (inputName) => {
        if ( !props.datas.inputName ) {
            return(
                <div className="invalid-feedback">
                    <label className={props.styles.messageLabelStyle}></label>
                    ОБОВ'ЯЗКОВО ЗАПОВНІТЬ ЦЕ ПОЛЕ
                </div>
            )
        } else {
            return null
        }
    }

    if ( props.datas.passportSeries && props.datas.passportNumber && props.datas.passportIssuer && props.datas.passportDate ) {
        props.setIsNextPagePossible(true);
    } else {
        props.setIsNextPagePossible(false);
    }
                                          
    return (
        <div>
            <h4 align="center">Паспорт</h4>
            <form>
                <div className={props.styles.rowStyle}>
                    <label className={props.styles.labelStyle}>Серія</label>
                    <input type="text" className={setInputStyle("passportSeries")}  onChange={handleInput} name="passportSeries" value={props.datas.passportSeries}/>
                    {showValidationMessage("passportSeries")}
                </div>
                <div className={props.styles.rowStyle}>
                    <label className={props.styles.labelStyle}>Номер</label>
                    <input type="text" className={setInputStyle("passportNumber")} onChange={handleInput} name="passportNumber" value={props.datas.passportNumber}/>
                    {showValidationMessage("passportNumber")}
                </div>
                <div className={props.styles.rowStyle}>
                    <label className={props.styles.labelStyle}>Ким виданий</label>
                    <input type="text" className={setInputStyle("passportIssuer")} onChange={handleInput} name="passportIssuer" value={props.datas.passportIssuer}/>
                    {showValidationMessage("passportIssuer")}
                </div>
                <div className={props.styles.rowStyle}>
                    <label className={props.styles.labelStyle}>Дата видачі</label>
                    <input type="date" className={setInputStyle("passportDate")} onChange={handleInput} name="passportDate" value={props.datas.passportDate}/>
                    {showValidationMessage("passportDate")}
                </div>
                <h6>* поле обов'язкове для заповнення</h6>
            </form>
        </div>
    )
};