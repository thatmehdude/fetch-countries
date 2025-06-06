import { useEffect, useState } from "react";
import { type country } from "./utils";
import Header from "./components/Header";
import Modify from "./components/Modify";

import CardContainer from "./components/CardContainer";

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
      <Modify handleSearch={handleSearch} handleFilter={handleFilter}/>
      <CardContainer activeCountries={activeCountries}/>
    </div>
  );
}

export default App;
