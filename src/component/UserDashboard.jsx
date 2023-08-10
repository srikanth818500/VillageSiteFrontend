import React, { useState, useEffect } from 'react';
import './UserDashboard.css';
import axios from "axios";

function UserDashboard() {
  const [userDetails, setUserDetails] = useState(null);
  const [birthday,setbirthday]=useState(null);
  const phoneNumber = sessionStorage.getItem('loggeduser');

  useEffect(() => {
  
    if (phoneNumber) {
      axios.post(`http://localhost:8080/api/v1/getDetails/${phoneNumber}`)
        .then(response => {
          console.log("responsedata;;;;;;;;;;;;;;;;;;;;;;",response.data.birthdayDetails);
          setUserDetails(response.data.userDetails); // Store the user details in state
          setbirthday(response.data.birthdayDetails);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [phoneNumber]);

  if (userDetails && userDetails.length > 0) {
    const user = userDetails[0]; // Access the first user object in the array
    const birth=birthday[0];
    console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",birth)
    return (
      <div className="split-screen">
        <div className="left-half"></div>
        <div className="right-half">
          <form className="card-login">
            <h1>User Details</h1>
            <p>First Name: {user.firstname}</p>
            <p>Last Name: {user.last_name}</p>
            <p>Email: {user.email_id}</p>
            <p>birthday:{birth.firstname}</p>
            <p>{user.last_name}</p>
          </form>
        </div>
      </div>
    );
  } else {
    return <p>Loading user details...</p>;
  }
  
}

export default UserDashboard;
