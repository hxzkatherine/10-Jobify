import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className = 'container page'>
            <div className = 'info'>
                <h1>
                    job <span>tracking</span> app
                </h1>
                <p>
                I'm baby snackwave celiac af, meditation distillery selfies stumptown drinking vinegar. Cred offal messenger bag, woke shoreditch crucifix fashion axe aesthetic. PBR&B cray selfies chillwave. Godard disrupt cold-pressed cray single-origin coffee drinking vinegar. Sriracha umami kitsch,
                </p>
                <Link to='/register' className='btn btn-hero'>
                    Login / Register
                </Link>
            </div>
            <img src = {main} alt = 'job hunt' className = 'img main-img'></img>
        </div>
        
    </Wrapper>
  )
}

export default Landing
