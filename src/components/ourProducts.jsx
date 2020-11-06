import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/ourProducts.css";

const OurProducts = () => (
  <section id="NuestrosProductos">
    <h3>Nuestros productos</h3>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="./Imagenes/Frijo1.jpeg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src="./Imagenes/Frijo2.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src="./Imagenes/Frijo3.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src="./Imagenes/Frijo4.jpeg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src="./Imagenes/Frijo5.jpeg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src="./Imagenes/Frijo6.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  </section>
);

export default OurProducts;
