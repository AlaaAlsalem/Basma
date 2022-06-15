import thumb from '../images/thumb-2 (1).png'
import form from '../images/form-mail.svg'
import { FaCheck } from 'react-icons/fa'
import { IoIosNotifications, IoMdMail, IoIosVideocam } from 'react-icons/io'
import './ScreenShots.css';
import thumb2 from '../images/thumb-2.png'

const ScreenShots = () => {
    return (
        <>
            <div className='main' id='screenshots'>
                <div className='Champion_img'>
                    <img src={thumb} alt='thumb2' />
                </div>
                <div className='options'>
                    <h1> Work faster with powerful tools. </h1>
                    <ul className='Champion'>
                        <li ><FaCheck className='check' />compain with a handful of model sentance structures looks reasonable  </li>
                        <li><FaCheck className='check' />compain with a handful of model sentance structures looks reasonable  </li>
                        <li><FaCheck className='check' />compain with a handful of model sentance structures looks reasonable  </li>
                        <li><FaCheck className='check' />compain with a handful of model sentance structures looks reasonable  </li>
                        <li><FaCheck className='check' />compain with a handful of model sentance structures looks reasonable  </li>
                        <li><FaCheck className='check' />compain with a handful of model sentance structures looks reasonable  </li>
                        <li><FaCheck className='check' />compain with a handful of model sentance structures looks reasonable  </li>
                    </ul>
                    <IoIosNotifications className='call_icon' />
                    <IoMdMail className='call_icon' />
                    <IoIosVideocam className='call_icon' />
                    {/*<img src={form} width='12px' height={'12px'}/> */}
                </div>



            </div>
            <div className='second'>

                <div className='options'>
                    <h1> Work faster with powerful tools</h1>
                    <ul className='Champion'>
                        <li><FaCheck className='check' />compain with a handful of model sentance structures looks reasonable  </li>
                        <li><FaCheck className='check' />compain with a handful of model sentance structures looks reasonable  </li>
                        <li><FaCheck className='check' />compain with a handful of model sentance structures looks reasonable  </li>
                        <li><FaCheck className='check' />compain with a handful of model sentance structures looks reasonable  </li>
                        <li><FaCheck className='check' />compain with a handful of model sentance structures looks reasonable  </li>
                        <li><FaCheck className='check' />compain with a handful of model sentance structures looks reasonable  </li>
                        <li><FaCheck className='check' />compain with a handful of model sentance structures looks reasonable  </li>
                    </ul>
                    <button type='button' className='screen_btn'>Learn More </button>

                </div>
                <div className='Champion_img'>
                    <img src={thumb2} alt='thumb2' />
                </div>



            </div>

        </>
    )
}

export default ScreenShots