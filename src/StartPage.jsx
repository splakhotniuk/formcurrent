import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {BaseList} from './BaseList'
import {ViewSingle} from "./ViewSingle"

export const StartPage = (props) =>{
    return (
    <div className="container">
      <h4>Ви бажаєте:</h4>
      <div>{props.setNavigationButtons()}</div>
      <Router>
        <div>
          <Link to="/lookAllDatas"><button className="btn btn-primary btn-ld active btn-block">Переглянути список всіх клієнтів</button></Link>
        </div>
        <Route path="/lookAllDatas" exact component={BaseList}></Route>
        <Route path="/single/:id" exact component={ViewSingle}></Route>
      </Router>
    </div>
    );
};