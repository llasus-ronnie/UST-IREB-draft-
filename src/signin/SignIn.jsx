import { Container, Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import bg from '../assets/SignIn/bg.png';
import logo from '../assets/SignIn/USTLogo.png';
import '../styles/signin/SignIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleLogin } from '@react-oauth/google';
import ReCAPTCHA from 'react-google-recaptcha'

function SignIn() {
  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};
  return (
    <div className='cont'>
      <Helmet>
        <title>Sign In</title>
        <style>{'body { background-color: #ECF0F1; }'}</style>
      </Helmet>
      
      <Container className='cont-border'>
          <Row className="justify-content-md-center g-0">
              <Col>
                <img src={bg} alt="" className='bg' />
              </Col>
              <Col style={{marginTop: '46px'}}>
              
              <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
              <img src={logo} alt="" className='logo d-inline' />
               <h1 className='title d-inline' style={{margin: '5px'}}>UST IREB</h1>
               <h1 className='subtitle d-inline' style={{margin: '5px'}}>Research Portal</h1>
              </div>

              <h1 className='signin'>Sign In</h1>

              <p className='text1'>Welcome, Thomasian! To access all IREB research portal submission features, sign in with your UST Google Account.</p>
              <p className='text1'>Kindly check the box below to proceed.</p>
              <ReCAPTCHA style={{transform:"scale(0.75)", transformOrigin:"0 0"}} className='captchasign' sitekey="6LfgAgkqAAAAAC_WvkqfnkIF-NUvwHnVOPyDkD2G" size='normal' /> 
              <GoogleLogin className='google' onSuccess={responseMessage} onError={errorMessage} />

              <hr ></hr>
              <p className='help d-inline' style={{margin: '5px'}} ><a href='#' style={{color: '#8B8B8B'}}>Terms of Service</a></p>
              <p className='help d-inline' style={{margin: '5px'}} ><a href='#' style={{color: '#8B8B8B'}}>Privacy Policy</a></p>
              <p className='help d-inline' style={{margin: '5px'}} ><a href='#' style={{color: '#8B8B8B'}}>Help</a></p>
              <p className='help d-inline' style={{margin: '5px'}} ><a href='/' style={{color: '#FCBF15'}}>Return to Home</a></p>

              </Col>
          </Row>
      </Container>
    </div>
  )
}

export default SignIn