import React from "react";
import "./Admin1.css";
import { useState } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

/**
 * https://stackoverflow.com/questions/71915180/double-slider-sign-in-up-form-converting-to-react
 */

const Admin1 = () => { 
    const [isSignUpMode, setIsSignUpMode] = useState(false);
  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };
  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Admusername, setAdmUsername] = useState('');
  const [Admpassword, setAdmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Firstname:', firstname);
    console.log('Lastname:', lastname);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('AdmUsername:', Admusername);
    console.log('AdmPassword:', Admpassword);
  };

  const [swapPanel, setSwapPanel] = useState(false);
  const signUpButton = () => {
    setSwapPanel(true);
  };
  const signInButton = () => {
    setSwapPanel(false);
  };
  return (
    
      <div className={`Container ${isSignUpMode ? 'sign-up-mode':''}`} >
      <div class="forms--container">
        <div className="signin--signup">
        <form onSubmit={handleSubmit} className="sign-up-form loginForm" action="#">
          <h1 className="Atitles">Create Account</h1>
          <div className="inputfield">
              <input className='Login-Input' placeholder=" "  type="text" id="firstname"
                       value={firstname}
                       onChange={(e) => setFirstname(e.target.value)} />
              <label className="label-line" >FirstName</label>
            </div>
            <div className="inputfield">
              <input className='Login-Input' placeholder=" "  type="text" id="lastname"
                       value={lastname}
                       onChange={(e) => setLastname(e.target.value)} />
              <label className="label-line" >LastName</label>
            </div>
            <div className="inputfield">
              <input className='Login-Input' placeholder=" "  type="text" id="username"
                       value={username}
                       onChange={(e) => setUsername(e.target.value)} />
              <label className="label-line" >Email</label>
              <box-icon name='envelope' color='white'></box-icon>
            </div>
            <div className="inputfield">
              <input className='Login-Input' placeholder=" "  type="password" id="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)} />
              <label className="label-line" >Password</label>
              <box-icon name='lock-alt'color='white'></box-icon>
            </div>
          <button className='btnn'>Sign Up</button>
        </form>
      
        <form onSubmit={handleSubmit} className="sign-in-form loginForm" action="#">
        <h1 className="Atitles">Sign in</h1>
          <div className="inputfield">
              <input className='Login-Input' placeholder=" "  type="text" id="Admusername"
                       value={username}
                       onChange={(e) => setAdmUsername(e.target.value)} />
              <label className="label-line" >Email</label>
              <box-icon name='envelope'color='white'></box-icon>
            </div>
            <div className="inputfield">
              <input className='Login-Input' placeholder=" "  type="password" id="Admpassword"
                       value={password}
                       onChange={(e) => setAdmPassword(e.target.value)} />
              <label className="label-line" >Password</label>
              <box-icon name='lock-alt'  color='white'></box-icon>
            </div>
            <div className="l67">
              <label>&emsp;<input type="checkbox" />Remember Me</label>&emsp;&emsp;
              <a href="#">Forgot Password?</a><br />
            </div>
          <button className='btnn'><Link to="/admindash">Sign In</Link></button>
          <button className='btnn'><Link to="/Dashboard">Super user</Link></button>
        </form>
      </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className='loginh3'>Dont have an account?</h3>
          {/*  <p className='loginp'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p> */} 
            <button className="btntransparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src="/img/dogLogin1.svg" class="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className='loginh3'>Already Registerd ?</h3>
          {/*    <p className='loginp'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>  */} 
            <button onClick={handleSignInClick} className="btntransparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="/img/dogLogin.svg" class="image" alt="" />
        </div>
      </div>
    </div>
    
    
  );
};

export default Admin1;
