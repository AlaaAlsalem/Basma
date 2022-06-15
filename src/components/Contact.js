import { BsHouseDoor } from 'react-icons/bs';
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import './styles/Contact.css'

const Contact = () => {
    return (
        <div id='contact_us'>
            <div className='stay_tund'>
                <h1>Stay Tuned</h1>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                    pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                    Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, </p>
            </div>
            <div className='contact'>
                <div className='conact_phone'>
                    <p>Country to popular belief,Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Quisque nisl eros,
                        pulvinar facilisis justo mollis, auctor consequat urna.
                    </p>
                    <p><AiOutlineMail className='icon' /> pulvinar facilisis justo mollis, auctor consequat urna. </p>
                    <p><BsTelephone className='icon' /> pulvinar facilisis justo mollis, auctor consequat urna. </p>
                    <p><BsHouseDoor className='icon' /> pulvinar facilisis justo mollis, auctor consequat urna. </p>
                </div>
                <form className='contact_form'>
                    <input type='text' placeholder='Name' className='finput' />
                    <input type='email' placeholder='email' className='finput' />
                    <input type='text' placeholder='Subject' className='finput' />
                    <textarea type='textarea' value='Message' rows={5}
                        cols={5} />
                    <button type='submit'  ><FiSend />Send Message </button>
                </form>

            </div>
        </div>
    )
}
export default Contact;