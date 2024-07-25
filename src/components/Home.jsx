import {useState, /*useEffect*/ } from 'react';
import axios from 'axios';

const Home = () => {
    const [country, setCountry] = useState ('');
    const [countryData, setCountryData] = useState (null);


    const countries = ['USA', 'Canada', 'France', 'Colombia'];

    const fetchCountryData = async (country) => {
        try {
            const weatherResponse = await axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=YOUR_WEATHER_API_KEY&units=metric`);
            const countryResponse = await axios.get (`https://restcountries.com/v3.1/name/${country}`);
            const data = {
                temperature: weatherResponse.data.main.temp,
                time: new data().toLocaleString('en-US', {timeZone:countryResponse.data[0].timezones[0]}),
                capital: countryResponse.data[0].capital[0],
                flag: countryResponse.data[0].flag.png,
                coatOfArms: countryResponse.data[0].coatOfArms.png,
                anthem: countryResponse.data[0].anthem,
            };
            setCountryData(data);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
        fetchCountryData(e.target.value);
    };

    return(
        <div>
            <h1>Country Information</h1>
            <select onChange={handleCountryChange}>
                <option value=" ">Select a country</option>
                {countries.map((c) =>(
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>
            {countryData && (
                <div>
                    <h2>{country}</h2>
                    <p>Temperature: {countryData.temperature} °C</p>
                    <p>Current Time: {countryData.time}</p>
                    <p>Population: {countryData.population}</p>
                    <p>Capital: {countryData.capital}</p>
                    <img src={countryData.flag} alt="flag"></img>
                    <img src={countryData.coatOfArms} alt="Coat of Arms"></img>
                    <p>Anthem: {countryData.anthem}</p>
                </div>
            )}
        </div>
    );
};
export default Home;