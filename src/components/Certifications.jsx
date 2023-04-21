import React from "react";
import PaperCard from "./PaperCard";

const papers = [
  {
    Title: "DevOps, Cloud, and Agile Foundations",
    Year: "2023",
    "Source title":
      "In this Specialization, learners developed foundational knowledge in DevOps, including the culture, technology, and skills needed to succeed as a DevOps practitioner. This Specialization also familiarized learners with tools and technologies used by DevOps practitioners.",
    Link: "https://www.coursera.org/account/accomplishments/specialization/certificate/KSRX54GH6EEV",
  },
  {
    Title: "Front-End Web Development with React",
    Year: "2023",
    "Source title":
      "an online non-credit course authorized by The Hong Kong University of Science and Technology and offered through Coursera",
    Link: "https://www.coursera.org/account/accomplishments/certificate/4HGXN383Q44R",
  },
  {
    Title: "Advanced React",
    Year: "2023",
    "Source title": "Journal of Theoretical and Applied Information Technology",
    Link: "https://www.coursera.org/account/accomplishments/certificate/NHH5KEKM9NN2",
  },
];

function Certifications() {
  return (
    <section className="section">
      <PaperCard data={papers} />
    </section>
  );
}

export default Certifications;
