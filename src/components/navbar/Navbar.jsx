import '../../styles/navbar/navbar.css';
import { useState } from 'react';

//images
import logout from '../../assets/navbar/navbar-logout.png';
import userIcon from '../../assets/navbar/sidenav-user.png'; 


export default function Navbar() {

        const [isOpen, setIsOpen] = useState(false);
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };  


    return(
        <>
            <div className="navbar">
                <div className='navbar-left'> 
                
                                    {/* Hamburger */}
                                    <div className='hamburger-bg'>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                </div>
                
                {/* Navbar Title */}
                <h1 className="navbar-title">
                    <span className='yellow-text'>UST IREB </span> 
                    <span>Research Portal</span>
                </h1>
                </div>

                <div className='navbar-right'>
                    {/* Navbar Subtitle */}
                <h1 className="navbar-subtitle">Logout</h1>
                <img src={logout} alt="" className="logout-icon"/>
                </div>  
            </div>

            
                 {/* Sidenav */}
                 <div className={`sidenav ${isOpen ? 'open' : ''}`}>

                    <div className='sidenav-account'>
                        <img src={userIcon} alt="" className="logout-icon"/>
                        <a href="/SignInOption">View Account</a>
                    </div>

                    <div className='sidenav-links'>
                    <a href="/">Home</a>
                    <a href="/SubmissionFormsP1">Submission Form</a>
                    <a href="/MySubmissions">View my Submissions</a>
                    <a href="#">FAQs</a>
                    </div>
                </div>
        </>
    )
}