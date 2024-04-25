import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Rucha Paranjape ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
