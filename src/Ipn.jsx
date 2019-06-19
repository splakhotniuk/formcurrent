import React from 'react';

export const Ipn = (props) => {
    console.log(props.isIpn)

    
    if ( !props.isIpn ) {
        props.changeIsNextPagePossible(true);
        props.datas.ipn = "";

        return(
            <div>
                <h1>ІПН відсутній</h1>
                
    
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="isIpn"  onChange={(event)=>{props.changeIsIpn()}} name="isIpn" value="" checked/> 
                    <label htmlFor="isIpn" className="form-check-label" align="right">Відмовився від ІПН</label>            
                </div>
            </div>
        )
    } else {
        var placeholderIpn = "";

        if ( !props.datas.ipn ) {
            props.changeIsNextPagePossible(false);
            if ( props.isReqNextPage ) {
                placeholderIpn = "ОБОВ'ЯЗКОВО ЗАПОВНІТЬ ЦЕ ПОЛЕ!";
            }
        } else {
            props.changeIsNextPagePossible(true);
        }
        return (
            <div>
                <h4 align="center">ІПН</h4>
                <div className={props.styles.rowStyle}>
                    <label htmlFor="inputIpn" className={props.styles.labelStyle} align="right">ІПН</label>
                    <div className={props.styles.inputStyle}>
                        <input type="text" className="form-control" id="nputIpn" placeholder={placeholderIpn} onChange={(e)=>{props.changeData(e)}} name="ipn" value={props.datas.ipn}/>
                    </div>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="isIpn"  onChange={(event)=>{props.changeIsIpn()}} name="isIpn" value=""/> 
                    <label htmlFor="isIpn" className="form-check-label" align="right">Відмовився від ІПН</label>            
                </div>
            </div>
        )
    }
    
};