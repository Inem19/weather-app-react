import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      This project was coded by <span>Aniebiet-abasi Akpan,</span> and is{" "}
      <a href="https://github.com/Inem19/weather-app-react">open-sourced</a> and
      <a
        href="https://idyllic-tarsier-f3064b.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        hosted on Netlify.
      </a>
    </footer>
  );
}
