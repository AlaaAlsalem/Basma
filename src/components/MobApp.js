import GooglePlay from '../images/google-play.png'
import AppStore from '../images/app-store.png'
const MobApp = () => {
    return (
        <div id='pages'>
            <div className="mob_main">
                <h1>BASMA is available  for all devices</h1>
                <p>sApp is available for all devices, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam,</p>
                <img src={GooglePlay} alt='GooglePlay' width='20px' />
                <img src={AppStore} alt='AppStore' />
                <p>.Availaple on iphone, ipad and all android devices </p>

            </div>
            <div className='mob_second'>
                <h1>Subscribe to get updates </h1>
                <p>By subscribe you will get newsleter, elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam </p>
            </div>
            <form>
                <input type='email' placeholder ='Enter your email'/>
                <button type='buton'>Subscribe</button>
            </form>

        </div>
    )
}

export default MobApp;