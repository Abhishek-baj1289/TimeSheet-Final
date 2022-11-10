import React from "react";
import "./Home.css"
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
return (
    <div className="jee">
    <h1>Home Page</h1>
    <br />
    <ul>
        <li className="home">
        {/* Endpoint to route to Home component */}
        <Link to="/">Home</Link>
        </li>
        <li>
        {/* Endpoint to route to About component */}
        <Link to="/create">Create</Link>
        </li>
        <li>
        {/* Endpoint to route to Contact Us component */}
        <Link to="/fetch">Fetch</Link>
        </li>
        <li>
        {/* Endpoint to route to Home component */}
        <Link to="/deletepage">Delete</Link>
        </li>
    </ul>
    </div>
);
};

export default Home;