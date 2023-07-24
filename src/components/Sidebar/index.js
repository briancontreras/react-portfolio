import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-png.png'
import LogoSubtitle from '../../assets/images/bcLogoSub.png'
import linkedIN from '../../assets/images/linkedin-in.png'
import linkedInHover from '../../assets/images/linkedinHover.png'
import gitHub from '../../assets/images/github.png'
import gitHubHover from '../../assets/images/githubHover.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'/>
            <img className='sub-logo' src={LogoSubtitle} alt='Brian'/>
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname = "active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className= "about-link"to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className= "contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/contrerasbrian/'>
                <ImageToggleOnMouseOver
                primaryImg={linkedIN}
                secondaryImg={linkedInHover}
                alt=""
                />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/briancontreras'>
                <ImageToggleOnMouseOver
                primaryImg={gitHub}
                secondaryImg={gitHubHover}
                alt=""
                />
                </a>
            </li>
            
        </ul>
    </div>
)

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
    const imageRef = useRef(null);

    return(
        <img 
        onMouseOver={() => {
            imageRef.current.src = secondaryImg;
        }}
        onMouseOut={() =>{
            imageRef.current.src = primaryImg;
        }}
        
        src={primaryImg}
        alt = ""
        ref = {imageRef}
        />
    )
}

export default Sidebar