import {BsHouseDoor} from 'react-icons/bs';
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai';
import {FiSend} from 'react-icons/fi';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div>
                <h1>Stay Tuned</h1>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                    pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                    Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, </p>
            </div>
            <div className='contact'>
                <div>
                <p>Country to popular belief,Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Quisque nisl eros,
                    pulvinar facilisis justo mollis, auctor consequat urna.
                     </p>
                     <p><AiOutlineMail/> pulvinar facilisis justo mollis, auctor consequat urna. </p>
                     <p><BsTelephone/> pulvinar facilisis justo mollis, auctor consequat urna. </p>
                     <p><BsHouseDoor/> pulvinar facilisis justo mollis, auctor consequat urna. </p>
                     </div>
                     <form className='contact_form'>
                        <input type='text' placeholder='Name'/>
                        <input type = 'email' placeholder='email'/>
                        <input type='text' placeholder ='Subject'/>
                        <input type='textarea' value='Message'/>
                        <button type = 'submit' ><FiSend/>Send Message </button>
                     </form>
                    
            </div>
        </div>
    )
}
export default Contact;