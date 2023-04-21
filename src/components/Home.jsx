import React from "react";
import { Button } from "primereact/button";
import Photo from "../assets/photo.jpg";

function Home() {
  return (
    <header>
      <div className="grid grid-nogutter surface-section text-800">
        <div className="col-12 md:col-8 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">
              ESSAKHI Aimrane
            </span>
            <div className="text-6xl text-primary font-bold mb-3">
            FUTUR INGENIEUR EN INFORMATIQUE ET RESEAU
            </div>
            <p className="mt-0 mb-4 text-700 line-height-3">
            FUTUR INGENIEUR EN INFORMATIQUE ET RESEAU
            </p>

            <Button
              label="Télécharger CV"
              type="button"
              className="mr-3 p-button-raised"
            ></Button>
          </section>
        </div>
        <div className="col-4 md:col-4 overflow-hidden">
          <img
            src={Photo}
            className="md:ml-auto block md:h-full"
            style={{
              width: "400px",
              clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </div>
    </header>
  );
}
export default Home;
