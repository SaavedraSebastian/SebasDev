import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import liga from './data/liga.json'

const Liga = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }
    return (
      <liga>
        <div className="container">
            <div className="row">
                <h1 className="reconocimientos text-center mt-5">Reconocimientos</h1>
            </div>
            <Carousel>
            {
                liga.map(it => {
                    return (<Carousel.Item onClick={(e) => {
                        e.preventDefault(); handleClick(it.slug)
                    }}>
                        <img className='d-block w-100 dark-image img-liga' src={it.picture}></img>
                        <Carousel.Caption>
                            <button className="btn-brand-1">Conoce más</button>
                        </Carousel.Caption>
                    </Carousel.Item>);
                    
                })
            }
            
        </Carousel>
        </div>
            
      

      </liga>
       );
}
export default Liga; 