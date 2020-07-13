import React from "react";
import "../styles/blog.css";

const Blog = () => (
  <section id="Blog">
    <div className="Contenedor">
      <h3>Blog</h3>
      <div className="ContenedorPubli">
        <div className="Publicacion">
          <img src="Imagenes/Socio.png" alt="" />
          <div className="ContenidoPubli">
            <h4>¿Quieres convertirte en un socio?</h4>
            <p>
              ¿Quieres dejar de ser un comprador mas y convertirte en un
              proveedor? No esperes mas y enterate como puedes ser nuestro
              socio!.
            </p>
            <a href="index.html">Leer mas →</a>
          </div>
        </div>

        <div className="Publicacion">
          <img src="Imagenes/Reventa.png" alt="" />
          <div className="ContenidoPubli">
            <h4>¿Que es la reventa y como utilizarla?</h4>
            <p>
              La reventa es una de las tecnicas mas utilizadas por las mejores
              compañias ¿Quieres saber de que se trata?.
            </p>
            <a href="index.html">Leer mas →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Blog;
