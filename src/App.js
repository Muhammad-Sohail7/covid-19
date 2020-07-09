import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import {Globalstate} from "./components/Globalstate";
// import Menu from "./components/Menu"
import {BrowserRouter ,Route,Switch,NavLink} from "react-router-dom";
import Countrys from './components/Countrys';
// import { colors } from '@material-ui/core';



function App() {
  return (
    <div>
   
<Nav />

<BrowserRouter >



      <ul >
        <li>< NavLink activeClassName="active" className="lists" to="/"><span><button className="button">GLOBAL STATE</button></span></NavLink></li>
        <li><NavLink activeClassName="active" className="lists" to="/Countrys"><span><button className="button">WORLD STATE</button></span></NavLink></li>
       
        </ul>  
        <Switch>
    <Route exact path="/" component={Globalstate} />
    <Route path="/Countrys" component={Countrys} />
    {/* <Route path="/Contact" component={Contact} />
    <Route path="**" component={_404} /> */}
    </Switch>
    </BrowserRouter>
     {/* <Countrys /> */}

     {/* <Globalstate/> */}
     {/* <Menu /> */}
    </div>
  );
}

export default App;
