import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Login from '../src/Components/Login';
import MyFriends from './Components/MyFriends';


function App() {
  return (
    <div className="App">
    <Router>
        <NavBar />
        <Route exact path='/login' component={Login} />
        <Route exact path='/myfriends' component={MyFriends} />
    </Router>
    </div>
  );
}

export default App;
