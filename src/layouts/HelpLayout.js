// Import required modules from React and react-router-dom !!
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// Define a functional component named HelpLayout !!
function HelpLayout() {
  return (

    // Create a div with class name "help-layout" !!
    <div className="help-layout">

      {/* Display the main title */}
      <h2>Help Center</h2>

      {/* Display a description */}
      <p>Advice and answers from the Unsplash Team</p>

      {/* Navigation links */}
      <nav>

        {/* Create a NavLink to the "faq" route */}
        <NavLink to="faq">View the FAQ</NavLink>

        {/* Create a NavLink to the "contact" route */}
        <NavLink to="contact">Contact Us</NavLink>
        
      </nav>

      {/* Main content outlet */}
      <main>

        {/* Render the child components of the matched route */}
        <Outlet />

      </main>
    </div>
  );
}

// Export the HelpLayout component as the default export of the module !!
export default HelpLayout;

