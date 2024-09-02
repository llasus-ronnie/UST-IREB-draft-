import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import bg from "../../assets/SignIn/bg.png";
import logo from "../../assets/SignIn/USTLogo.png";
import "../../styles/signin/SignIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleLogin } from "@react-oauth/google";
import ReCAPTCHA from "react-google-recaptcha";

function SignIn() {
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const responseMessage = (response) => {
    console.log(response);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  const handleRecaptchaChange = (value) => {
    if (value) {
      setIsRecaptchaVerified(true);
    } else {
      setIsRecaptchaVerified(false);
    }
  };

  return (
    <div className="thomasian-cont">
      <Helmet>
        <title>Sign In</title>
        <style>{"body { background-color: #ECF0F1; }"}</style>
      </Helmet>

      <Container>
        <Row className="thomasian-cont-border justify-content-md-center g-0">
          <Col className="thomasian-lft">
            <img src={bg} alt="" className="thomasian-bg" />
          </Col>
          <Col className="thomasian-SignInHeader">
            <div className="thomasian-Sign">
              <img src={logo} alt="" className="thomasian-logo" />
              <h1 className="d-inline">
                <b>UST IREB</b> Research Portal
              </h1>
            </div>

            <h1 className="thomasian-signin">Sign In</h1>

            <p className="thomasian-text">
              Welcome, Thomasian! To access all IREB research portal submission
              features, sign in with your UST Google Account. <br /> <br />{" "}
              Kindly check the box below to proceed.
            </p>

            <div className="thomasian-recap">
              <GoogleLogin
                className="thomasian-google"
                onSuccess={responseMessage}
                onError={errorMessage}
                disabled={!isRecaptchaVerified}
              />
              <div className="captchasign-container">
                <ReCAPTCHA
                  className="thomasian-captchasign"
                  sitekey="6LfgAgkqAAAAAC_WvkqfnkIF-NUvwHnVOPyDkD2G"
                  size="normal"
                  onChange={handleRecaptchaChange}
                />
              </div>
            </div>

            <hr />

            <div className="thomasian-help">
              <p className="d-inline" style={{ margin: "5px" }}>
                <a href="#" style={{ color: "#8B8B8B" }}>
                  Terms of Service
                </a>
              </p>
              <p className="d-inline" style={{ margin: "5px" }}>
                <a href="#" style={{ color: "#8B8B8B" }}>
                  Privacy Policy
                </a>
              </p>
              <p className="d-inline" style={{ margin: "5px" }}>
                <a href="#" style={{ color: "#8B8B8B" }}>
                  Help
                </a>
              </p>
              <p className="d-inline" style={{ margin: "5px" }}>
                <a href="/" style={{ color: "#FCBF15" }}>
                  Return to Home
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignIn;
