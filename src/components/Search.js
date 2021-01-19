import React, { useState } from "react";

function Search( {searched, setSearched} ) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
