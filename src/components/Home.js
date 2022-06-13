import thumb from '../images/thumb-1.png'
import Features from './Features';
import ScreenShots from './ScreenShots';
import './Home.css'
import Pricing from './Pricing';
import MobApp from './MobApp';
import Contact from './Contact';

const Home = () => {

    return (
        <>
        <div className='main_hom'>
            <div className='home_txt'>
                <h1>Creative way to shawcases your App</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
                <button type='button' >Get Started</button>
            </div>
            <div className='home_img'>
                <img src={thumb} alt="thumb-1"></img>
            </div>
            
        </div>
        <Features/>
        <ScreenShots/>
        <Pricing/>
        <MobApp/>
        <Contact/>
        </>
    )
}

export default Home;