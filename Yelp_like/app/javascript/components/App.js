import React, {useState} from 'react';
import './App.css';
import Header from '../components/Header/Header';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Home from './Home/Home';
import PrivateRoute from '../utils/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AlertComponent from './AlertComponent/AlertComponent';  
import LoadData from "./loadData"
import Restaurant from './Restaurant/Restaurant';
import Restaurants from './Restaurants/Restaurants';

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
    <div className="App">
      <Header title={title}/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true} component={Restaurants}>
              {/* <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/> */}
            </Route>
            <Route path="/restaurants/:slug" component={Restaurant} />
            <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <PrivateRoute path="/home">
              <Home/>
            </PrivateRoute>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
        {/* <LoadData/> */}
    </div>
    </Router>
  );
}

export default App;