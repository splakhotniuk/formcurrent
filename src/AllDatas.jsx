import React from 'react';

export const AllDatas = (props) => {
  var heading = {
        surname: "Прізвище", 
        name: "Ім'я:", 
        patronymic: "По батькові:", 
        birthday: "", 
        gender: "",
        passportSeries: "",
        passportNumber: "",
        passportIssuer: "",
        passportDate: "",
        ipn: "",
        isIpn: true,
        regAddress: "",
        localAddress: "",
        isLiveRegAddress: false
      }


      //   somewhere ...data
    
  return (
    <div>
      
      {
        Object.keys(heading).map(
          (name) => {
            return (
              <div>
                <div>

<ul>
    {['first', 'second', 'third'].map((elem) => (<li>{elem}</li>))}
</ul>


</div>

                <div className="label">{heading[name]}</div>

                <div className="data"> {props.datas[name]}</div>
              </div>

            )
          }
        )
      }

    </div>
  )
};

/*app.delete('/single/delete/:id',
 (req, res) => {
     Questionary.findOneAndDelete({_id: req.params.id})
 }*/