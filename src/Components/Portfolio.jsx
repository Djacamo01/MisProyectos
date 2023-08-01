/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Skills.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Encriptador OracleNext Alura",
    description:
      "Creado con el apoyo de Oracle One y Alura, este proyecto permite encriptar y desencriptar mensajes de manera divertida. 🔐",
    url: "https://github.com/Djacamo01/Encriptador-OracleNext-Alura",
  },
  {
    title: "Hotel Alura ONE Alura",
    description:
      "Gracias al respaldo de Oracle One y Alura, desarrollé este sitio web para un hotel imaginario con diseño moderno y funcionalidades interactivas. 🏨",
    url: "https://github.com/Djacamo01/HotelAlura-ONE-Alura",
  },
  {
    title: "Conversor Moneda ONE Alura",
    description:
      "Con el apoyo de Oracle One y Alura, creé este conversor de monedas que permite realizar conversiones rápidas y precisas. 💱",
    url: "https://github.com/Djacamo01/Conversor-Moneda-ONE-Alura",
  },
  {
    title: "Foro Alura ONE Alura",
    description:
      "Gracias a Oracle One y Alura, diseñé y desarrollé este foro interactivo donde los usuarios pueden compartir sus conocimientos y experiencias. 🗣️",
    url: "https://github.com/Djacamo01/ForoALura-ONE-Alura",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
