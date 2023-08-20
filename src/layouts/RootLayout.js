import { NavLink, Outlet } from 'react-router-dom';

// Defining the RootLayout component as a function !!
export default function RootLayout() {

    // This part contains the JSX (user interface) for the RootLayout component !!
    return (

        // A container with CSS class "root-layout" !!
        <div className="root-layout">

            {/* Header */}
            <header>

                {/* Navigation */}
                <nav>

                    {/* Links for navigating to different sections */}
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>

                </nav>
            </header>

            {/* Main content */}

            <main>
                {/* A special placeholder that renders nested routes */}
                
                <Outlet />
            </main>
        </div>
    );
}