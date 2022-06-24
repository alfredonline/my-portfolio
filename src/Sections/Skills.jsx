import React from "react";
import SkillsCard from "../Components/SkillsCard";
import Title from "../Components/Title";
import GitIcon from "../Media/Git.png";
import ReactIcon from "../Media/React.png";
import LinuxIcon from "../Media/Ubuntu.png";
import ExpressIcon from "../Media/NodeJS.png";
import MongoDBIcon from "../Media/MongoDB.png";
import FigmaIcon from "../Media/Figma.png";
import MaterialUIIcon from "../Media/MaterialUI.png";
import JavascriptIcon from "../Media/Javascript.png";
import SassIcon from "../Media/Sass.png";
import CSSIcon from "../Media/CSS.png";
import HTMLIcon from "../Media/HTML.png";
import JWTIcon from "../Media/JWT.png";

const skills = [
  {
    name: "Git",
    img: GitIcon,
  },
  {
    name: "React",
    img: ReactIcon,
  },
  {
    name: "Linux",
    img: LinuxIcon,
  },
  {
    name: "Express",
    img: ExpressIcon,
  },
  {
    name: "MongoDB",
    img: MongoDBIcon,
  },
  {
    name: "Figma",
    img: FigmaIcon,
  },
  {
    name: "MaterialUI",
    img: MaterialUIIcon,
  },
  {
    name: "Javascript",
    img: JavascriptIcon,
  },
  {
    name: "Sass",
    img: SassIcon,
  },
  {
    name: "CSS",
    img: CSSIcon,
  },
  {
    name: "HTML",
    img: HTMLIcon,
  },
  {
    name: "JWT",
    img: JWTIcon,
  },
];
function Skills() {
  return (
    <div className="Skills">
      <Title text={"Web Development Languages I Speak"} />
      <div className="SkillsWrapper">
        {skills.map((item) => {
          return <SkillsCard name={item.name} path={<img src={item.img} style={{width: "100%"}} />} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
