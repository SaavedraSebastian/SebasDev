const Footer = () => {
    return <footer className="py-3 my-4 footer">
          <p className="text-center text-black ">© 2024 Saavedra Arroyo Sebastian Alonso, ICSI</p>
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="index.js" className="nav-link px-2 text-black">Inicio</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-black">Nosotros</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-black">Servicios</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-black">Portafolios</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-black">Contacto</a></li>
            </ul>
            <ul className="text-end  social-icon">
            <li className="social-media"><a href="#" className="nav-link px-2 text-black"><i data-feather="facebook"></i></a></li>
            <li className="social-media"><a href="#"className="nav-link px-2 text-black"><i data-feather="linkedin"></i></a></li>
            <li className="social-media"><a href="#"className="nav-link px-2 text-black"><i data-feather="link"></i></a></li>
            <li className="social-media"><a href="#"className="nav-link px-2 text-black"><i data-feather="instagram"></i></a></li>
          </ul>
          

    </footer>;
}

export default Footer;