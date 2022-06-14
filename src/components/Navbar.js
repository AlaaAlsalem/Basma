//import {Link} from "react-router-dom";
import { Link } from 'react-scroll';
import './Navbar.css';


const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className='menu'>
                <li><Link to='home' className='active'>Home</Link></li>
                <li><Link to='Features'>Features</Link></li>
                <li><Link to='pages'>Pages</Link></li>
                <li><Link to='screenshots'>ScreenShots</Link></li>
                <li><Link to='pricing' >Pricing</Link></li>
                <li><Link to='contact'>Contact</Link></li>
                </ul>

            </nav>
        </div>
    );
}

export default Navbar;
