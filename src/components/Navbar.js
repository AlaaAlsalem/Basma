//import {Link} from "react-router-dom";
import { Link } from 'react-scroll';


const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to='main' className="logo">
                <h1>My logo</h1>
                </Link>
                <ul className='menu'>
                <li><Link to='home' className='active'>Home</Link></li>
                <li><Link to='Features' className='active'>Features</Link></li>
                <li><Link to='pages' className='active'>Pages</Link></li>
                <li><Link to='screenshots' className='active'>ScreenShots</Link></li>
                <li><Link to='pricing' className='active'>Pricing</Link></li>
                <li><Link to='contact' className='active'>Contact</Link></li>
                </ul>

            </nav>
        </div>
    );
}

export default Navbar;
