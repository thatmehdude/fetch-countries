type CardProps = {
    flagUrl: string;
    name: string;
    region: string;
    capital: string;
    population: number;
}

const Card = (props: CardProps) => {
    return (
        <div>
            <div className="flag-img">
                <img className="flag" src={props.flagUrl} alt="country flag" />
            </div>
            <div className="country-details">
                <h3>{props.name}</h3>
                <p>Population: <span>{props.population}</span></p>
                <p>Region: <span>{props.region}</span></p>
                <p>Capital: <span>{props.capital}</span></p>
            </div>
        </div>
    )
}
export default Card