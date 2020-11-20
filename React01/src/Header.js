import React from "react";
import styled from "styled-components";
import ImgPath from "./img/header_logo.png";

const Header = () => {
  return (
    <div class="HeaderAll">
      <div class="header-above">
        <div class="wrapper header-inner">
          <p class="logo logo-header">
            <a href="#header">
              <img src={ImgPath} alt="チーズアカデミーのロゴ" />
            </a>
          </p>

          <button class="btn btn-mobileMenu">Menu</button>

          <nav class="nav-outer">
            <ul class="nav clearfix">
              <li class="nav-item">
                <a href="#about">About</a>
              </li>
              <li class="nav-item">
                <a href="#about">Course</a>
              </li>
              <li class="nav-item">
                <a href="#about">News</a>
              </li>
              <li class="nav-item">
                <a href="#about">Access</a>
              </li>
              <li class="nav-item">
                <a href="#about">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
