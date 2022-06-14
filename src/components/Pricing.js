import CardPricing from "./CardPricing";
import Cards from "./Cards";
import bike from '../images/bike.png';
import motorbike from '../images/motorbike.png';

const Pricing = () => {
    const card = [{
        title: "Install the app",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore"
    }, {
        title: "Setup your profile",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore"
    }, {
        title: "Engoy the features",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore"
    },
    ]

    const priceCard = [
        {
            path: bike,
            title:'Basic',
            price:49,
            feature1:'5GB linux Web Space',
            feature2:'5 My Sql Databases',
            feature3: '24/7 Tech Support',
            feature4: 'Daily Backups'
    },
    {
        path: motorbike,
        title:'Pro',
        price:129,
        feature1:'10GB linux Web Space',
        feature2:'50 My Sql Databases',
        feature3: 'Unlemeted Email',
        feature4: 'Daily Backups'
},
    ]
    return (
        <div id="pricing">
            <div className="pricing_main">
                <h1>Code Challenge</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore</p>
                {card.map(item =>
                    <Cards title={item.title} description={item.description} />)}

            </div>
            <div>
                <div>
                    <h1>Basma code challenge</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore
                    </p>
                    <br />
                </div>
                <div>
                    {priceCard.map(item =>
                        <CardPricing path={item.path}
                         title={item.title}
                         price={item.price}
                         feature1={item.feature1}
                         feature2={item.feature2}
                         feature3={item.feature3}
                         feature4={item.feature4}/>)}
                </div>
                <p>Not sure what to choose? <a href="#">Contact Us</a></p>
            </div>

        </div>
    )
}
export default Pricing;