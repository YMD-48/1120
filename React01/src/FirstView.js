import React from "react";
import styled from "styled-components";
import ImgPath from "./img/hero_img.jpg";
import "./styles.css";

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: #fff;
  font-size: 4.8rem;
  line-height: 1;
  text-align: center;
`;
const TitleSub = styled.h2`
  display: block;
  margin: 40px 0 0;
  font-size: 0.67em;
  font-weight: normal;
`;

const FirstView = () => {
  return (
    <div className="mainvisual">
      <Title>
        セカイを変えるチーズを作ろう
        <TitleSub>チーズ職人養成学校「チーズアカデミーTOKYO」</TitleSub>
      </Title>
      <img src={ImgPath} alt="チーズの画像" />
    </div>
  );
};

export default FirstView;
