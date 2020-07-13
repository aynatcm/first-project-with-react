import React from "react";
import "../styles/contact.css";

const Contact = () => (
  <section id="Contacto">
    <div className="Contenedor">
      <h3>Contacto</h3>
      <form method="POST">
        <input type="text" placeholder="Nombre" name="nombre" required="" />
        <input type="email" placeholder="E-Mail" name="email" required="" />
        <textarea placeholder="Mensaje" name="mensaje" required=""></textarea>
        <input type="submit" value="ENVIAR" required="" />
      </form>
      <div className="ContactoInfo">
        <div className="Mail">
          <img src="Imagenes/mail-icon.png" alt="icono de correo" />
          aynatcm@gmail.com
        </div>
        <div className="Whatsapp">
          <img src="Imagenes/whatsapp-icon.png" alt="icono de whatsapp" />
          (+505) 85118328
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
