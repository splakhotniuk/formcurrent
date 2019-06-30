import React from 'react';
import './badges.css'

export const NameBirthGen = (props) => {
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
            return (
                
                <div className="invalid-feedback">
                    <label className={props.styles.messageLabelStyle}></label>
                    ОБОВ'ЯЗКОВО ЗАПОВНІТЬ ЦЕ ПОЛЕ
                </div>
            )
        } else {
            return null
        }
    }

    if ( props.datas.surname && props.datas.name && props.datas.patronymic && props.datas.birthday && props.datas.gender) {
        props.setIsNextPagePossible(true);
    } else {
        props.setIsNextPagePossible(false);
    }
    
                                          
    return (
        <div>
            <form>
                <div className={props.styles.rowStyle}>
                    <label htmlFor="inputSurname" className={props.styles.labelStyle}>Прізвище</label>
                    <input type="text" className={setInputStyle("surname")} onChange={handleInput} name="surname" value={props.datas.surname}/>
                    {showValidationMessage("surname")}
                </div>
                <div className={props.styles.rowStyle}>
                    <label htmlFor="inputName" className={props.styles.labelStyle}>Ім'я</label>
                    <input type="text" className={setInputStyle("name")} onChange={handleInput} name="name" value={props.datas.name}/>
                    {showValidationMessage("name")}
                </div>
                <div className={props.styles.rowStyle}>
                    <label htmlFor="inputPatronymic" className={props.styles.labelStyle}>По батькові</label>
                    <input type="text" className={setInputStyle("patronymic")} onChange={handleInput} name="patronymic" value={props.datas.patronymic}/>
                    {showValidationMessage("patronymic")}
                </div>
                <div className={props.styles.rowStyle}>
                    <label htmlFor="inputBirthday" className={props.styles.labelStyle}>Дата народження</label>
                    <input type="date" className={setInputStyle("birthday")} onChange={handleInput} name="birthday" value={props.datas.birthday}/>
                    {showValidationMessage("birthday")}
                </div>
                <div className={props.styles.rowStyle}>
                    <label htmlFor="inputGender" className={props.styles.labelStyle} align="right">Стать</label>
                    <select className={setInputStyle("gender")}   onChange={handleInput} name="gender" value={props.datas.gender}>
                        <option>Не вибрана</option>
                        <option>Чоловіча</option>
                        <option>Жіноча</option>
                    </select>
                    {showValidationMessage("gender")}
                </div>
                <h6>* поле обов'язкове для заповнення</h6>
            </form>
            <div className="container text-center">{props.setNavigationButtons()}</div>
        </div>
    )
};