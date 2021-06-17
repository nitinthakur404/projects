import React from 'react';
import ReactDOM from 'react-dom';
// import NameClass from './NameClass.js'
// import Parentscomponant from './Parentscomponant'
// import ReactConditional from './ReactConditional'
// import Personlist from './Personlist'
// import Namecard from './namecard'
// import Lifecycle from './Lifecycle'
import Home from './life/Home'
import './App.css'

// import style from './State.module.css' 
import State from './State';
ReactDOM.render(
  <React.Fragment>
    {/* <Lifecycle /> */}
    {/* <State /> */}
    {/* <Namecard /> */}
    <Home />
  </React.Fragment>,
  document.getElementById('root')
);






