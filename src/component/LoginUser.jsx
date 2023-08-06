import React, { useEffect, useState } from "react";
import './LoginUser.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginUser() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]=useState('');
  const navigate = useNavigate();
  sessionStorage.clear('loggeduser');

 
  const submithandler = (e) => {
    e.preventDefault();
    setError('');
    
    const data = {
      phoneNumber,
      password,
    };
    axios.post('http://localhost:8080/api/v1/loginUser', data)
    .then(response => {
      sessionStorage.setItem("loggeduser", phoneNumber);
      //setUser(response.data);
      navigate('/userpage');
    })
      .catch(error => {
        console.error(error);
        setError('Login Failed')
      });
  };

  return (
    <div className="split-screen">
      <div className="left-half">
        {/* Image */}
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="Background" />
      </div>
      <div className="right-half">
        {/* Login Form */}
        <div className="container">
          <div className="card bg-light">
            <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
            {error && <div style={{ color: 'red' }}><h3>{error}</h3></div>}
              <div className="d-flex align-items-center mb-3 pb-1">
                <FontAwesomeIcon icon={faCubes} className="logo-icon fa-2x me-3" />
                <span className="h1 fw-bold mb-0">LOGIN</span>
              </div>
              <form>
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                  </div>
                  <input
                    placeholder="Phonenumber"
                    name="phoneNumber"
                    className="form-control-1"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                  </div>
                  <input
                    placeholder="password"
                    name="password"
                    className="form-control-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="pt-1 mb-4">
                  <button className="btn btn-login btn-lg btn-block" onClick={submithandler} type="button">Login</button>
                </div>

                <a className="small text-muted" href="#!">Forgot password?</a>
                <p className="mb-5 pb-lg-2 login-form">
                  Don't have an account? <a href="/signup" className="login-form">Register here</a>
                </p>
                <a href="#!" className="small text-muted">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </form>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
