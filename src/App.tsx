import { useEffect, useState } from "react";
import { type country } from "./utils";
import Header from "./components/Header";

function App() {
  const [countries, setCountries] = useState<country[]>([]);
  const [activeCountries, setActiveCountries] = useState<country[]>([]);

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
        setActiveCountries(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (inputText: string) => {
    const searchCountries: country[] = countries.filter((country) =>
      country.name.toLowerCase().startsWith(inputText.toLowerCase())
    );
    console.log(searchCountries);
    setActiveCountries(searchCountries);
  };

  const handleFilter = (inputText: string) => {
    const filterCountries: country[] = countries.filter(
      (country) => country.region === inputText
    );
    console.log(filterCountries);
    setActiveCountries(filterCountries);
  };

  return (
    <div>
      <Header />
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      <select
        name="continents"
        id="continents"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="" selected disabled>
          Filter by region
        </option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Americas">Americas</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <ul>
        {activeCountries.map((country, index) => (
          <li key={index}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
