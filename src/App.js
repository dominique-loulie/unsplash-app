import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components and layouts
import Head from './components/Head';
import Explore from './components/Explore';
import Conclusion from './components/Conclusion';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';

// Define the main App component !!
function App() {

  // State variables for search term and fetched photo data !!
  const [word, setWord] = useState('');
  const [photo, setPhoto] = useState([]);

  // Function to fetch photo data from the Unsplash API !!
  const getPhotoData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos?query=${word}&client_id=aN4ndnD1EJYpVUmL63S_Rl4JYinKpg7w1YymPyMj-M8`);
      setPhoto(response.data.results);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <Router>
      <div className="App">
        {/* Render the Head component */}
        <Head />

        {/* Render the Explore component */}
        <Explore setWord={setWord} getPhotoData={getPhotoData} />

        {/* Render the Conclusion component */}
        <Conclusion photo={photo} />

        {/* Define nested routes */}
        <Routes>

          {/* Render the RootLayout for certain routes */}
          <Route path="/" element={<RootLayout />}>

            {/* Render the Home component as the index route */}
            <Route index element={<Home />} />

            {/* Render the About component */}
            <Route path="about" element={<About />} />

            {/* Render the HelpLayout for "help" routes */}
            <Route path="help" element={<HelpLayout />}>

              {/* Render the Faq component */}
              <Route path="faq" element={<Faq />} />
              
              {/* Render the Contact component */}
              <Route path="contact" element={<Contact />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

// Export the App component as the default export !!
export default App;







