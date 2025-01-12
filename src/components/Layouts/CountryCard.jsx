import { NavLink } from 'react-router-dom';

// {} => for Named Import -> used to import specific named exports from a module.
// "" => for Default Import -> used to import the default export from a module.

export const CountryCard = ({country}) => {
    const {flags, name, population, region, capital} = country;

    return (
        <li className="country-card card">
            <div className="container-card bg-white-box">
                <img src={flags.svg} alt={flags.alt} />

                <div className="countryInfo">
                    <p className="card-title">
                        {name.common.length > 12 ? name.common.slice(0, 12) + "..." : name.common}
                    </p>
                    <p>
                        <span className="card-description">Population: </span>
                        {population > 9999999 ? (population / 1000000).toFixed(1) + 'M' : population.toLocaleString()}
                        
                            {/* 'population / 1,000,000' to convert it to millions.
                            '.toFixed(1)' -> format the number -> one decimal place.("1234.6")
                            'M' -> appended -> to indicate millions. */}
                        
                    </p>
                    <p>
                        <span className="card-description">Region: </span>
                        {region}
                    </p>
                    <p>
                        <span className="card-description">Capital: </span>
                        {capital && capital[0] && capital[0].length > 10 ? capital[0].slice(0, 10) + "..." : capital[0]}
                    </p>

                    <NavLink to={`/country/${name.common}`}>
                        <button>Read more</button>
                    </NavLink>
                </div>
            </div>
            
        </li>

    )
}