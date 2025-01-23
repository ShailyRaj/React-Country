import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi";
import {Loader} from "../components/UI/Loader";
import { CountryCard } from "../components/Layouts/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        startTransition(async ()=> {
            const res = await getCountryData();
            // console.log(res.data);
            setCountries(res.data);
        })
    }, []);

    if(isPending) return <Loader />

    // console.log(search, filter);

    const searchCountry = (country) => {
        // checks if a country's name includes the search term (case-insensitive).
        if(search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
    }

    const filterRegion = (country) => {
        // checks if a country's region matches 
        if(filter === "all") return country;
        return country.region === filter;
    };

    // main logic
    const filterCountries = countries.filter(
        (country) => searchCountry(country) && filterRegion(country)
    );
    // .filter() method -> create a new array containing only the countries that match both the search and filter criteria.
    // callback function calls searchCountry(country) for each country.
    // If searchCountry(country) returns true, the country is included in the filterCountries array.

    return (
        <section className="container country-section">
            <SearchFilter 
                search={search} 
                setSearch={setSearch} 
                filter={filter} 
                setFilter={setFilter} 
                countries={countries} 
                setCountries={setCountries}
            />

            <ul className="grid grid-three-cols">
                {
                    filterCountries.map((currCountry, index) => {
                        return (
                            <CountryCard country={currCountry} key={index} />
                        )
                    })
                }
            </ul>
        </section>
    )
}