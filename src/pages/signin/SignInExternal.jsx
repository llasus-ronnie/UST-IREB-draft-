import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  FormLabel,
  Button,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import bg from "../../assets/SignIn/bg.png";
import logo from "../../assets/SignIn/USTLogo.png";
import "../../styles/signin/SignIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReCAPTCHA from "react-google-recaptcha";

function SignIn() {
  return (
    <div className="cont">
      <Helmet>
        <title>Sign In</title>
        <style>{"body { background-color: #ECF0F1; }"}</style>
      </Helmet>

      <Container>
        <Row className="cont-border g-0">
          <Col>
            <img src={bg} alt="" className="bg" />
          </Col>
          <Col className="SignInHeader">
            <div className="Sign">
              <img src={logo} alt="" className="logo d-inline" />
              <h1 className="subtitle d-inline" style={{ margin: "5px" }}>
                <b className="title d-inline">UST IREB</b> Research Portal
              </h1>
            </div>

            <h1 className="signin">Sign In</h1>

            <Form>
              <FormGroup>
                <div className="formtext">
                  <FormLabel>Email</FormLabel>
                  <input type="text" className="form-control" />
                  <FormLabel>Password</FormLabel>
                  <input type="password" className="form-control" />
                </div>

                <Row className="align-items-center">
                  <Col>
                    <div className="captchasign-container">
                      <ReCAPTCHA
                        className="captchasign"
                        sitekey="6LfgAgkqAAAAAC_WvkqfnkIF-NUvwHnVOPyDkD2G"
                        size="normal"
                      />
                    </div>
                  </Col>
                  <Col>
                    <Button
                      variant="outline-warning"
                      href="/"
                      className="btnlogin"
                    >
                      Log In
                    </Button>
                  </Col>
                </Row>
              </FormGroup>
            </Form>

            <hr></hr>

            <div className="help">
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
