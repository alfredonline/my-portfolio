import React from "react";
import Typography from "@mui/material/Typography";

function NavbarLgScreen() {
  const navItems = ["Projects", "Skills", "About", "Contact"];

  return (
    <div className="NavigationBar">
      <Typography variant="title">AlfieOnline.</Typography>
      <div className="navItems">
        {navItems.map((item) => {
          return (
            <a href={`#${item}`} name={item} className="removeLinkWhiteText">
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default NavbarLgScreen;
