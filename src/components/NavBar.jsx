import React from "react";
import { TabMenu } from "primereact/tabmenu";

function NavBar() {
  const items = [
    { label: "Home", url: "/" },
    { label: "Formations", url: "/formations" },
    { label: "Experiences", url: "/experiences" },
    { label: "Projets", url: "/projets" },
    { label: "Certifications", url: "/certifications" },
  ];

  const handleTabChange = (e) => {
    const selectedIndex = e.index;
    const selectedTab = items[selectedIndex];
    window.location.href = selectedTab.url;
  };
  return (
    <div>
      <TabMenu
        model={items}
        onTabChange={handleTabChange}
        style={{ display: "flex", justifyContent: "center" }}
      ></TabMenu>
    </div>
  );
}

export default NavBar;
