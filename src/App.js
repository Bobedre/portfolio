//import './App.css';
//import { Route, Switch } from 'react-router-dom';
import AboutMe from './component/AboutMe';
//import {BrowserRouter as Router} from 'react-router-dom'
import Navigation from './component/Navigation';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Github from './component/Github';
import { auto } from 'async';
import context from 'react-bootstrap/esm/AccordionContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (              
    <Router>
        <div className="App">
        <Navigation/>
          <Switch>
            <Route path='/' exact component={AboutMe}/>   
            <Route path='/Projects' component={Projects}/>
            <Route path='/Contact' component={Contact}/>
            <Route path='/Github' component={Github}/>           
          </Switch>
        </div>
    </Router>
);
}


export default App;
