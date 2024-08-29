//components
import Navbar from '../../components/navbar/Navbar'
import Card from '../home/Card'
import Footer from '../../components/footer/Footer'
import Carousel from '../../components/carousel/Slider'

//images
import viewIcon from '../../assets/home/card/card-view-icon.png'
import submitIcon from '../../assets/home/card/card-submit-icon.png'
import profileIcon from '../../assets/home/card/card-profile-icon.png'
import faqIcon from '../../assets/home/card/card-faq-icon.png'
import whitefaqicon from '../../assets/home/white-faq-icon.png'
import flowchart from '../../assets/home/section-4-flowchart.png'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// css
import '../../styles/home/home.css'

import { Helmet } from 'react-helmet'

export default function Home() {  
    return(
        <>
            <div className='header'>
                <Navbar />
            </div>

            <Helmet>
                <title>Home</title>
            </Helmet>
                

                <body>
                 {/* section 1 */}
                <div className='section-1'>
                    <div className='section-1-content'>
                        <h1>Welcome!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>

                        <div className='buttons'>
                            <button className='get-started'>Get Started</button>
                            <button className='learn-more'>Learn More</button>
                        </div>
                    </div>
                    </div>

                    <div className="yellow-bar"></div>

                {/* section 2 */}
                    <div className='section-2'> 
                        <div className='section-2-content'>

                             {/* card 1 */}
                    <Card
                    image = {viewIcon}
                    title = 'Ethics Review Guidelines'
                    content ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
                    />

                    {/* card 2 */}
                    <Card
                    image = {submitIcon}
                    title = 'Submission Requirements'
                    content ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
                    />

                    {/* card 3 */}
                    <Card
                    image = {profileIcon}
                    title = 'How to Create an Account'
                    content ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
                    />

                    {/* card 4 */}
                    <Card
                    image = {faqIcon}
                    title = 'Frequent Questions'
                    content ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
                    />
                        </div>
                    </div>

                {/* section 3 */}
                    <div className='section-3'>
                        <Carousel />
                    </div>

                    <div className="yellow-bar"></div>

                {/* section 4 */}
                    <div className='section-4'>
                    <Container>
                        <Row className='row-alignment'>
                            {/* column 1 */}
                            <Col>
                            <img src={whitefaqicon} alt='faq icon' className='section-4-faq'/>
                            <h1>Process of Submission</h1>

                            <ol>
                                <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                </li>

                                <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                </li>

                                <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                </li>

                                <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                </li>
                                </ol>
                            </Col>
                            
                            {/* column 2 */}
                            <Col>
                            <img src={flowchart} alt="" className='section-4-flowchart'/>
                            </Col>
                        </Row>
                        </Container>
                    </div>

                </body>

                <div className='footer'>
                    <Footer />
                </div>
                    
                

        </>
    )
}