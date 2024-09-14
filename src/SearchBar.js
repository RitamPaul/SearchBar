import React, { useState } from "react";
import countries from "./countries.json"; // Assuming countries.json is in the src folder
import "./SearchBar.css"; // Optional: External CSS for styling

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const userInput = e.target.value.toLowerCase();
    setSearchTerm(userInput);

    if (userInput) {
      const filteredSuggestions = countries.filter(
        (country) =>
          country.country.toLowerCase().includes(userInput) ||
          country.capital.toLowerCase().includes(userInput)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by country or capital"
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((country, index) => (
            <li key={index} className="suggestion-item">
              <strong>{country.country}</strong> - {country.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
