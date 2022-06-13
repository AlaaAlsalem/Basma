
const CardPricing = (props) => {
    return (
        <>
        <div>
        <img src={props.path} alt='basic/pro'/>
        <h1>{props.title}</h1>
        <h1>{props.price}</h1>
        <ul>
        <li>{props.feature1}</li>
        <li>{props.feature2}</li>
        <li>{props.feature3}</li>
        <li>{props.feature4}</li>
        </ul>
        <button type="button">sign up</button>
        </div>
        </>
    )
}

export default CardPricing