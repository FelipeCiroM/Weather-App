import React from "react";
import "./About.css";
//creo el componente funcional About que se mostrará en la ruta /about
export default function About() {
  return (
    <div className="about">
      <br />
      <h2>Hola!</h2>
      <br />
      <h4>Soy Felipe Ciro Montoya </h4>
      <h4>Estoy encantado de que uses mi App.</h4>
      <br />
      <br />
      <p className="margen">
        Está diseñada para que puedas buscar una ciudad y en un principio saber
        su temperatura máxima y mínima. <br /> <br />
        Ten en cuenta que dando clic tanto en el nombre como en el ícono de cada
        tarjeta, vas a poder visualizar un poco más (como la latitud, el viento,
        entre otras...)
      </p>
      <br />
      <br />
      <h4>Saudos!</h4>
    </div>
  );
}
