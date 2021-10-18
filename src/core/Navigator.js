import React from "react";
import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <ul className='navigator'>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/team">Team</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/mentors">Mentors</Link>
      </li>
      <li>
        <Link to="/students">Students</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
  );
};

export default Navigator;
