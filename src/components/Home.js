import thumb from '../images/thumb-1.png';
import './Home.css';

const Home = () => {

    return (
        <>
            
        <div className='main_hom' id='home'>
            <div className='home_txt'>
                <h1>Creative way to Shawcases your App</h1>
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
       
        </>
    )
}

export default Home;