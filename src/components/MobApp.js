import GooglePlay from '../images/google-play.png';
import AppStore from '../images/app-store.png';
import  './MobApp.css';

const MobApp = () => {
    return (
        <div id='pages'>
            <div className="mob_main">
                <h1>BASMA is available  for all devices</h1>
                <p>sApp is available for all devices, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam,consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam,</p>
                <img src={GooglePlay} alt='GooglePlay' className='mob_img' />
                <img src={AppStore} alt='AppStore' className='mob_img'/>
                <p>.Availaple on iphone, ipad and all android devices </p>

            </div>
            <div className='mob_second'>
                <div>
                <h1>Subscribe to get updates </h1>
                <p>By subscribe you will get newsleter, elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam </p>
            </div>
            <form className='mob_form'>
                <input type='email' placeholder ='Enter your email'/>
                <button type='buton'>Subscribe</button>
            </form>

        </div>
        </div>
    )
}

export default MobApp;