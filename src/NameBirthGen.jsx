import React from 'react';

export const NameBirthGen = (props) => {
    console.log(props.datas.gender)
    var placeholderSurname = "Прізвище";
    var placeholderName = "Ім'я";
    var placeholderPatronymic = "По батькові";
    var notification = "";
   
        if ( !props.datas.surname ) {
            props.changeIsNextPagePossible(false);
            if ( props.isReqNextPage ) {
                placeholderSurname = "ОБОВ'ЯЗКОВО ЗАПОВНІТЬ ЦЕ ПОЛЕ!";
            }
        } else if ( !props.datas.name ) {
            props.changeIsNextPagePossible(false);
            if ( props.isReqNextPage ) {
                placeholderName = "ОБОВ'ЯЗКОВО ЗАПОВНІТЬ ЦЕ ПОЛЕ!";
            }
        } else if ( !props.datas.patronymic ) { 
            props.changeIsNextPagePossible(false);
            if ( props.isReqNextPage ) {
                placeholderPatronymic = "ОБОВ'ЯЗКОВО ЗАПОВНІТЬ ЦЕ ПОЛЕ!";
            }
        } else if ( !props.datas.birthday ) {
            props.changeIsNextPagePossible(false);
            if ( props.isReqNextPage ) {
                notification = "БУДЬЛАСКА, ВКАЖІТЬ ДАТУ НАРОДЖЕННЯ";
            }
        } else if ( !props.datas.gender ) {
            props.changeIsNextPagePossible(false);
            if ( props.isReqNextPage ) {
                notification = "БУДЬЛАСКА, ВКАЖІТЬ СТАТЬ";
            }
        } else {
            props.changeIsNextPagePossible(true);
        }
    
  return (
    <div>
        <form>
            <div className={props.styles.rowStyle}>
                <label htmlFor="inputSurname" className={props.styles.labelStyle} align="right">Прізвище</label>
                <div className={props.styles.inputStyle}>
                    <input type="text" className="form-control" id="inputSurname" placeholder={placeholderSurname} onChange={(e)=>{props.changeData(e)}} name="surname" value={props.datas.surname} required/>
                </div>
            </div>
            <div className={props.styles.rowStyle}>
                <label htmlFor="inputName" className={props.styles.labelStyle} align="right">Ім'я</label>
                <div className={props.styles.inputStyle}>
                    <input type="text" className="form-control" id="inputName" placeholder={placeholderName} onChange={(e)=>{props.changeData(e)}} name="name" value={props.datas.name}/>
                </div>
            </div>
            <div className={props.styles.rowStyle}>
                <label htmlFor="inputPatronymic" className={props.styles.labelStyle} align="right">По батькові</label>
                <div className={props.styles.inputStyle}>
                    <input type="text" className="form-control" id="inputPatronymic" placeholder={placeholderPatronymic} onChange={(e)=>{props.changeData(e)}} name="patronymic" value={props.datas.patronymic}/>
                </div>
            </div>
            <div className={props.styles.rowStyle}>
                <label htmlFor="inputBirthday" className={props.styles.labelStyle} align="right">Дата народження</label>
                <div className={props.styles.inputStyle}>
                    <input type="date" className="form-control" id="inputBirthday"  onChange={(e)=>{props.changeData(e)}} name="birthday" value={props.datas.birthday}/>
                </div>
            </div>
            <div className={props.styles.rowStyle}>
                <label htmlFor="inputGender" className={props.styles.labelStyle} align="right">Стать</label>
                <select className={props.styles.inputStyle} id="inputGender" placeholder="" onChange={(e)=>{props.changeData(e)}} name="gender" value={props.datas.gender}>
                    <option>Не вибрана</option>
                    <option>Чоловіча</option>
                    <option>Жіноча</option>
                </select>
            </div>
            <h4>{notification}</h4>
        </form>
    </div>
  )
};