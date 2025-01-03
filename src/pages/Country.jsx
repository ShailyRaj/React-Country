import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import { CountryCard } from "../components/Layouts/CountryCard";

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        startTransition(async ()=> {
            const res = await getCountryData();
            // console.log(res.data);
            setCountries(res.data);
        })
    }, []);

    if(isPending) return <Loader />
    return (
        <section className="container country-section">
            <ul className="grid grid-four-cols">
                {
                    countries.map((currCountry, index) => {
                        return (
                            <CountryCard country={currCountry} key={index} />
                        )
                    })
                }
            </ul>
        </section>
    )
}