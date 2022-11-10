import React from "react";
import "./Home.css"
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
return (
    <div className="jee">
    <h1 style={{fontSize:"2rem",color:"white"}}>Home Page</h1>
    <br />
    <ul>
        {/* <li className="home"> */}
        {/* Endpoint to route to Home component */}
        <Link to="/"></Link>
        {/* </li> */}
        <li className="home">
        {/* Endpoint to route to About component */}
        <Link to="/create"><h1 style={{fontSize:"2rem",color:"white"}}>Create</h1></Link>
        </li>
        <li className="home">
        {/* Endpoint to route to Contact Us component */}
        <Link to="/fetch"><h1 style={{fontSize:"2rem",color:"white"}}>Fetch</h1></Link>
        </li>
        <li className="home">
        {/* Endpoint to route to Home component */}
        <Link to="/deletepage"><h1 style={{fontSize:"2rem",color:"white"}}>Delete</h1></Link>
        </li>
    </ul>
    </div>
);
};

export default Home;