import React from 'react';

export const Adress = (props) => {
  console.log("isLiveRegAdress=", props.isL)

  if ( props.isL ) {
      props.datas.localAdress = props.datas.regAdress;
      return (
        <div>
       
            <h4 align="center">АДРЕСА</h4>
            <div className={props.styles.rowStyle}>
                <label htmlFor="inputRegAdress" className={props.styles.labelStyle} align="right">Адреса реєстраціЇ</label>
                <div className={props.styles.inputStyle}>
                    <input type="text" className="form-control" id="inputRegAdress" placeholder="" onChange={(e)=>{props.changeData(e)}} name="regAdress" value={props.datas.regAdress}/>
                </div>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="isL"  onChange={(e) => {props.changeIsL()}} name="isL" value="" checked/> 
                <label htmlFor="isL" className="form-check-label" align="right">Проживаю за місцем реєстраціЇ</label>            
            </div>
        
        </div>
      )
  } else {
    return (
      <div>
          <h4 align="center">АДРЕСА</h4>
          <div className={props.styles.rowStyle}>
              <label htmlFor="inputRegAdress" className={props.styles.labelStyle} align="right">Адреса реєстраціЇ</label>
              <div className={props.styles.inputStyle}>
                  <input type="text" className="form-control" id="inputRegAdress" placeholder="" onChange={(e)=>{props.changeData(e)}} name="regAdress" value={props.datas.regAdress}/>
              </div>
          </div>
          <div className="form-check">
                <input type="checkbox" className="form-check-input" id="isL"  onChange={(e) => {props.changeIsL()}} name="noisL"  value="1"/> 
                <label htmlFor="isL" className="form-check-label" align="right">Проживаю за місцем реєстраціЇ</label>            
          </div>
          <div className={props.styles.rowStyle}>
              <label htmlFor="inputlocalAdress" className={props.styles.labelStyle} align="right">Адреса проживання</label>
              <div className={props.styles.inputStyle}>
                  <input type="text" className="form-control" id="inputlocalAdress" placeholder="" onChange={(e)=>{props.changeData(e)}} name="localAdress" value={props.datas.localAdress}/>
              </div>
          </div>
      </div>
    )
  }
};


