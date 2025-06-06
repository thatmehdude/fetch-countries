type ModifyProps = {
    handleSearch: (inputText: string) => void
    handleFilter: (inputText: string) => void
}

const Modify = ({ handleSearch, handleFilter }: ModifyProps) => {
  return (
    <>
      <form>
        <div className="input-container">
          <input
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for country..."
          />
          <div className="img-div search" >
            <img src="/search-svgrepo-com.svg" alt="search" />
          </div>
        </div>

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
      </form>
    </>
  );
};

export default Modify;