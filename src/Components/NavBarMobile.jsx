import React from "react";

function NavBarMobile() {
  const navItems = ["Projects", "Skills", "About", "Contact"];

  return (
    <div className="NavigationBarStuckBottom">
      <div className="navItemsMobile">
        {navItems.map((item) => {
          return (
            <a href={`#${item}`} name={item} className="removeLinkWhiteText mobileNavItem">
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default NavBarMobile;
