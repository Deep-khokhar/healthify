import React from "react";
import "../styles/Home.css";
import Layout from "./../components/Layout";

export default function Profile1() {
  return (
    <>
    <Layout>
      <div className="wrapper">
        <div className="user-card">
          <div className="user-card-img">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png"
              alt=""
            />
          </div>
          <div className="user-card-info">
            <h2>Mohamed Yousef</h2>
            <p>
              <span>Email:</span> example@example.com
            </p>
            <p>
              <span>Location:</span> Palestine, Gaza Strip
            </p>
            <p>
              <span>Occupation:</span> Web Developer
            </p>
            <p>
              <span>About me:</span> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}
