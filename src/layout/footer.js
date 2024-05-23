const Footer = () => {
    return <footer className="py-3 footer">
          <p className="text-center text-light ">© 2024 Saavedra Arroyo Sebastian Alonso, ICSI</p>
          <div className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="index.js" className="nav-link px-2 text-light">Inicio</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Nosotros</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Servicios</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Portafolios</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Contacto</a></li>
          
            <div className="text-end  social-icon">
            <li className="social-media"><a href="#" className="nav-link px-2 text-light"><i data-feather="facebook"></i></a></li>
            <li className="social-media"><a href="#"className="nav-link px-2 text-light"><i data-feather="linkedin"></i></a></li>
            <li className="social-media"><a href="#"className="nav-link px-2 text-light"><i data-feather="link"></i></a></li>
            <li className="social-media"><a href="#"className="nav-link px-2 text-light"><i data-feather="instagram"></i></a></li>
          </div>
          </div>
          

    </footer>;
}

export default Footer;