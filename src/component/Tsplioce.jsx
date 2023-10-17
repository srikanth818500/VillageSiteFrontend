import React, { useState } from 'react';
import './tspolice.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Tspolice() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [otp, setOtp] = useState('');


    // Define these functions or import them from appropriate modules
    const validateCharactersWithUnderScoreAndSlash = (input) => {
        // Your logic for validateCharactersWithUnderScoreAndSlash
      };
    
      const nospaces = (input) => {
        // Your logic for nospaces
      };
    
      const refreshCaptcha = () => {
        // Your logic for refreshing the captcha
      };
    
      const numericFilter = (input) => {
        // Your logic for numeric filtering
      };
  const message = '';
  const message1 = '';
  const m = '';
  const pageContext = '';
  const otpMsg = 'Y';
  const handleUserIdChange = (event) => {
    setUserId(event.target.value.toUpperCase());
    // You can add validation logic here if needed
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // You can add validation logic here if needed
  };

  const handleCaptchaChange = (event) => {
    setCaptcha(event.target.value);
    // You can add validation logic here if needed
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
    // You can add validation logic here if needed
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication check logic here
  };
  
  const authenticationCheck=()=>{
    alert("hiiii");
  }

  const increaseFontSize = () => {
    // Implement your font size increase logic here
  };

  const resetFontSize = () => {
    // Implement your font size reset logic here
  };

  const decreaseFontSize = () => {
    // Implement your font size decrease logic here
  };

  const swapStyleSheet = (styleSheet) => {
    // Implement your style sheet swapping logic here
  };
  return (
    <>

<div className="top_nav" style={{ backgroundColor: "#01315c" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6"></div>
          <div className="col-sm-6">
            <div className="btn-group btn-group-sm pull-right">
              <button
                className="increase btn btn-info accessibility"
                onClick={increaseFontSize}
              >
                A+
              </button>
              <button
                className="reset btn btn-info accessibility"
                onClick={resetFontSize}
              >
                A
              </button>
              <button
                className="decrease btn btn-info accessibility"
                onClick={decreaseFontSize}
              >
                A-
              </button>
              <button
                className="dark btn btn-default"
                onClick={() =>
                  swapStyleSheet("resources/NewTemplate/css/dark.css")
                }
                style={{
                  background: "#300b3e",
                  border: "none",
                  color: "#fff",
                }}
              >
                A
              </button>
              <button
                className="dark btn btn-default"
                onClick={() =>
                  swapStyleSheet("resources/NewTemplate/css/customstyle.css")
                }
                style={{
                  background: "#d4d4d4",
                  border: "none",
                  color: "#000",
                }}
              >
                A
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      	<div class="header">
		<div class="container fade-animation">
			<div class="row">
				<div class="col-md-10 col-10 logo">
					<img src="resources/NewTemplate/images/Telangana_Police_Logo.png"
						alt="telangana state police logo" />
					<h1>
						TELANGANA STATE POLICE HRMS<br /> <span> Government of
							Telangana</span>
					</h1>
				</div>
				<div class="col-md-2 col-2">
					<span class="tlogo"><img
						src="resources/NewTemplate/images/telanganalogo.png"
						alt="telangana" /></span>
				</div>
			</div>
		</div>

	</div>

      <div className="navbg">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark py-0">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="container main-wrapper" style={{ display: 'table' }}>
        <div className="row no-gutters">
          <div className="col-sm-12 ml-auto mr-auto wrapper">
            <div>
              <div className="row">
                <div
                  className="col-md-7 pl-0 left-box"
                  style={{
                    background:
                      'linear-gradient(39deg, rgba(21, 49, 118, 1) 0%, rgba(21, 55, 118, 1) 22%, rgba(17, 170, 220, 1) 100%)',
                  }}
                >
                  <aside>
                    <div
                      className="left_content"
                      style={{ background: 'transparent !important' }}
                    >
                      <h2>Welcome</h2>
                      <p align="center">
                        <img src="resources/NewTemplate/images/seperator.png" />
                      </p>
                      <ul>
                        <li>
                          Police Department is committed to delivering the most
                          efficient, effective, productive, and quality police
                          service to the community. We are dedicated to the
                          advancement of a cooperative partnership with our
                          community to develop better community policing,
                          improved communications, and reduced crime
                        </li>
                        <br />
                        <li>
                          The officers and men of TS Police Department are
                          committed to providing professional law enforcement
                          services, protecting the rights of individuals,
                          preventing crime, and building community partnerships.
                        </li>
                        <br />
                        <li>
                          We will serve the community with integrity, diversity,
                          and quality and to provide proactive interaction with
                          the community to enhance the feeling of safety and
                          security in the state.
                        </li>
                      </ul>

                      <div className="row">
                        <div className="col-sm-3 about-block" data-animated="fadeInUp">
                          <a className="circle" href="<%=basePath%>Login5S/loginFor5S.action">
                            <i className="fa fa-ticket"></i>
                          </a>
                          <header>
                            <h3>
                              <a href="<%=basePath%>Login5S/loginFor5S.action">
                                {' '}
                                <span style={{ color: 'white' }}> 5S Implementation </span>
                              </a>
                            </h3>
                          </header>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>

                <div className="col-md-5 px-0 right-box">
                  <div className="loginOptions">
                    <h1>Login</h1>
                    <div className="invalidCaptcha" style={{ textAlign: 'center' }}>
                     
                    </div>
                    <div className="invalidCaptcha1" id="invalidCaptcha1" style={{ textAlign: 'center' }}>
                    
                    </div>
                    <div className="invalidCaptchaSpace" style={{ textAlign: 'center' }}>
                 
                    </div>
                    <div className="center">
                      <form action="login.action" method="post" autoComplete="off">
                        <div className="txt_field" id="userNameDiv">
                          <input
                            type="text"
                            name="userId"
                            id="userId"
                            value={userId}
                            onChange={handleUserIdChange}
                            onKeyUp={(e) => {
                              validateCharactersWithUnderScoreAndSlash(e);
                              e.target.value = e.target.value.toUpperCase();
                            }}
                            maxLength="30"
                            required
                          />
                          <span></span>
                          <label htmlFor="userId">UserName</label>
                        </div>
                        <div className="txt_field" id="passwordDiv">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            maxLength="20"
                            required
                            onKeyUp={(e) => {
                              nospaces(e);
                            }}
                          />
                          <label htmlFor="password">Password</label>
                          <span></span>
                        </div>
                        <div className="txt_field" id="captchaDiv">
                          <input
                            type="text"
                            name="captcha"
                            id="captcha"
                            value={captcha}
                            onChange={handleCaptchaChange}
                            maxLength="4"
                          />
                          <label htmlFor="captcha">
                            captcha &nbsp;&nbsp;&nbsp;
                            <img
                              src=""
                              id="captchaImage"
                              height="25px"
                              width="80px"
                            />
                            <img
                              src="resources/images/refresh.jpg"
                              height="20px"
                              width="15px"
                              id="refresh"
                              style={{ cursor: 'pointer' }}
                              onClick={refreshCaptcha}
                            />
                          </label>
                          <span></span>
                        </div>
                        <div className="txt_field" id="otpDiv" style={{ display: 'none' }}>
                          <input
                            type="password"
                            name="otp"
                            id="otp"
                            value={otp}
                            onChange={handleOtpChange}
                            maxLength="6"
                            onKeyUp={(e) => {
                              numericFilter(e);
                            }}
                          />
                          <label htmlFor="otp" id="otpMsg">
                            {otpMsg}
                          </label>
                          <span></span>
                        </div>
                        <div className="pass">
                          <a href="<%=basePath%>Password/ForgotPassword.action">Forgot Password</a>
                        </div>
                        <input
                          type="submit"
                          id="submit"
                          onClick={authenticationCheck}
                          value="login"
                        />
                      </form>
                      <p></p>
                      <div className="contact-text">
                        <h5 className="text-left" style={{ marginTop: 0 }}>
                          <i className="fa fa-envelope" style={{ fontSize: '18px' }}></i>&nbsp;
                          HELP DESK
                        </h5>
                        <p>
                          For any technical assistance please write/send mails to{' '}
                          <span className="email-text text-danger">help.tspolice@cgg.gov.in</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tspolice;
