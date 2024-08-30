import { Container, Col, Row, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import bg2 from "../../assets/SignIn/bg-2.png";
import logo from "../../assets/SignIn/USTLogo.png";
import home from "../../assets/SignIn/home.png";
import "../../styles/signin/SignInOption.css";
import "bootstrap/dist/css/bootstrap.min.css";

function SignIn() {
  return (
    <>
      <Helmet>
        <title>Sign In</title>
        <style>{"body { background-color: #ECF0F1; }"}</style>
      </Helmet>

      <div className="signin-wrapper">
        <Container className="signin-container">
          <Row>
            <Col md={4} className="p-0 left-column">
              <img src={bg2} alt="bg2" className="signin-background" />
            </Col>
            <Col md={8} className="p-0 right-column">
              <Container className="signin-header">
                <img src={logo} alt="logo" className="signin-logo" />
                <h1 className="d-inline">
                  UST IREB <b> Research Portal </b>
                </h1>
              </Container>

              <Container className="signin-title">
                <h1>Sign In</h1>
                <p>Kindly select your category to login.</p>
              </Container>

              <Container className="signin-options">
                <Button className="signin-option" href="/SignIn">
                  Thomasian <br /> Primary Investigator
                </Button>

                <Button className="signin-option" href="/SignInExternal">
                  External <br /> Primary Investigator
                </Button>
              </Container>

              <Row className="signin-hr">
                <hr />
              </Row>

              <Container className="signin-footer">
                <Row>
                  <a href="/">
                    <img src={home} alt="home" className="home-icon" />
                    Return to Home
                  </a>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SignIn;
