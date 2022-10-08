import React from "react";
import { NavLink } from "react-router-dom"

// eslint-disable-next-line
{/*
  Note:
  functional component rather than class component => less confusion
  another syntax const Home = () => {};
*/}

function Home() {
  return (
    <div className="Home">
      <h1>Home Page</h1>
      <br/>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/art">Art</NavLink>
        </li>
        <li>
          <NavLink to="/cv">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Home;
