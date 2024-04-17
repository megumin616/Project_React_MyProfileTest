import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import profile from "../../assets/images/profile.jpg";

export default function Navbar() {
  const [style, setStyle] = useState(true);

  const onMemu = () => {
    const x = document.querySelector(".container-nav ul");
    const y = document.querySelector(".active-nav-img")
    const z = document.querySelector("#img-profile")
    if (x.style.display === "none") {
        x.style.display = "flex";
        y.style.display = "none"
        z.style.display = "none"
        document.querySelector(".active-nav button").style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 2px 2px"; // เปลี่ยน style box-shadow เมื่อเปิดเมนู
    } else {
        x.style.display = "none";
        y.style.display = ""
        z.style.display = ""
        document.querySelector(".active-nav button").style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 5px";
    }
}


  return (
    <>
      {style ? (
        <div className="container-nav">
          <div className="active-nav">
            <button onClick={onMemu}>Memu</button>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Resume</li>
              <li>Portollo</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div id="img-profile">
              <img className="active-nav-img" src={profile} width={150} height={150} />
            </div>
          </div>
        </div>
      ) : (
        <div className="container-nav">
          <div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Resume</li>
            </ul>
          </div>
          <div>
            <div id="img-profile">
              <img src={profile} width={150} height={150} />
            </div>
          </div>
          <div>
            <ul>
              <li>Portollo</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
