import React from 'react'
import { Helmet } from 'react-helmet'
import StepBar from '../components/Forms/StepBar'
import Navbar from '../navbar/Navbar'
import {Container, Col, Row, Form, FormText, FormLabel, FormCheck, Button} from 'react-bootstrap'

function SubmissionFormsP2() {
  return (
    <div>
        <Helmet>
            <title>Submission Forms</title>
            <style>{'body { background-color: #ECF0F1; }'}</style>  
        </Helmet>
        <Navbar />

        <StepBar />

        <Container className='cont1'>
        <Form>
            <h1 className='headtext'>1. Researcher Information</h1>

            <Container className='rescont2'>
                <Row>
                    <h1 className='resconthead'>Primary Researcher</h1>
                </Row>
                
                <Row>
                    
                        <Col>
                        <FormLabel className='formtext'>Full Name</FormLabel>
                        <input type='text' className='form-control formtext' />
                        <FormLabel className='formtext'>Email</FormLabel>
                        <input type='text' className='form-control formtext' />
                        </Col>

                        <Col>
                        <FormLabel className='formtext'>Phone Number</FormLabel>
                        <input type='email' className='form-control formtext' />
                        <FormLabel className='formtext'>Institutional Affiliation</FormLabel>
                        <input type='text' className='form-control formtext' />
                        </Col>
                </Row>

                <Row style={{marginTop: '40px'}}>
                    <h1 className='resconthead'>Additional Researcher</h1>
                </Row>
                <Row>
                        <Col>
                        <FormLabel className='formtext'>Full Name</FormLabel>
                        <input type='text' className='form-control formtext' />
                        <FormLabel className='formtext'>Email</FormLabel>
                        <input type='text' className='form-control formtext' />
                        </Col>

                        <Col>
                        <FormLabel className='formtext'>Phone Number</FormLabel>
                        <input type='email' className='form-control formtext' />
                        <FormLabel className='formtext'>Institutional Affiliation</FormLabel>
                        <input type='text' className='form-control formtext' />
                        </Col>

                <Row style={{marginTop:'20px', paddingBottom: '20px'}} className='justify-content-around'>
                    <Button variant='outline-warning' className='formbtn'>Add Researcher</Button>
                    <Button variant='outline-secondary' className='formbtn'>Cancel</Button>
                </Row>

                </Row>

            </Container>

            <hr></hr>
            <h1 className='headtext'>2. Title and Summary Proposal</h1>

            <Container className='rescont2'>
                <Row>
                    <h1 className='resconthead'>Research Proposal</h1>
                </Row>
                <Row>
                    <FormLabel className='formtext'>Title</FormLabel>
                    <input type='text' className='form-control formtext' />
                    <FormLabel className='formtext'>Background</FormLabel>
                    <textarea className='form-control formtext' />
                    <FormLabel className='formtext'>Objectives</FormLabel>
                    <textarea className='form-control formtext' />
                    <FormLabel className='formtext'>Expected Outcomes and Use of Result</FormLabel>
                    <textarea className='form-control formtext' />
                    <FormLabel className='formtext'>Keywords</FormLabel>
                    <input type='text' className='form-control formtext' />
                </Row>
            </Container>

            <hr></hr>
            <h1 className='headtext'>3. Proposal Details</h1>

            <Container className='rescont2'>
                <Row>
                    <h1 className='resconthead'>Proposal Details</h1>
                </Row>
                <Row>
                    <Col>
                    <FormLabel className='formtext'>Study Type</FormLabel>
                    <Form.Select>
                        <option>Qualitative</option>
                        <option>Quantitative</option>
                        <option>Mixed Methods</option>
                    </Form.Select>
                    <FormLabel className='formtext'>Start Date</FormLabel>
                    <input type='date' className='form-control formtext' />
                    <FormLabel className='formtext'>End Date</FormLabel>
                    <input type='date' className='form-control formtext' />
                    <FormLabel className='formtext'>Primary Sponsor</FormLabel>
                    <input type='text' className='form-control formtext' />
                    <FormLabel className='formtext'>Secondary Sponsor</FormLabel>
                    <input type='text' className='form-control formtext' />
                    <FormLabel className='formtext'>Multi-country Research</FormLabel>
                    <input type='text' className='form-control formtext' />
                    <FormLabel className='formtext'>Multi-site Research</FormLabel>
                    <input type='text' className='form-control formtext' />
                    <FormLabel className='formtext'>Region</FormLabel>
                    <input type='text' className='form-control formtext' />
                    </Col>

                    <Col>
                    <FormLabel className='formtext'>Research Field</FormLabel>
                    <input type='text' className='form-control formtext' />
                    <FormLabel className='formtext'>Involves Human Subjects</FormLabel>
                    <input type='text' className='form-control formtext' />
                    <FormLabel className='formtext'>Proposal Type</FormLabel>
                    <input type='text' className='form-control formtext' />
                    <FormLabel className='formtext'>Data Collection</FormLabel>
                    <input type='text' className='form-control formtext' />
                    <FormLabel className='formtext'>Proposal Reviewed by Other Committee?</FormLabel>
                    <Form.Select>
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Select>
                    <FormLabel className='formtext'>Monetary Source</FormLabel>
                    <input type='text' className='form-control formtext' />
                    <FormLabel className='formtext'>Amount in Philippine Peso</FormLabel>
                    <input type='text' className='form-control formtext' />
                    <FormLabel className='formtext'>Other Source</FormLabel>
                    <input type='text' className='form-control formtext' />
                    </Col>

                <Row style={{marginTop:'20px', paddingBottom: '20px'}} className='justify-content-around'>
                    <Button href='/SubmissionFormsP3' variant='outline-warning' className='formbtn'>Save & Continue</Button>
                    <Button variant='outline-secondary' className='formbtn'>Cancel</Button>
                </Row>

                </Row>
            </Container>

        </Form>
        </Container>

    </div>
  )
}

export default SubmissionFormsP2