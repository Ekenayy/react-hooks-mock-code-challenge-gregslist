import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {listings, searched, setSearched, onDelete} ) {
  
  const allListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(searched.toLowerCase())
  })
  .map(listing => {
    return <ListingCard onDelete={onDelete} key={listing.id} listing={listing}/>
  })
  
  return (
    <main>
      <ul className="cards">
        {allListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
