import React from "react";
import jhonPhoto from "../images/Jhon Doe.jpeg";

export default function Header() {
  return (
    <header>
      <img
        className="profile-photo"
        src={jhonPhoto}
        alt="nayeem-profile-photo"
      />
      <h1 className="header-title">Jhon Doe</h1>
      <p className="header-subtitle">Frontend devoloper</p>
      <a className="website-link" href="jhondoe.com">
        jhondoe.com
      </a>
    </header>
  );
}
