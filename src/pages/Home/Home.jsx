import React from "react";
import "../Home/Home.css";

export default function Home() {
  return (
    <div className="container-home">
      <div className="box-1">
        <div className="text-box1">
          <div className="head-box1">
            <h1>Who am I ?</h1>
            <p className="p1">___</p>
          </div>
          <span>
            A Web Designer / Developer <br /> Located In Thailand Chantaburi
          </span>
          <p className="p1-1">
            I am a student now. But I have the ability to use tools to Lots of
            web development
          </p>
        </div>
        <button>Dowload My CV</button>
      </div>

      <div className="box-1">
        <div className="text-box2">
          <div className="head-box1">
            <h1>Personal Info</h1>
            <p className="p1">___</p>
          </div>
          <h2>
            Birthdate: <span>28/12/2001</span>
          </h2>
          <h2>
            Email: <span>toncom616@gmail.com</span>
          </h2>
          <h2>
            Phone: <span>+6662......</span>
          </h2>
          <h2>
            Skype: <span>Megumin61</span>
          </h2>
          <h2>
            Address: <span>22000 Chantaburi Thailand 16/00</span>
          </h2>
        </div>
        <div className="pagehome-icon">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-google"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-discord"></i>
        </div>
      </div>

      <div className="box-1">
        <div className="text-box3">
        <div className="head-box1">
            <h1>My Expertise</h1>
            <p className="p1">___</p>
          </div>
          <div className="ui-box3">
            <i class="fa-brands fa-react"></i>
            <div>
              <h3>React Js</h3>
              <p>Experi React Js development</p>
            </div>
          </div>
          <hr />

          <div className="ui-box3">
            <i class="fa-brands fa-laravel"></i>
            <div>
              <h3>Laravel 11</h3>
              <p>Experi Laravel development</p>
            </div>
          </div>
          <hr />

          <div className="ui-box3">
            <i class="fa-solid fa-database"></i>
            <div>
              <h3>Database</h3>
              <p>Experi Database Mysql, Firebase</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
