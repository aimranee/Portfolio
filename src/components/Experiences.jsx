import React from "react";
import { Card } from "react-bootstrap";

function Experiences() {
  const experiences = [
    {
      entreprise: "Stage D'application Potentiel 2 Maroc à Agadir",
      titre:
        "Création, conception et développement de deux applications mobiles E-Booking : Applications de gestion des rendez-vous médicals (Admin-Client) (Flutter, NodeJs)",
      annees: "De 01 Avril au 30 Juillet 2022",
    },
    {
      entreprise: "Stage D'application Marrakech-Telecom à Marrakech",
      titre:
        "Création d'une site web Freelance : application BTOB pour les etnreprise (Symfony5, JavaScript)",
      annees: "De 26 Avril au 09 Juillier 2022",
    },
  ];

  return (
    <section className="section">
      {experiences.map((experience) => (
        <Card key={experience.entreprise} className="mb-3">
          <Card.Body>
            <Card.Title>{experience.entreprise}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {experience.titre}
            </Card.Subtitle>
            <Card.Text>{experience.annees}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </section>
  );
}

export default Experiences;
