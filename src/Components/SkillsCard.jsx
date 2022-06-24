import React from "react";

function SkillsCard({ name, path }) {
  return (
    <div className="SkillsCard">
      <div style={{ width: "30px", height: "30px" }}>{path}</div>
      <div>{name}</div>
    </div>
  );
}

export default SkillsCard;
