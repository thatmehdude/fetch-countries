import type { country } from "../utils"
import Card from "./Card"

type CardProps = {
    activeCountries: country[];
}

const CardContainer = ({activeCountries}: CardProps) => {
    return (
        <div className="card-container">
            {activeCountries.map((country, index) => (
                <Card 
                key={index}
                name={country.name}
                flagUrl={country.flags.svg}
                region={country.region}
                capital={country.region}
                population={country.population}
                />
            ))}
        </div>
    )
}

export default CardContainer