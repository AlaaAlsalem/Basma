import Cards from "./Cards";
import './styles/Features.css'


const Features = () =>{

    const cardsArray = [
        {
        id:1,
        title: 'Fully functional',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
        id:1,
        title: 'Fully functional',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
        id:1,
        title: 'Fully functional',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
        id:1,
        title: 'Fully functional',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
        id:1,
        title: 'Fully functional',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
        id:1,
        title: 'Fully functional',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
   
];

    return (
        <div className="main_feature" id="Features">
            <div className="Feature_description">
                <h1>Code Challienge</h1>
                <hr className="line"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore   sed do eiusmod tempor incididunt ut labore</p>
            </div>
            <div className="Feature_cards">{
                    cardsArray.map(item =>
                        <Cards className='card'
                        title={item.title}
                        description={item.description}/>
                        
                    )
                }

            </div>
        </div>
    )
}

export default Features;