import React from "react";
import styled from "styled-components";
import ImgPath from "./img/about_img.jpg";
import "./styles.css";

const TittleYellow = styled.h2`
  margin: 0 0 64px;
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  color: #ffd61a;
`;

const SectionTitleJa = styled.p`
  display: block;
  margin: 24px 0 0;
  color: #222;
  font-size: 1.6rem;
  font-weight: normal;
  text-align: center;
  margin: 0 0 64px;
`;

const SectionParagraph = styled.p`
  margin: 0 0 40px;
  line-height: 1.75;
  text-align: center;
  margin: 0 0 32px;
`;

const About = () => {
  return (
    <div className="section_title">
      <div className="layout-about">
        <a name="about">
          <TittleYellow>About</TittleYellow>
        </a>
        <SectionTitleJa>チーズアカデミーについて</SectionTitleJa>
        <div className="section-sentence">
          <SectionParagraph className="section-paragraph">
            チーズアカデミーは、チーズ職人養成学校です。
          </SectionParagraph>
          <SectionParagraph>
            チーズの素晴らしさを、自給自足を通じて、できるだけ多くの人に知っていただきたい。
            <br />
            そして、食卓にはいつもチーズがあった、あの頃の当たり前をこの手で取り戻したい。
          </SectionParagraph>
          <SectionParagraph>
            そんな思いから、チーズ職人養成学校「チーズアカデミーTOKYO」は歩みを始めています。
          </SectionParagraph>
          <SectionParagraph>
            卒業後、チーズ自給自足のバックアップはもちろんのこと、
            <br />
            チーズ職人への就職・転職もサポートします。
          </SectionParagraph>
        </div>
      </div>
      <div claasName="image">
        <img src={ImgPath} alt="チーズアカデミーの学校の様々な様子" />
      </div>
    </div>
  );
};

export default About;
