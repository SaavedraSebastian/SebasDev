import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import software from './data/software.json'


const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);



const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return <main>
        <Carousel>
            {
                software.map(it => {
                    return (<Carousel.Item onClick={(e) => {
                        e.preventDefault(); handleClick(it.slug)
                    }}>
                        <img className='d-block w-100 dark-image img-slider' src={it.picture}></img>
                        <Carousel.Caption>
                            <button className="btn-brand">Conoce más</button>
                        </Carousel.Caption>
                    </Carousel.Item>);
                })
            }
        </Carousel>
    </main >;
}

export default Main;