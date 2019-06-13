import React from 'react';

export const NameBirthGen = (props) => {
    console.log(props.datas.gender)
    
  return (
    <div>
        <div className={props.styles.rowStyle}>
            <label htmlFor="inputSurname" className={props.styles.labelStyle} align="right">Прізвище</label>
            <div className={props.styles.inputStyle}>
                <input type="text" className="form-control" id="inputSurname" placeholder="Прізвище" onChange={(e)=>{props.changeData(e)}} name="surname" value={props.datas.surname}/>
            </div>
        </div>
        <div className={props.styles.rowStyle}>
            <label htmlFor="inputName" className={props.styles.labelStyle} align="right">Ім'я</label>
            <div className={props.styles.inputStyle}>
                <input type="text" className="form-control" id="inputName" placeholder="Ім'я" onChange={(e)=>{props.changeData(e)}} name="name" value={props.datas.name}/>
            </div>
        </div>
        <div className={props.styles.rowStyle}>
            <label htmlFor="inputPatronymic" className={props.styles.labelStyle} align="right">По батькові</label>
            <div className={props.styles.inputStyle}>
                <input type="text" className="form-control" id="inputPatronymic" placeholder="По батькові" onChange={(e)=>{props.changeData(e)}} name="patronymic" value={props.datas.patronymic}/>
            </div>
        </div>
        <div className={props.styles.rowStyle}>
            <label htmlFor="inputBirthday" className={props.styles.labelStyle} align="right">Дата народження</label>
            <div className={props.styles.inputStyle}>
                <input type="date" className="form-control" id="inputBirthday" placeholder="" onChange={(e)=>{props.changeData(e)}} name="birthday" value={props.datas.birthday}/>
            </div>
        </div>
        <div className={props.styles.rowStyle}>
            <label htmlFor="inputGender" className={props.styles.labelStyle} align="right">Стать</label>
            <select className={props.styles.inputStyle} id="inputGender" onChange={(e)=>{props.changeData(e)}} name="gender" value={props.datas.gender}>
                <option>Не вибрана</option>
                <option>Чоловіча</option>
                <option>Жіноча</option>
            </select>
        </div>
    </div>
  )
};