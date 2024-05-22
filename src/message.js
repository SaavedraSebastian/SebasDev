import { Card } from 'react-bootstrap';
import './Message.css'; 


const Message = () => {
  return (
    <message>
      <div className='mt-5 intro'>
        <h1 className='titulo-descripcion mb-5'>SystemandSoftware</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <Card>
              <Card.Body>
                <div className='text-center icon'>
                  <i className='feather-icon' data-feather='eye'></i>
                </div>
                <Card.Title className='text-center'>Visión</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card>
              <Card.Body>
                <div className='text-center icon'>
                  <i className='feather-icon' data-feather='heart'></i>
                </div>
                <Card.Title className='text-center'>Misión</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card>
              <Card.Body>
                <div className='text-center icon'>
                  <i className='feather-icon' data-feather='clipboard'></i>
                </div>
                <Card.Title className='text-center'>Valores</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <p className='vision-description'>En SystemandSoftware, nuestra visión es liderar la transformación digital y la excelencia tecnológica mediante el diseño innovador de sistemas y el desarrollo de software de calidad, siendo el socio estratégico preferido para soluciones tecnológicas avanzadas.</p>
          <p className='vision-description'>En SystemandSoftware, nuestra misión es impulsar el éxito y la competitividad de nuestros clientes en el mundo digital. Nos comprometemos a proporcionar soluciones tecnológicas innovadoras que satisfagan sus necesidades, mejorando la eficiencia, optimizando procesos y generando valor agregado.</p>
          <p className='vision-description'>Innovación Calidad Excelencia Compromiso Crecimiento Sostenibilidad Colaboración Integridad Responsabilidad</p>
        </div>
      </div>
    </message>
  );
}

export default Message;
