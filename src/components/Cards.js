import {GiSettingsKnobs} from 'react-icons/gi'

const Cards = (props)=> {

    return (
        <div>
         <GiSettingsKnobs/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        </div>
    );
}

export default Cards;