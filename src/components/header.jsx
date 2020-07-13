import React, { Component } from "react";
import "../styles/header.css";
import $ from "jquery";

class Header extends Component {
  constructor(props) {
    super(props);
    this.Menu = this.Menu.bind(this);
  }

  Menu() {
    $(this.refs["test"]).slideToggle();
  }

  render() {
    return (
      <>
        <header>
          <div className="Menu">
            <div className="Contenedor">
              <p className="Logo">
                <a href="index.html"> Frijoles Doña Carmen</a>
              </p>
              <img
                onClick={this.Menu}
                className="Menu-Icon"
                src="Imagenes/menu.png"
                alt="Imagen de una barra de menu"
              />
              <nav ref="test">
                <ul>
                  <li>
                    <a href="#Sobre-Nosotros">Sobre nosotros</a>
                  </li>
                  <li>
                    <a href="#Servicio">Servicios</a>
                  </li>
                  <li>
                    <a href="#NuestrosProductos">Nuestros productos</a>
                  </li>
                  <li>
                    <a href="#PorqueTrabajar">¿Porque trabajar con nosotros?</a>
                  </li>
                  <li>
                    <a href="#Contacto">Contactanos</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="Contenedor" id="Contenedor-Flex">
            <div className="Contenedor-Titulo">
              <h1>Frijoles Doña Carmen</h1>
              <h2>Compra & venta de Frijoles</h2>
              <a href="#Sobre-Nosotros">Sobre Nosotros</a>
            </div>
          </div>
        </header>
      </>
    );
  }
}

// const Header = () => (
//   <>
//     <header>
//       <div className="Menu">
//         <div className="Contenedor">
//           <p className="Logo">
//             <a href="index.html"> Frijoles Doña Carmen</a>
//           </p>
//           <img
//             className="Menu-Icon"
//             src="Imagenes/menu.png"
//             alt="Imagen de una barra de menu"
//           />
//           <nav id="test">
//             <ul>
//               <li>
//                 <a href="#Sobre-Nosotros">Sobre nosotros</a>
//               </li>
//               <li>
//                 <a href="#Servicio">Servicios</a>
//               </li>
//               <li>
//                 <a href="#NuestrosProductos">Nuestros productos</a>
//               </li>
//               <li>
//                 <a href="#PorqueTrabajar">¿Porque trabajar con nosotros?</a>
//               </li>
//               <li>
//                 <a href="#Contacto">Contactanos</a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>

//       <div className="Contenedor" id="Contenedor-Flex">
//         <div className="Contenedor-Titulo">
//           <h1>Frijoles Doña Carmen</h1>
//           <h2>Compra & venta de Frijoles</h2>
//           <a href="#Sobre-Nosotros">Sobre Nosotros</a>
//         </div>
//       </div>
//     </header>
//   </>
// );

export default Header;
