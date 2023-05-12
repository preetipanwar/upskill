export default function Search() {
  return (
    <div className="section">
      <img
        src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
        alt=""
      />
      <h1>Discover the best food & drinks in Delhi NCR</h1>

      <div className="searchBar">
        <input
          className="locationInput"
          type="text"
          list="cityname"
          placeholder="Location"
        />
        <datalist id="cityname">
          <option value="noida"> Noida</option>
          <option value="bhiwadi">Bhiwadi</option>
        </datalist>
        <input
          className="searchInput"
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
        />
      </div>
    </div>
  );
}
