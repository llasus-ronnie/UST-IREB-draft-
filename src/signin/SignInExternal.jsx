import { Container, Col, Row, Form, FormGroup, FormLabel, Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import bg from '../assets/SignIn/bg.png'
import logo from '../assets/SignIn/USTLogo.png'
import '../styles/signin/SignIn.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReCAPTCHA from 'react-google-recaptcha'

function SignIn() {
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

              <Form>
                <FormGroup>
                    <FormLabel className='formtext'>Username</FormLabel>
                    <input type='text' className='form-control formtext' />
                    <FormLabel className='formtext'>Password</FormLabel>
                    <input type='password' className='form-control formtext' />
                    <Row className='align-items-center'>
                      <Col>
                      <ReCAPTCHA style={{transform:"scale(0.75)", transformOrigin:"0 0"}} className='captcha' sitekey="6LfgAgkqAAAAAC_WvkqfnkIF-NUvwHnVOPyDkD2G" size='normal' />  
                      </Col>
                      <Col>
                      <Button variant="outline-warning" href='/' className='btnlogin'>Log In</Button>
                      </Col>
                    </Row>
                </FormGroup>
              </Form>

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