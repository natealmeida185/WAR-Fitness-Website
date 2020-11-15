import React, { useState, useEffect } from "react";
import { fire } from './firebase/fire';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './comps/Login'
import Setup from './comps/Setup';
import Hero from './comps/Hero';
import SetupHero from './comps/SetupHero';
import Preferences from './comps/Preferences';
import './App.css';

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [hasSetup, setHasSetup] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
      setisLoggedIn(true);
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
      setHasSetup(true);
  };

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user) {
        clearInputs();
        setUser(user);
      }
      else {
        setUser("");
      }
    })
  };

  useEffect(() => {
    authListener();
  }, [])
  
  if (isLoggedIn === true && user) {
    return (
      <>
        <Router>
          <Hero />
          <Switch>
            <Route path='#'/>
            <Route path='#'/>
            <Route path='#'/>
            <Route path='#'/>
            <Route path='#'/>
            <Route path='#'/>
            <Route path='#'/>
            <Route path='#'/>
            <Route path='/preferences' component={Preferences}/>
          </Switch>
        </Router>
      </>
    );
  }

  if (hasSetup === true) {
    return (
      <div className="setup">
        <SetupHero />
        <Setup user={user}/>
      </div>
    )
  }

  return (
    <div className="App">
        <Login email={email} setEmail={setEmail} setPassword={setPassword} 
        handleLogin={handleLogin} handleSignup={handleSignup}
        hasAccount={hasAccount} setHasAccount={setHasAccount}
        emailError={emailError} passwordError={passwordError}
        />
    </div>
  );
}

export default App;
