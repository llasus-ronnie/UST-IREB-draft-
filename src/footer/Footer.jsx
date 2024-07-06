//sa wakas footer nalang 
import '../styles/footer/footer.css';

//images
import ustLogo from '../assets/footer/ust-logo.png'

export default function Footer() {
    return(
        <>
        <div className="footer">

            <div className='footer-top'>
            <img src={ustLogo} alt="" className="ireb-image"/>
        <h1>
        <span className='yellow-text'>UST IREB </span> 
        <span>Research Portal</span>
        </h1>
            </div>

            <div className='footer-bottom'>
                <p>© 2024. University of Santo Tomas - Institutional Research Ethics Board. All rights reserved.</p>
            </div>
    </div>
        </>
    )
}