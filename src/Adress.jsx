import React from 'react';

export const Adress = (props) => {
    console.log("isLiveRegAdress=", props.isL)
    var placeholderRegAdress = "";
    var placeholderLocalAdress = "";
    

    if ( !props.datas.regAdress ) {
        props.changeIsNextPagePossible(false);
        if ( props.isReqNextPage ) {
            placeholderRegAdress = "ОБОВ'ЯЗКОВО ЗАПОВНІТЬ ЦЕ ПОЛЕ!";
        }
    }

    if ( props.isL ) {
        props.datas.localAdress = props.datas.regAdress;
        props.changeIsNextPagePossible(true);

        return (
            <div>
        
                <h4 align="center">АДРЕСА</h4>
                <div className={props.styles.rowStyle}>
                    <label htmlFor="inputRegAdress" className={props.styles.labelStyle} align="right">Адреса реєстраціЇ</label>
                    <div className={props.styles.inputStyle}>
                        <input type="text" className="form-control" id="inputRegAdress" placeholder={placeholderRegAdress} onChange={(e)=>{props.changeData(e)}} name="regAdress" value={props.datas.regAdress}/>
                    </div>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="isL"  onChange={(e) => {props.changeIsL()}} name="isL" value="" checked/> 
                    <label htmlFor="isL" className="form-check-label" align="right">Проживаю за місцем реєстраціЇ</label>            
                </div>
                <div className={props.styles.rowStyle}>
                <label htmlFor="inputlocalAdress" className={props.styles.labelStyle} align="right">Адреса проживання</label>
                <div className={props.styles.inputStyle}>
                    <input type="text" className="form-control" id="inputlocalAdress" placeholder={placeholderLocalAdress} onChange={(e)=>{props.changeData(e)}} name="localAdress" value={props.datas.regAdress}/>
                </div>
            </div>
        </div>
        )
    } else {
       // props.datas.localAdress = "";
        if ( props.datas.localAdress === props.datas.regAdress ) {
            props.datas.localAdress = "";
        }
        if ( !props.datas.localAdress ) {
            props.changeIsNextPagePossible(false);
            if ( props.isReqNextPage ) {
                placeholderLocalAdress = "ОБОВ'ЯЗКОВО ЗАПОВНІТЬ ЦЕ ПОЛЕ!";
            }
        } else {
            props.changeIsNextPagePossible(true);
        }
        return (
        <div>
            <h4 align="center">АДРЕСА</h4>
            <div className={props.styles.rowStyle}>
                <label htmlFor="inputRegAdress" className={props.styles.labelStyle} align="right">Адреса реєстраціЇ</label>
                <div className={props.styles.inputStyle}>
                    <input type="text" className="form-control" id="inputRegAdress" placeholder={placeholderRegAdress} onChange={(e)=>{props.changeData(e)}} name="regAdress" value={props.datas.regAdress}/>
                </div>
            </div>
            <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="isL"  onChange={(e) => {props.changeIsL()}} name="noisL"  value="1"/> 
                    <label htmlFor="isL" className="form-check-label" align="right">Проживаю за місцем реєстраціЇ</label>            
            </div>
            <div className={props.styles.rowStyle}>
                <label htmlFor="inputlocalAdress" className={props.styles.labelStyle} align="right">Адреса проживання</label>
                <div className={props.styles.inputStyle}>
                    <input type="text" className="form-control" id="inputlocalAdress" placeholder={placeholderLocalAdress} onChange={(e)=>{props.changeData(e)}} name="localAdress" value={props.datas.localAdress}/>
                </div>
            </div>
        </div>
        )
    }
};


