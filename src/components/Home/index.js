import {Link} from 'react-router-dom' ;
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Logo'
import './index.scss';
import { useState } from 'react';
const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = ['B','r','i','a','n']
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r']


    return(
        <div className="container home-page">
            <div className = "text-zone">

                <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,</span> 
                <br/>
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m </span>
                <span> </span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={20}/>
                </h1>
                <h2>Fullstack Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home