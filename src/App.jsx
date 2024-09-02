import React from 'react';
import { useState } from 'react';
import './App.css';
import FirstName from './FIRST/FirstName.jsx';
import LastName from './LAST/LastName.jsx';
import Button from './Button/Button.jsx';
import Password from './PASSWORD/Password.jsx';
import Email from './EMAIL/Email.jsx';
import DesktopBack from '../images/bg-intro-desktop.png';
import MobileBack from '../images/bg-intro-mobile.png';


const App = () => {

  // EMAIL LOGIC
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleEmailChange = (value) => {
    setEmail(value);
    setIsEmailValid(emailRegex.test(value));
  };

  // PASSWORD LOGIC
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10}$/;
  const handlePasswordChange = (value) => {
    setPassword(value);
    setIsPasswordValid(passwordRegex.test(value));
  }

  // FIRST NAME LOGIC
  const [first, setFirst] = useState('');
  const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
  const handleFirstNameChange = (value) => {
    setFirst(value);
    setIsFirstNameEmpty(value.trim() === '');
  };

  // LAST NAME LOGIC
  const [last, setLast] = useState('');
  const [isLastNameEmpty, setIsLastNameEmpty] = useState(false);
  const handleLastNameChange = (value) => {
    setLast(value);
    setIsLastNameEmpty(value.trim() === '');
  };


  // OVERALL SUBMIT HANDLER
  const handleSubmit = (e) => {  // "e" is the event
    e.preventDefault();  // this function prevents the button from refreshing the page everytime it's clicked. Remember that we have to pass the "onClick" attribute to the button tag

    const isEmailValidNow = emailRegex.test(email);
    const isPasswordValidNow = passwordRegex.test(password);
    const isFirstNameEmptyNow = first.trim() === '';
    const isLastNameEmptyNow = last.trim() === '';
    
    setIsEmailValid(isEmailValidNow);
    setIsPasswordValid(isPasswordValidNow);
    setIsFirstNameEmpty(isFirstNameEmptyNow);
    setIsLastNameEmpty(isLastNameEmptyNow);
  };


  return (
    <>
      <div id="background-img">
        <img id="desktop" src={DesktopBack} alt="desktop pattern" />
        <img id="mobile" src={MobileBack} alt="mobile pattern" />
      </div>
      <div id="main">
        <div id="some-text">
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
        </div>
        <div id="info-form">
          <div id="purple-div">
            <p id="purple-div-p"><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
          </div>
          <div id="form-col">
            <form onSubmit={handleSubmit} id="form" noValidate>
              {<FirstName value={first} firstChange={handleFirstNameChange} isEmpty={isFirstNameEmpty} />}
              {<LastName value={last} lastChange={handleLastNameChange} isEmpty={isLastNameEmpty} />}
              {<Email value={email} emailChange={handleEmailChange} isValid={isEmailValid} />}
              {<Password value={password} passwordChange={handlePasswordChange} isValid={isPasswordValid} />}
              {<Button onClick={handleSubmit} />}
            </form>
            <p id='last-p'>By clicking the button, you are agreeing to our <a href=""><strong>Terms and Services</strong></a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
