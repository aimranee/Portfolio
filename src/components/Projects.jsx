import React from "react";
import PaperCard from "./PaperCard";

const papers = [
  {
    Title: "Applications mobiles E-Booking :",
    Year: "2022",
    "Source title":
      "Applications de gestion des rendez-vous médicals (Admin-Client) (Flutter, NodeJs) ",
    Link: "https://github.com/aimranee/SYSLAB",
  },
  {
    Title: "Application desktop de gestion du stationnement.",
    Year: "2023",
    "Source title": "Gestion des réservations.",
    Link: "https://github.com/aimranee/SmartParking",
  },
];

function Projects() {
  return (
    <section className="section">
      <PaperCard data={papers} />
    </section>
  );
}

export default Projects;
