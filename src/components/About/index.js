import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import javaIcon from '../../assets/images/java.png'
import reactIcon from '../../assets/images/reactIcon.png'
import phpLogo from '../../assets/images/phpLogo.png'
import htmlLogo from '../../assets/images/htmlLogo.png'
import cssLogo from '../../assets/images/cssIcon.png'
import pythonLogo from '../../assets/images/pythonLogo.png'
// import Loader from 'react-loaders'
import ParticleBackground from '../ParticleBackground/particleBackground'

const About = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')


    return(
        
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>My name is Brian Contreras and I aspire to become an exceptional FullStack developer. I am currently a Computer Science major attending California State University, Los Angeles. </p>
                <p>Ever since I was young I knew that I wanted to learn how to code and be able to create applications that allows for more people to communicate efficently over the internet. </p>
                {/* <p></p> */}

            </div>
            <div className='state-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                    <img
                    src={javaIcon}
                    alt="javaIcon"
                    />
                    </div>
                    <div className='face2'>
                    <img
                    src={reactIcon}
                    alt="reactIcon"
                    />
                    </div>
                    <div className='face3'>
                    <img
                    src={phpLogo}
                    alt="phpIcon"
                    />
                    </div>
                    <div className='face4'>
                    <img
                    src={htmlLogo}
                    alt="htmlIcon"
                    />
                    </div>
                    <div className='face5'>
                    <img
                    src={cssLogo}
                    alt="cssIcon"
                    />
                    </div>
                    <div className='face6'>
                    <img
                    src={pythonLogo}
                    alt="pythonIcon"
                    />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default About