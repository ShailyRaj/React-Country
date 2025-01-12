import axios from 'axios';

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});


// HTTP GET method
export const getCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags");
}

// HTTP GET method for individual country data
export const getCountryIndData = (name) => {
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}

