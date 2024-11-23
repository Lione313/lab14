import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from 'react';  // Asegúrate de importar useContext
import { AppContext } from '../contents/AppContext';  // Asegúrate de importar el contexto
 // Aquí es donde se importa useContext

function HeaderComponent() {

    const {usuario, logout} =useContext(AppContext);
    const navigate =useNavigate();
    

    const handleLogout = () =>{
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">React-Django</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to = "/"> Login  </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categorias">Categorias</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/series">Series</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/inicio ">Inicio</NavLink>
                        </li>
                    </ul>
                    <div>
                        <div>Bienvenido {usuario}</div>
                        <div className="text-end">
                           <button onClick={handleLogout} className="btn btn-link" >Salir</button>
                        </div> 
                    </div>
                </div>
            </div>
        </nav>
    )
}
  
export default HeaderComponent
