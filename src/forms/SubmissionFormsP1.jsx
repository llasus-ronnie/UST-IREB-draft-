import React from 'react'
import { Helmet } from 'react-helmet'
import StepBar from '../components/Forms/StepBar'
import {Container, Col, Row, Form, FormText, FormLabel, FormCheck, Button} from 'react-bootstrap'

function SubmissionFormsP1() {
  return (
    <div>
        <Helmet>
            <title>Submission Forms</title>
            <style>{'body { background-color: #ECF0F1; }'}</style>  
        </Helmet>

        <StepBar />

        <Container className='cont1'>
            <Row className='justify-content-center'>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Row>

            <Form>
            <Container className='rescont'>
                <Row>
                    <h1 className='resconthead'>Research Classification</h1>
                </Row>
                <Row>
                    
                        <FormLabel className='formtext'>Institution</FormLabel>
                        <input type='text' className='form-control formtext' />
                        <FormLabel className='formtext'>Research Ethics Committee</FormLabel>
                        <input type='text' className='form-control formtext' />
                    
                </Row>
            </Container>

            <hr></hr>

            <h1 className='textcheck'>Submission Checklist</h1>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <Container>
                <Row className='justify-content-center'>
                    <Col md='5'>
                    
                        <FormCheck type='checkbox' className='formcheck' label='I agree to provide soft copies of the protocol and supplementary files of my research.' />
                        <FormCheck type='checkbox' className='formcheck' label='I understand that this submission will be forwarded to a REC for review' />
                        <FormCheck type='checkbox' className='formcheck' label='I understand that my research will be monitored by UST IREB and will be treated 
with confidentiality.' />
                
                <Row style={{marginTop:'20px', paddingBottom: '20px'}} className='justify-content-evenly'>
                <Button href='/SubmissionFormsP2' variant='outline-warning' className='formbtn'>Save & Continue</Button>
                <Button variant='outline-secondary' className='formbtn'>Close</Button>
                </Row>
                    
                    </Col>
                </Row>
                
            </Container>
            </Form>
        </Container>

    </div>
  )
}

export default SubmissionFormsP1