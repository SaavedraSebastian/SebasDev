const Aside = () => {
    return <aside>
    <form className="row g-3 contact">
        <h1 className="text-center mt-3">Registrate</h1>
        <div className="col-md-12">
          <label for="inputnombre" className="form-label">
          <i data-feather="user"></i> Nombre y Apellido</label>
          
          <input type="text" className="form-control" id="nombre"  placeholder="Nombre y Apellido"></input>
        </div>
        <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
            <i data-feather="smartphone"></i> Telefono</label>
            <input type="tel" className="form-control" id="telefono" placeholder="Telefono"></input>
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
            <i data-feather="home"></i> Cuidad</label>
            <input type="text" className="form-control" id="cuidad" placeholder="Tu cuidad"></input>
          </div>
        <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
            <i data-feather="mail"></i> Email</label>
            <input type="email" className="form-control" id="email" placeholder="Email"></input>
          </div>
          
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
          <i data-feather="key"></i> Password</label>
          <input type="password" className="form-control" id="inputPassword4" placeholder="password"></input>
        </div>
        
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"></input>
            <label className="form-check-label" for="gridCheck">
              Aceptar los terminos y condiciones
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn-conoce">Sign in</button>
        </div>
      </form>
       
    </aside>;
}

export default Aside;