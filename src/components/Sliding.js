import React, { useState ,useEffect } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
//import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "./Sliding.css";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };
  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };
  const [currentUser, setCurrentUser] = useState();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // axios.defaults.xsrfCookieName = 'csrftoken';
  // axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  // axios.defaults.withCredentials = true;

  // const client = axios.create({
  //   baseURL: "http://127.0.0.1:8000"
  // });


  // useEffect(() => {
  //   client.get("/api/user")
  //     .then(function (res) {
  //       setCurrentUser(true);
  //     })
  //     .catch(function (error) {
  //       setCurrentUser(false);
  //     });
  // }, []);

  // function submitRegistration(e) {
  //   e.preventDefault();
  //   client.post(
  //     "/api/register",
  //     {
  //       username: username,
  //       email: email,
  //       password: password
  //     }
  //   ).then(function (res) {
  //     client.post(
  //       "/api/login",
  //       {
  //         email: email,
  //         password: password
  //       }
  //     ).then(function (res) {
  //       setCurrentUser(true);
  //     });
  //   });
  // }

  // function submitLogin(e) {
  //   e.preventDefault();
  //   client.post(
  //     "/api/login",
  //     {
  //       email: email,
  //       password: password
  //     }
  //   ).then(function (res) {
  //     setCurrentUser(true);
  //   });
  // }

  // function submitLogout(e) {
  //   e.preventDefault();
  //   client.post(
  //     "/api/logout",
  //     { withCredentials: true }
  //   ).then(function (res) {
  //     setCurrentUser(false);
  //   });
  // }
  // if (currentUser) {
  //   return (
  //     <div>
  //       <Navbar bg="dark" variant="dark">
  //         <Container>
  //           <Navbar.Brand>Authentication App</Navbar.Brand>
  //           <Navbar.Toggle />
  //           <Navbar.Collapse className="justify-content-end">
  //             <Navbar.Text>
  //               <form onSubmit={e => submitLogout(e)}>
  //                 <Button type="submit" variant="light">Log out</Button>
  //               </form>
  //             </Navbar.Text>
  //           </Navbar.Collapse>
  //         </Container>
  //       </Navbar>
  //       <div className="center">
  //         <h2>You're logged in!</h2>
  //       </div>
  //     </div>
  //   );
  // }

  useEffect(() => {
    // This useEffect block will run when the component mounts.
    // You can use it to check if the user is already authenticated.
    axios.get("http://127.0.0.1:8000/api/user/", { withCredentials: true })
      .then(function (res) {
        setCurrentUser(true);
      })
      .catch(function (error) {
        setCurrentUser(false);
      });
  }, []);

  function submitRegistration(e) {
    e.preventDefault();
    axios.post(
      "http://127.0.0.1:8000/api/user/",
      {
        username: username,
        email: email,
        password: password
      },
      { withCredentials: true }
    ).then(function (res) {
      // Handle successful registration, you might want to redirect the user or show a success message.
    }).catch(function (error) {
      // Handle registration error, display an error message to the user.
    });
  }

  function submitLogin(e) {
    e.preventDefault();
    axios.post(
      "http://your-django-backend/api/login",
      {
        email: email,
        password: password
      },
      { withCredentials: true }
    ).then(function (res) {
      setCurrentUser(true);
    }).catch(function (error) {
      // Handle login error, display an error message to the user.
    });
  }

  function submitLogout(e) {
    e.preventDefault();
    axios.post(
      "http://your-django-backend/api/logout",
      null,
      { withCredentials: true }
    ).then(function (res) {
      setCurrentUser(false);
    }).catch(function (error) {
      // Handle logout error, display an error message to the user.
    });
  }

  if (currentUser) {
    // Render authenticated user view
    return (
      <div>
        {/* ... Your authenticated user view code ... */}
      </div>
    );
  }

  return (
    <div className={`loginContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
        {/* <form onSubmit={e => submitRegistration(e)} action="#" className="sign-in-form loginForm"> */}
          <form  action="#" className="sign-in-form loginForm">
            <h2 className="title">Sign in</h2>
            <div className="input-field1">
              <input className='LoginInput' placeholder=" " type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <label className="labelline" >Email</label>
              <box-icon name='envelope' color='white' ></box-icon>
            </div>
            <div className="input-field1">
              <input className='LoginInput' placeholder=" " type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <label className="labelline" >Password</label>
              <box-icon name='lock-alt' color='white' ></box-icon>
            </div><br />
            <div className="l3">
              <label>&emsp;<input type="checkbox" />Remember Me</label>&emsp;&emsp;
              <a href="#">Forgot Password?</a><br />
            </div>
            <button type='submit' className='btn'><Link to="/UserDashboard">Login</Link></button><div><hr style={{ background: 'white', color: 'white', borderColor: 'white', height: '3px', width: '200px' }} /></div><br />
            <div className='Admin-Link'>
              <Link to="/admin">Admin Login</Link>
            </div>

            {/*    <p className="social-text loginp"> Sign in with social platforms</p>
            <div className="social-media">
              
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto'/>
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className='my-auto mx-auto'/>
              </a>
            </div> */}
          </form>
          {/* <form action="#" onSubmit={e => submitLogin(e)} className="sign-up-form loginForm"> */}
          <form action="#" className="sign-up-form loginForm">
            <h2 className="title">Sign up</h2>
            <div className="input-field1">
              <input className='LoginInput' placeholder=" " type="text" id="lastname"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
              <label className="labelline" >Full Name</label>
            </div>
            <div className="input-field1">
              <input className='LoginInput' placeholder="" type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <label className="labelline" >Email</label>
              <box-icon name='envelope' color='white' ></box-icon>
            </div>
            <div className="input-field1">
              <input className='LoginInput' placeholder=" " type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <label className="labelline" >Password</label>
              <box-icon name='lock-alt' color='white' ></box-icon>
            </div>
            <button type='submit' className='btn'>Register</button><div><hr style={{ background: 'white', color: 'white', borderColor: 'white', height: '3px', width: '200px' }} /></div><br />
            <div className='Admin-Link'>
              <Link to="/admin">Admin Login</Link>
            </div>
            {/*   <p className="social-text loginp">Or Sign up with social platforms</p>
            <div className="social-media">
             
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto'/>
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className='my-auto mx-auto'/>
              </a>
            </div>*/}
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
              Register
            </button>
          </div>
          <img src="./images/logo.svg" class="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className='loginh3'>Already Registerd ?</h3>
            {/*    <p className='loginp'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>  */}
            <button onClick={handleSignInClick} className="btntransparent" id="sign-in-btn">
              Login
            </button>
          </div>
          <img src="./images/logo1.svg" class="image" alt="" />
        </div>
      </div>
    </div>
  )
}

export default LoginPage