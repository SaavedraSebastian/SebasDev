import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const closeMenu = () => {
        document.getElementById("active").checked = false;
    };
    return (
        <section
          id="hero"
          className="d-flex align-items-center justify-content-start text-left"
          style={{
            height: "100vh",
            padding: 0,
            position: "relative",
            background: "linear-gradient(135deg, #10151f 0%, #58a6ff 100%)",
            color: "white",
          }}
        >
          {/* Contenedor de partículas */}
          <div
            id="particles-js"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          ></div>
    
          {/* Capa con un sutil gradiente de overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
            }}
          ></div>
    
          <div
            className="container"
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              color: "white",
              textShadow: "2px 2px 15px rgba(0, 0, 0, 0.5)",
            }}
          >
            <h1
              className="font-weight-bold"
              style={{
                fontSize: "4rem",
                lineHeight: 1.1,
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "2px",
                marginBottom: "20px",
                animation: "fadeInUp 1s ease-out",
              }}
            >
              Hola, <br /> Soy Sebastián <br />
              <span style={{ fontSize: "4.0rem", color: "#58a6ff" }}>
                Saavedra Arroyo
              </span>
            </h1>
    
            <h2
              className="font-weight-light"
              style={{
                fontSize: "1.2rem",
                color: "rgba(255, 255, 255, 0.8)",
                fontFamily: "'Roboto', sans-serif",
                letterSpacing: "1px",
                animation: "fadeInUp 2s ease-out",
              }}
            >
              <span id="coding-text" style={{ fontSize: "1.5rem" }}></span>
            </h2>
          </div>
    
          {/* Indicador para hacer scroll */}
          <div
            className="scroll-downs"
            style={{
              position: "absolute",
              bottom: "70px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
            }}
          >
            <a href="#about">
              <div className="mousey">
                <div className="scroller"></div>
              </div>
            </a>
          </div>
    
          {/* Input que controla el estado del menú */}
          <input type="checkbox" id="active" style={{ display: "none" }} />
    
          <label htmlFor="active" className="menu-btn">
            <span></span>
          </label>
    
          {/* Menú desplegable */}
          <div className="wrapper">
            <ul>
              <li>
                <a href="#hero" onClick={closeMenu}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeMenu}>
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#skills" onClick={closeMenu}>
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#project" onClick={closeMenu}>
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  Contacto
                </a>
              </li>
            </ul>
    
            {/* Botón de cierre */}
            <label htmlFor="active" className="close-btn">✕</label>
          </div>
    
          {/* Menú horizontal de redes sociales */}
          <div className="social-sidebar">
            <a
              href="https://www.linkedin.com/in/sebasti%C3%A1n-alonso-saavedra-arroyo-7b6905321/"
              target="_blank"
              className="social-link linkedin"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/alonso_sa19/"
              target="_blank"
              className="social-link instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://github.com/SaavedraSebastian"
              target="_blank"
              className="social-link github"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </section>
      );
    };
    

export default Header;