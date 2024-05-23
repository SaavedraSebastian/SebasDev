
import './Message.css'; 


const Message = () => {
  return (
    <message>
      <div className='mt-5 intro'>
      <span className="pre-title">Sobre Nosotros</span>
      <div className="progress-bar-1 fondo-1"></div>
        <h1 className='titulo-descripcion mb-3 text-start'>Transforma tu futuro con<br></br> Nosotros</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9'>
          <p className='description-informacion'>En SystemandSoftware, nos dedicamos a forjar el camino en la revolución digital, ofreciendo soluciones tecnológicas que anticipan las necesidades del futuro y potencian el crecimiento de nuestros clientes en un mundo cada vez más conectado.</p>
 
        </div>
        </div>
        </div>
        <div class='container'>
  <div class='row'>
    <div class='col-md-12 d-flex justify-content-between'>
      <div class='col-md-4 d-flex align-items-center'>
        <div className='icon'>
        <i data-feather="shield"></i></div>
        <span class="ml-2 info-titulo">Ciberseguridad</span>
      </div>
      <div class='col-md-4 d-flex align-items-center'>
      <div className='icon'>
        <i data-feather="cloud"></i></div>
        <span class="ml-2 info-titulo">Computación en la Nube</span>
      </div>
      <div class='col-md-4 d-flex align-items-center'>
      <div className='icon'>
        <i data-feather="code"></i></div>
        <span class="ml-2 info-titulo">Desarrollo de Software</span>
      </div>
    </div>
    <div class='col-md-12 d-flex justify-content-between mt-3'>
      <div class='col-md-4 d-flex align-items-center'>
      <div className='icon'>
        <i data-feather="cpu"></i></div>
        <span class="ml-2 info-titulo">Inteligencia Artificial</span>
      </div>
      <div class='col-md-4 d-flex align-items-center'>
      <div className='icon'>
        <i data-feather="bar-chart-2"></i></div>
        <span class="ml-2 info-titulo">Big Data y Análisis de Datos</span>
      </div>
      <div class='col-md-4 d-flex align-items-center'>
      <div className='icon'>
        <i data-feather="smartphone"></i></div>
        <span class="ml-2 info-titulo">Desarrollo de Aplicaciones Móviles</span>
      </div>
    </div>
  </div>
  
</div>
    </message>
  );
}

export default Message;
