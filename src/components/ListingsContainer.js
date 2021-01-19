import React from "react";
import ListingCard from "./ListingCard";
import ListingForm from "./ListingForm"

function ListingsContainer( {addListing, listings, sort, searched, setSearched, onDelete} ) {
  
  // console.log(sort)

  const allListings = listings.sort((listingA, listingB) => {
    if (sort) {
      // debugger
      return (listingA.location.toLowerCase()).localeCompare(listingB.location.toLowerCase())
    } else {
      return listings
    }
  })
  .filter(listing => {
    return listing.description.toLowerCase().includes(searched.toLowerCase())
  })
  .map(listing => {
    return <ListingCard onDelete={onDelete} key={listing.id} listing={listing}/>
  })

  return (
    <main>
      <ListingForm addListing={addListing}/>
      <ul className="cards">
        {allListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
