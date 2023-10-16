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
  const [captcha, setCaptcha] = useState('');
  const [entercaptcha, setEntercaptcha] = useState('');
  const navigate = useNavigate();
  const [counter, setCounter] = useState(30);
  sessionStorage.clear('loggeduser');
   const generateCaptcha = () => {
    var alpha="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var a=alpha[Math.floor(Math.random()*alpha.length)];
    var b=alpha[Math.floor(Math.random()*alpha.length)];
    var c=alpha[Math.floor(Math.random()*alpha.length)];
    var d=alpha[Math.floor(Math.random()*alpha.length)];

    var code=a+b+c+d;
    setCaptcha(code);
  };
  useEffect(() => {
    generateCaptcha();
    // starttime();
  }, []);
 
 
  
  

 
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      if(counter===0){
        setCounter(30);
        generateCaptcha();
      }
    return () => clearInterval(timer);
    
  }, [counter])


  const handlePhoneNumberInput = (e) => {
    const cleanedValue = e.target.value.replace(/[^0-9]/g, ''); 
    setPhoneNumber(cleanedValue.slice(0, 10)); 
  };
  const regenerate=()=>{
    generateCaptcha();
    setCounter(30);
  }
  const submithandler = (e) => {
    e.preventDefault();
    setError('');
    if(entercaptcha!==captcha){ 
      setError('Captcha is not matching');
      return;
    }
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
        <img src="https://media.gettyimages.com/id/1408256671/photo/england-v-india-1st-royal-london-series-one-day-international.jpg?s=1024x1024&w=gi&k=20&c=Io5KS6w8bbyH6PLAz1_UB5cB65onc7v-R7FUgS0OBCg=" alt="Background" />
      </div>
      <div className="right-half">
        {/* Login Form */}
        <div className="container">
          <div className="card bg-light">
            <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
            {error && <div style={{ color: 'red' }}><h4>{error}</h4></div>}
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
                    className="form-control"
                    value={phoneNumber}
                    maxLength={10}
                    onChange={handlePhoneNumberInput}
                  />
                </div>

                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                  </div>
                  <input
                    placeholder="password"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                <p id="mainCaptcha" style={{color:'green'}}><h3>{captcha}</h3></p>
                <p id="countdown" className="countdown" style={{color:'red'}}>{counter}</p>
                <input  className="form-control-1" type="text" id="chapthaEntered" placeholder="Enter Captha" maxLength={4} onChange={(e)=>setEntercaptcha(e.target.value)}/>
                <i className="fa fa-refresh" id="refresh" onClick={regenerate} ></i>
                </div>
                <div className="pt-1 mb-4">
                  <button className="btn btn-success" onClick={submithandler} type="submit">Login</button>
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