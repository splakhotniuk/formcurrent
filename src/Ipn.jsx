import React from 'react';

export const Ipn = (props) => {

    return(
        <div>
            <IpnForm isIpn={props.isIpn} datas={props.datas} changeData={props.changeData} styles={props.styles}/>

            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="isIpn"  onChange={(event)=>{props.changeIsIpn()}} name="isIpn" value=""/> 
                <label htmlFor="isIpn" className="form-check-label" align="right">Відмовився від ІПН</label>            
            </div>
        </div>
    )
};

export const IpnForm = (props) => {

    if ( !props.isIpn ) {
        return (<h1>Нема ІПН";</h1>)
    } else {
        return (
            <div>
                <h4 align="center">ІПН</h4>
                <div className={props.styles.rowStyle}>
                    <label htmlFor="inputIpn" className={props.styles.labelStyle} align="right">ІПН</label>
                    <div className={props.styles.inputStyle}>
                        <input type="text" className="form-control" id="nputIpn" placeholder="" onChange={(e)=>{props.changeData(e)}} name="ipn" value={props.datas.ipn}/>
                    </div>
                </div>
                
            </div>
        )
    }
};