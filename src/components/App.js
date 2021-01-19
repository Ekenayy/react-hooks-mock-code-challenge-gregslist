import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const listingsUrl = "http://localhost:6001/listings"
  const [listings, setListings] = useState([])
  const [searched, setSearched] = useState("Hello")
 
  useEffect(() => {
    fetch(listingsUrl)
      .then(r => r.json())
      .then(fetchListings => setListings(fetchListings))
  }, [])

  const onDelete = (deletedListing) => {
    
    fetch(`${listingsUrl}/${deletedListing.id}`, {
      method: 'DELETE'
    })
      .then(r => r.json())
      .then(data => console.log(data))

    const remainingListings = listings.filter(listing => {
      return listing.id !== deletedListing.id
    })

    setListings(remainingListings)
  }

  return (
    <div className="app">
      <Header searched={searched} setSearched={setSearched} />
      <ListingsContainer searched={searched} onDelete={onDelete} listings={listings}/>
    </div>
  );
}

export default App;
