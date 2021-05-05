import React, { useState, useEffect}  from 'react';
import Footer from './templates/Home/Footer'
import Header from './templates/Home/Header'
import Home from './Home'
import Loigin from './templates/Login/Loigin'
import './css/footer.css'
import './css/header.css'
import fire from '../fire'

function Login() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordEorror] = useState("loi pass");
  const [hasAccount, setHasAccount] = useState("false");

  const clearInputs = () =>{
    setEmail("");
    setPassword("");
  }
  const clearErrors = () =>{
    setEmailError("");
    setPasswordEorror("");
  }
  
  const handleLogin = () =>{
    clearErrors();
    fire 
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
            setEmailError(err.message);
            break;
        case "auth/wrong-password":
          setPasswordEorror(err.message);
          break;
      }
    });
  };
  const handleSignup = () =>{
    clearErrors();
    fire 
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
            setEmailError(err.message);
            break;
        case "auth/weak-password":
          setPasswordEorror(err.message);
          break;
      }
    });
  };
  const handleLoguot = () =>{
      fire.auth().signOut();
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) =>{
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() =>{
    authListener();
  }, []);

  return (
    <div className="login">
      { user ? (
        <div>
        <Home  handleLoguot={handleLoguot} />
        </div>
      ) : (
       <div>
        <Header  />
        <Loigin email={email} setEmail={setEmail} password={password} setPassword={setPassword} 
        handleLogin={handleLogin} handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount} 
        emailError={emailError} passwordError={passwordError} />
        <Footer  />
   </div>
      )}
  </div>
  );
  
  };

export default Login
