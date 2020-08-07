import React from "react";
import "../styles/futer.css";

const AppFooter = () => (
  <footer>
    <div className="Contenedor">
      <div className="RedesSociales">
        <a
          href="https://www.facebook.com/aynatantonio.cortezmartinez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="Imagenes/Facebook.png" alt="Imagen de facebook" />
        </a>
        <a
          href="https://www.instagram.com/aynatcm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="Imagenes/instagram.png" alt="Imagen de instagram" />
        </a>
        <a
          href="https://twitter.com/aynatcm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="Imagenes/twitter.png" alt="Imagen de twitter" />
        </a>
      </div>
      <div className="Parrafo">
        <p>
          © 2020 Aynat Cortez | Diseñador Web Nicaragüense. Todos los derechos
          reservados
        </p>
      </div>
    </div>
  </footer>
);

export default AppFooter;
