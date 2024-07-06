import React from 'react'
import { Helmet } from 'react-helmet'
import StepBar from '../components/Forms/StepBar'
import {Container, Col, Row, Form, FormText, FormLabel, FormCheck, Button} from 'react-bootstrap'

function SubmissionFormP3() {
  return (
    <div>
      <Helmet>
            <title>Submission Forms</title>
            <style>{'body { background-color: #ECF0F1; }'}</style>  
        </Helmet>

        <StepBar />

        <Container className='cont1'>
            <Row className='justify-content-center'>
              <h1 className='textcheck'>Uploading of Supplementary Materials</h1>
              <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Row>

            <Container className='rescont3'>
                <Row>
                    <h1 className='resconthead'>Upload Submission Here</h1>
                </Row>
                <Row>
                  <Form>
                    <FormLabel className='formtext'>File Type:</FormLabel>
                    <Form.Select className='form-control formtext'>
                        <option>Protocol</option>
                        <option>Supplementary Files</option>
                    </Form.Select>
                    <FormLabel className='formtext'>Select File:</FormLabel>
                    <Form.Control type='file' className='form-control formtext' />
                    
                  <Row style={{marginTop:'20px', paddingBottom: '20px'}} className='justify-content-around'>
                    <Button variant='outline-warning' className='formbtn'>Submit</Button>
                    <Button variant='outline-secondary' className='formbtn'>Cancel</Button>
                  </Row>
                  </Form>
                </Row>
            </Container>
        </Container>
    </div>
  )
}

export default SubmissionFormP3