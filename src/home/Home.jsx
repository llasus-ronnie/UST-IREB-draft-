//components
import Navbar from '../navbar/Navbar'
import Card from '../home/Card'
import Card2 from '../home/Card2'
import Footer from '../footer/Footer'

//images
import viewIcon from '../assets/home/card/card-view-icon.png'
import submitIcon from '../assets/home/card/card-submit-icon.png'
import profileIcon from '../assets/home/card/card-profile-icon.png'
import faqIcon from '../assets/home/card/card-faq-icon.png'

import irebImage from '../assets/home/section-3-ust-ireb.png'
import flowchartImage from '../assets/home/section-6-flowchart.png'

// css
import '../styles/home/home.css'
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
                
                {/* section 1 */}

                <div className='body'>
                <div className='section-1'>
                    <div className='section-1-content'>
                        <h1>Welcome!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br />
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>

                        <div className='buttons'>
                            <button className='get-started'>Get Started</button>
                            <button className='learn-more'>Learn More</button>
                        </div>
                    </div>
                    </div>
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
                    title = 'Frequently Asked Questions'
                    content ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
                    />
                        </div>
                    </div>

                    {/* section 3 */}
                    <div className='section-3'>
                        <div className='section-3-content'>
                            <div className='col-1'>
                                <img src={irebImage} alt='ust ireb image'>
                                </img>
                            </div>

                            <div className='col-2'>
                                <h1>About UST IREB</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                                <br/> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                            </div>
                        </div>
                    </div>

                    {/* section 4 */}
                    <div className='section-4'>

                        {/* mission */}
                        <Card2 
                        title ='Mission'
                        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in '/>

                        {/* vision */}
                        <Card2
                        title ='Vision'
                        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in '/>
                    </div>


                    {/* section 5 */}
                    <div className='section-5'>
                        <span></span>
                    </div>

                    {/* section 6 */}
                    <div className='section-6'>
                        <div className='section-6-content'>
                            <h1>Process of Submission</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <img src={flowchartImage} alt='flowchart image'></img>
                            <ol>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</li> 
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</li>

</ol>
                        </div>
                    </div>

                </div>

                <div className='footer'>
                    <Footer />
                </div>
                    
                

        </>
    )
}