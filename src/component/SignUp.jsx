import React, { useEffect, useState } from 'react';
import './SignUp.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [playerType, setPlayerType] = useState('');
  const [checkpassword,setcheckpassword]=useState('');
  const [error,setError]=useState('');
  const [dateOfBirth,setdateOfBirth]=useState('');
  const navigate = useNavigate();
  const phoneNumber1 = sessionStorage.getItem('loggeduser');
  
  useEffect(() => {
  if (phoneNumber1) {
    axios.post(`http://localhost:8080/api/v1/getDetails/${phoneNumber1}`)
      .then(response => {
        const user = response.data[0];
        setFirstName(user.firstname || '');
        setLastName(user.last_name || '');
        setEmail(user.email_id || '');
        setPhoneNumber(user.phone_number || '');
        setcheckpassword(user.password || '');
        setdateOfBirth(user.date_of_birth || '');
        //setConfirmPassword(user.confirmPassword || '');
        setPlayerType(user.player_type || '');
      })
      .catch(error => {
        console.error(error);
      });
  }
}, [phoneNumber1]);

 const checkUserNameExistOrNot=()=>{
       const username=firstName;
       axios.post(`http://localhost:8080/api/v1/getuser/${username}`)
       .then((response)=>{
        console.log(response)
        setFirstName(username);
        setError("")
       })
       .catch(error => {
        console.error(error);
        setError("username allready exists");
      });
 }
 
  const UpdateDate = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      emailId,
      phoneNumber,
      dateOfBirth,
      password,
      playerType,
    };
    try {
      const response = await axios.post("http://localhost:8080/api/v1/UpdateUser", data);
      if(password===checkpassword){
            navigate('/userpage');
      console.log(response.data);
      }else{
        setError("Password is inValid")
      }
   
    } catch (error) {
      setError("Update is failed")
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      emailId,
      phoneNumber,
      dateOfBirth,
      password,
      confirmPassword,
      playerType,
    };
    try {
      const response = await axios.post("http://localhost:8080/api/v1/saveUser", data);
      navigate('/');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="maincontainer">
      <div className="container">
        <div className="card bg-light">
          <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
          {error && <div style={{ color: 'red' }}><h3>{error}</h3></div>}
            <h4 className="card-title mt-3 text-center">Create Account</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-users"></i></span>
                </div>
                <input
                  placeholder="Username"
                  name="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onBlur={checkUserNameExistOrNot}
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-users"></i> </span>
                </div>
                <input
                  placeholder="Full Name"
                  name="lastName"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                </div>
                <input
                  placeholder="Email Address"
                  name="emailId"
                  className="form-control"
                  value={emailId}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                </div>
                <input
                  placeholder="Phone Number"
                  name="phoneNumber"
                  className="form-control"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  disabled={phoneNumber1 !== null}
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i class="fa fa-calendar" aria-hidden="true"></i> </span>
                </div>
                <input
                 type="date"
                  placeholder="Phone Number"
                  name="dateOfBirth"
                  className="form-control"
                  value={dateOfBirth}
                  onChange={(e) => setdateOfBirth(e.target.value)}
                />
              </div>
              {phoneNumber1 ? null : (
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                </div>
                <input
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>)}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                </div>
                <input
                  placeholder="Password"
                  name="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className='fas fa-quidditch'></i> </span>
                </div>
                <select
                  name="playerType"
                  className="form-control"
                  value={playerType}
                  onChange={(e) => setPlayerType(e.target.value)}
                >
                  <option disabled value="">Select Player Type</option>
                  <option value="batsman">Batsman</option>
                  <option value="bowler">Bowler</option>
                  <option value="allrounder">All-rounder</option>
                </select>
              </div>
              <div className='bttn'>
                {!phoneNumber1 ? (
                  <>
                    <button className="btn btn-success" type="submit">
                      Save
                    </button>
                    <button className="btn btn-danger" style={{ marginLeft: '10px' }}>
                      Cancel
                    </button>
                  </>
                ) : <button className="btn btn-success" type="submit" onClick={UpdateDate}>
                update
              </button>}
              </div>

            </form>
          </article>
        </div>
      </div>
    </div>
  );
};
