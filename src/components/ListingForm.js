import React, {useState} from 'react'

function ListingForm ( {addListing} ) {

    const [formData, setFormData] = useState({
        description: "",
        image: "",
        location: "Ridgewood"
    })

    const handleChange = (e) => {
        let key = e.target.name
        let value = e.target.value

        setFormData({
            ...formData,
            [key]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        addListing(formData)
    }


return (
    <div>
        <form onSubmit={handleSubmit} className="add-toy-form">
            <h3>Create a listing!</h3>
            <input
            type="text"
            name="description"
            placeholder="Enter a description..."
            value={formData.description}
            className="input-text"
            onChange={handleChange}
            />
            <br />
            <input
            type="text"
            name="image"
            placeholder="Enter a image URL..."
            className="input-text"
            value={formData.image}
            onChange={handleChange}
            />
            <br />
            <input
            type="text"
            name="location"
            placeholder="Enter a location.."
            className="input-text"
            value={formData.location}
            onChange={handleChange}
            />
            <br />
            <input
            type="submit"
            name="submit"
            value="Create New Listing"
            className="submit"
            />
        </form>
    </div>
)
}

export default ListingForm