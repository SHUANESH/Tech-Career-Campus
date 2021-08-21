import React from "react";
import { Link } from "react-router-dom";
import techLogo from "../../../images/tech-logo.jpeg";
import "./Navbar.css";
import LoginComponent from '../../Pages/Login/LoginComponent';
import "../../Pages/Login/LoginComponent.css";
//Ticker moving news
export default function Navbar() {
  return (
    <>
    <div className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to={"/news"}>חדשות</Link>
        </li>
        <li>
          <Link to={"/events"}>אירועים</Link>
        </li>
        <li>
          <Link to={"/forum"}>פורום</Link>
        </li>
        <li>
          <Link to={"/my-course"}>הקורס שלי</Link>
        </li>
      </ul>
      <div className="navbar-logo">
        <img src={techLogo} alt="" />
      </div>
      
    </div>
    <LoginComponent/>
    </>
  );
}
