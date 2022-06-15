import {GiSettingsKnobs} from 'react-icons/gi'
//import './Pricing.css'
const Cards = (props)=> {

    return (
        <div className='cardd'>
         <GiSettingsKnobs/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        </div>
    );
}

export default Cards;