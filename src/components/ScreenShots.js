import thumb from '../images/thumb-2 (1).png'
import form from '../images/form-mail.svg'
import {FaCheck } from 'react-icons/fa'
import {IoIosNotifications, IoMdMail, IoIosVideocam} from 'react-icons/io'
import './ScreenShots.css';
import thumb2 from '../images/thumb-2.png'

const ScreenShots = () =>{
    return (
        <>
                <div className='main' id='screenshots'>
            <div>
                <img src={thumb} alt ='thumb2'/>
            </div>
            <div>
                <h1> Work faster with powerful tools</h1>
                <ul>
                <li><FaCheck/>compain with a handful of model sentance structures looks reasonable  </li>
                <li><FaCheck/>compain with a handful of model sentance structures looks reasonable  </li>
                <li><FaCheck/>compain with a handful of model sentance structures looks reasonable  </li>
                <li><FaCheck/>compain with a handful of model sentance structures looks reasonable  </li>
                <li><FaCheck/>compain with a handful of model sentance structures looks reasonable  </li>
                <li><FaCheck/>compain with a handful of model sentance structures looks reasonable  </li>
                <li><FaCheck/>compain with a handful of model sentance structures looks reasonable  </li>
                </ul>
                <IoIosNotifications/>
                <IoMdMail/>
                <IoIosVideocam/>
                {/*<img src={form} width='12px' height={'12px'}/> */}
            </div>
            


        </div>
        <div className='second'>
           
            <div>
                <h1> Work faster with powerful tools</h1>
                <ul>
                <li><FaCheck/>compain with a handful of model sentance structures looks reasonable  </li>
                <li><FaCheck/>compain with a handful of model sentance structures looks reasonable  </li>
                <li><FaCheck/>compain with a handful of model sentance structures looks reasonable  </li>
                <li><FaCheck/>compain with a handful of model sentance structures looks reasonable  </li>
                <li><FaCheck/>compain with a handful of model sentance structures looks reasonable  </li>
                <li><FaCheck/>compain with a handful of model sentance structures looks reasonable  </li>
                <li><FaCheck/>compain with a handful of model sentance structures looks reasonable  </li>
                </ul>
                <button type='button'>Learn More </button>
                {/*<img src={form} width='12px' height={'12px'}/> */}
            </div>
            <div>
                <img src={thumb2} alt ='thumb2'/>
            </div>
            


        </div>
        
        </>
    )
}

export default ScreenShots