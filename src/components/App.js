import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const listingsUrl = "http://localhost:6001/listings"
  const [listings, setListings] = useState([])
  const [searched, setSearched] = useState("")
  const [sort, setSort] = useState(false)
 
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

  const addListing = (newListing) => {
    
    fetch(listingsUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newListing)
    })
      .then(r => r.json())
      .then(newListing => setListings([...listings, newListing]))
  }

  return (
    <div className="app">
      <Header sort={sort} setSort={setSort} searched={searched} setSearched={setSearched} />
      <ListingsContainer addListing={addListing} sort={sort} searched={searched} onDelete={onDelete} listings={listings}/>
    </div>
  );
}

export default App;
