import React from "react";
import SearchBar from "./SearchBar"; // Import the SearchBar component

function App() {
  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          marginTop: "50px",
          letterSpacing: "5px",
        }}
      >
        COUNTRY SEARCH
      </h1>
      <SearchBar />
    </div>
  );
}

export default App;
