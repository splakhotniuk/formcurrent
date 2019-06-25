/**
 * This is a React Component.
 *
 * @param {...string} inputStyle- A string param
 * 
 * @return {*} HTML form??????
 *
 * 
 */
import React from 'react';
import './badges.css'


export const Ipn = (props) => {

    var inputStyle = props.styles.inputStyle;

    const handleInput = (p) => {
        props.updateData({
            ...props.datas,
            [p.target.name] : p.target.value
        });
    } 

    const changeFlag = (e) => {
        props.updateData({
          ...props.datas,
          isIpn : !props.datas.isIpn
      });
    }

    const renderIpnField = () => {
        if ( props.datas.isIpn ) {
            return (
                <div className={props.styles.rowStyle}>
                <label  className={props.styles.labelStyle}>ІПН</label>
                <input type="text" className={setInputStyle("ipn")} onChange={handleInput} name="ipn" value={props.datas.ipn}/>
                {showValidationMessage("ipn")}
            </div>
            )
        }
        props.datas.ipn = "";
        return null;
    }
    
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

    if ( props.datas.ipn || !props.datas.isIpn ) {
        props.setIsNextPagePossible(true);
    } else {
        props.setIsNextPagePossible(false);
    }
                                          
    return (
        <div>
            <form>
                <div>{renderIpnField()}</div>
                <div className={props.styles.rowStyle}>
                    <label  className={props.styles.messageLabelStyle}>
                        <input type="checkbox" className="form-check-input" onChange={changeFlag} name="isIpn" value={props.datas.isIpn} checked={!props.datas.isIpn}/>
                    </label> 
                    <div>
                        <label  className="form-check-label">Відмовився від ІПН</label> 
                    </div>
                </div>
                <h6>* поле обов'язкове для заповнення</h6>
            </form>
        </div>
    )
};