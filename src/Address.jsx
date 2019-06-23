import React from 'react';
import './badges.css'


export const Address = (props) => {
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

    const changeFlag = (e) => {
        props.updateData({
          ...props.datas,
          isLiveRegAddress : !props.datas.isLiveRegAddress
      });
    }

    const renderLocalAddressField = () => {
        if ( !props.datas.isLiveRegAddress ) {
            return (
                <div className={props.styles.rowStyle}>
                <label  className={props.styles.labelStyle}>Адреса проживання</label>
                <input type="text" className={setInputStyle("localAddress")} onChange={handleInput} name="localAddress" value={props.datas.localAddress}/>
                {showValidationMessage("localAddress")}
            </div>
            )
        }
        props.datas.localAddress = "";
        return null;
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


    if ( props.datas.regAddress && ( props.datas.isLiveRegAddress ||  props.datas.localAddress ) ) {
        props.setIsNextPagePossible(true);
    } else {
        props.setIsNextPagePossible(false);
    }

    return (
        <div>
            <form>
                <div className={props.styles.rowStyle}>
                    <label className={props.styles.labelStyle}>Адреса реєстрації</label>
                    <input type="text" className={setInputStyle("regAddress")}  onChange={handleInput} name="regAddress" value={props.datas.regAddress}/>
                    {showValidationMessage("regAddress")}
                </div>
                <div className={props.styles.rowStyle}>
                    <label  className={props.styles.messageLabelStyle}>
                        <input type="checkbox"  onChange={changeFlag} name="isLiveRegAddress" value={props.datas.isLiveRegAddress} checked={props.datas.isLiveRegAddress}/> 
                    </label> 
                    <div>
                        <label>Проживаю за місцем реєстраціЇ</label>
                    </div>
                </div>
                <div>{renderLocalAddressField()}</div> 
                <h6>* поле обов'язкове для заповнення</h6>
            </form>
        </div>
    )
};