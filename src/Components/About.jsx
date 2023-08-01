/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/fondo.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Estudiante y desarrollador web back-end junior. Apasionado por el desarrollo y el marketing digital,Busco aprender y contribuir con soluciones creativas en el área";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Ingles A2",
  "Diseño Web",
  "Gestion de Base de Datos",
  "Maqueado de Paginas Web",
  "Resolucion de Problemas",
  "Colaboracion en Equipo",
  "Edicion de Video",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Como desarrollador web back-end junior y estudiante de ingeniería en desarrollo web y marketing digital, mi pasión radica en crear experiencias online fluidas. Resolver desafíos complejos y adoptar nuevas tecnologías impulsan mi creatividad para diseñar sitios web amigables y accesibles.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Sobre Mi</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
