import { Container, Col, Row, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import bg2 from '../assets/SignIn/bg-2.png';
import logo from '../assets/SignIn/USTLogo.png';
import '../styles/signin/SignIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignIn() {
  return (
    <div className='cont'>
      <Helmet>
        <title>Sign In</title>
        <style>{'body { background-color: #ECF0F1; }'}</style>
      </Helmet>
      
      <Container>
          <Row className="cont-border justify-content-md-center g-0">
              <Col>
                <img src={bg2} alt="" className='bg' />
              </Col>
              <Col className='SignInHeader'>
              
              <div className='Sign'>
              <img src={logo} alt="" className='logo d-inline' />
              <h1 className='subtitle d-inline' style={{margin: '5px'}}><b className='title d-inline'>UST IREB</b> Research Portal</h1>
              </div>

              <h1 className='signin'>Sign In</h1>

              <p className='text1'>Kindly select your category to log in. </p>

              <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', marginTop: '40px'}}>
                <Button variant="outline-warning" href='/SignIn' className='button'>Thomasian Primary Investigator</Button>
                <p style={{fontFamily: 'Poppins'}}>or</p>
                <Button variant="outline-warning" href='/SignInExternal' className='button'>External Primary Investigator</Button>
              </div>

              <hr ></hr>
              <div className='help'>
                <p className='d-inline'><a href='/' style={{color: '#FCBF15'}}>Return to Home</a></p>
              </div>

              </Col>
          </Row>
      </Container>
    </div>
  )
}

export default SignIn