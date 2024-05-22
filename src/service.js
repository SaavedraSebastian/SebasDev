import Card from 'react-bootstrap/Card';
const Service = () => {
    return (
      <service>
        <div className="container">
            <div className='row'>
                <h1 className="text-start mt-5 mb-5 titulo-servicios">Nuestros Servicios</h1>
                
                <div className='col-md-3'>
                <Card className='card-diseño img-1'>
      <Card.Body>
        <div className='text-center descrpiccion-service color-text'>
       Desarrollo web personalizado</div>
      </Card.Body>
    </Card>
                </div>
                <div className='col-md-3'>
                <Card className='card-diseño img-2'>
      <Card.Body>
      <div className='text-center descrpiccion-service'>
       Desarrollo de software</div>
      </Card.Body>
    </Card>
                </div>
                <div className='col-md-3'>
                <Card className='card-diseño img-3'>
      <Card.Body>
      <div className='text-center descrpiccion-service'>
       E-commerce</div>
      </Card.Body>
    </Card>
                </div>
                <div className='col-md-3'>
                <Card className='card-diseño img-4'>
      <Card.Body>
      <div className='text-center descrpiccion-service'>
       E-learning</div>
      </Card.Body>
    </Card>
                </div>
                <div className='col-md-3'>
                <Card className='card-diseño img-5'>
      <Card.Body>
      <div className='text-center descrpiccion-service'>
      Consultoria y Auditoria</div>
      </Card.Body>
    </Card>
                </div>
                <div className='col-md-3'>
                <Card className='card-diseño img-6'>
      <Card.Body>
      <div className='text-center descrpiccion-service'>
       Machine Learning</div>
      </Card.Body>
    </Card>
                </div>
                <div className='col-md-3'>
                <Card className='card-diseño img-7'>
      <Card.Body>
      <div className='text-center descrpiccion-service'>
       Data Center</div>
      </Card.Body>
    </Card>
                </div>
                <div className='col-md-3'>
                <Card className='card-diseño img-8'>
      <Card.Body>
      <div className='text-center descrpiccion-service'>
       Desarrollo web personalizado</div>
      </Card.Body>
    </Card>
                </div>
                </div>


        </div>

      </service>
        );
    }
    
    export default Service;