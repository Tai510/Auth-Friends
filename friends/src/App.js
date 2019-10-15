import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Login from '../src/Components/Login'

function App() {
  return (
    <div className="App">
    <Router>
        <NavBar />
        <Route exact path='/login' component={Login} />
    </Router>
    </div>
  );
}

export default App;
