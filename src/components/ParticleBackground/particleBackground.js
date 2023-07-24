import Particles from 'react-tsparticles'
import particlesConfig from '../config/particles-config'

const particleBackground = () => {
    return(
        <Particles params={particlesConfig}></Particles>
    )
}
export default particleBackground