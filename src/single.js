import Software from './data/software.json';

const Single = () => {

    const currentRoute = window.location.pathname;
    const software = Software.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{software.name}</h1>
        <hr></hr>
        <img src={software.picture}></img>
        <p>{software.description}</p>
    </>);
}

export default Single;