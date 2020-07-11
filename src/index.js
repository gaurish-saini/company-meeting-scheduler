import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './Components/Search';
import Add from './Components/Add';
import Notfound from './notfound'
import {
    Route,
    BrowserRouter as Router,
    Switch
  } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Header from './Components/Common/Header'

const routing = (
    <Router>
      <div>
          <Header/>
          <hr/>
          <div style = {{marginTop : '5%' , marginLeft : '3%'}}>
          <Switch>
          <Route exact path="/" component={App} />
          <Route path="/search" component={Search} />
          <Route path="/add" component={Add} />
          <Route component={Notfound} />
          </Switch>
          </div>
      </div>
    </Router>
  )
ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
