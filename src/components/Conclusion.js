import React, { useState } from 'react';

// Define a functional component named Photo, which takes props 'data', 'favoriteImages', and 'addToFavorites' !!
const Photo = ({ data, favoriteImages, addToFavorites }) => (
  <div>

    {/* Create a link to the photo's URL */}
    <a href={data.links.html}>

      {/* Display the photo */}
      <img
        src={data.urls.regular}
        alt={data.alt_description}
        style={{

          // Set the background color of the image based on whether it's a favorite or not !!
          backgroundColor: favoriteImages.includes(data.urls.regular) ? "rgb(34, 239, 128)" : "transparent",

          // Set the border style based on whether it's a favorite or not !!
          borderStyle: favoriteImages.includes(data.urls.regular) ? "dashed" : "solid",

          // Set the border color based on whether it's a favorite or not !!
          borderColor: favoriteImages.includes(data.urls.regular) ? "rgb(34, 239, 128)" : "transparent"
        }}
      />
    </a>

    {/* Display the photographer's name */}
    <p className="username">Photo by {data.user.name}</p>

    {/* Display the number of likes */}
    <p className="like">👍{data.likes}</p>

   {/* Button to add/remove the photo from favorites */}
   <button
      className={favoriteImages.includes(data.urls.regular) ? "remove-button" : "add-button"}
      onClick={() => addToFavorites(data)}
    >
      {favoriteImages.includes(data.urls.regular) ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  </div>
);

// Define another functional component named Conclusion, which takes prop 'photo' !!
const Conclusion = ({ photo }) => {

  // Create a state variable 'favoriteImages' using useState, initialized as an empty array !!
  const [favoriteImages, setFavoriteImages] = useState([]);

  // Define a function to add/remove a photo from favorites !!
  const addToFavorites = (photoData) => {
    const imageUrl = photoData.urls.regular;

    if (favoriteImages.includes(imageUrl)) {

      // Remove the image URL from the favorites list if it's already there !!
      setFavoriteImages(prevFavorites => prevFavorites.filter(url => url !== imageUrl));

    } else {

      // If the image URL is not in favorites, make a POST request to add it !!
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify({
          name: photoData.user.name,
          imageUrl: imageUrl
        })
      };

      fetch('http://localhost:5000/favourites', options)
        .then(res => res.json())
        .then(data => {
          
          // Add the image URL to the favorites list after successfully adding it !!
          setFavoriteImages(prevFavorites => [...prevFavorites, imageUrl]);
        })
        .catch(error => {
          console.error('Error adding to favorites:', error);
        });
    }
  };

  // Render the Photo component for each photo in the 'photo' prop array !!
  return (
    <div className="photo-list">
      {photo.map((singleData, index) => (
        <Photo
          key={index}
          data={singleData}
          favoriteImages={favoriteImages}
          addToFavorites={addToFavorites}
        />
      ))}
    </div>
  );
};

// Export the Conclusion component as the default export of the module !!
export default Conclusion;










