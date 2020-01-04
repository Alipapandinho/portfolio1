import React from 'react';
import './App.css';
import Who from './parts/who.js';
import Goals from './parts/goals.js';
import Journey from './parts/journey.js';
import Todo from './parts/todo.js';
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
  } from 'react-router-dom';
  
  
  const App = () => {
  
  
    return (
      <div>
        <Router>
          <div>
            <div>
              <Link to="/"><h2 className = 'Port-link'>Who</h2></Link>
              <Link to="/goals"><h2 className = 'Port-link'>Goals</h2></Link>
              <Link to="/journey"><h2 className = 'Port-link'>Done</h2></Link>
              <Link to="/todo"><h2 className = 'Port-link'>TODO</h2></Link>
            </div>
            <Route exact path="/" render={() => <Who />} />
            <Route path="/goals" render={() => <Goals />} />
            <Route path="/journey" render={() => <Journey />} />
            <Route path="/todo" render={() => <Todo />} />
          </div>
        </Router>
      </div>
    )
  }

export default App;
