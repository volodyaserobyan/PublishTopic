import React from 'react';
import './App.css';
import Login from './components/login/Login'
import Dashboard from './components/dashBoard/Dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Login} exact />
          <Route path='/dashboard' component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
