import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NavBar from './NavBar';
import SignUp from './SignUp';
import Products from './Products';
import Home from './Home';


function App() {
  return (
  <Router>
    <NavBar/>
    <Switch>
      <Route path= '/' exact component={Home}></Route>
      <Route path= '/products' component={Products}></Route>
      <Route path= '/signup' component={SignUp}></Route>
    </Switch>
</Router>
  );
}

export default App;
