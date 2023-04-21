import React from "react";
import { Timeline } from "primereact/timeline";

export default function Formations() {
  const events = [
    {
      status: "Ecole Marocaine des Sciences de l'ingénieur EMSI à Marrakech.",
      date: "2022-2023",
      color: "#9C27B0",
      desc: "Cycle d'ingénieur en Génie Informatique (4e Année) Option MIAGE ",
    },
    {
      status: "École supérieure de technologie à Essaouira.",
      date: "2021-2022",
      color: "#673AB7",
      desc: "Licence professionnelle en ingénierie des systèmes informatiques et logiciels.",
    },
    {
      status: "École supérieure de technologie à Essaouira.",
      date: "2019-2022",
      color: "#673AB7",
      desc: "Licence professionnelle en ingénierie des systèmes informatiques et logiciels.",
    },
    {
      status: "Lycée Moulay Rachid.",
      date: "2018-2019",
      color: "#673AB7",
      desc: "Baccalauréat Sciences expérimentales option sciences physiques",
    },
  ];

  return (
    <div>
      <Timeline
        value={events}
        opposite={(item) => item.date}
        content={(item) => (
          <small className="text-color-secondary">
            <p>{item.status}</p>
            <ul class="list-none">
              <li>{item.desc}</li>
            </ul>
          </small>
        )}
        style={{ left: "0%" }}
      />

      <Timeline />
    </div>
  );
}
