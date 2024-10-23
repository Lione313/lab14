import HeaderComponent from "../components/Header";

import { NavLink } from "react-router-dom";
import  {useNavigate} from "react-router-dom";

function CategoryPage() {
    const categories =[
    { cod:1, nom:"Horror"} ,
    { cod:2, nom:"Comedia"} ,
    { cod:3, nom:"Accion"} ,
    { cod:4, nom:"Drama"}  ,
    ];


    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>Categorías</h3>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th className="text-center">Id</th>
                            <th className="text-center" style={{width: "100px"}}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((item)=>(
                            <tr key={item.cod}>
                                <td>{item.nom}</td>
                                <td className="text-center">{item.cod}</td>
                                <td className="text-center">
                                    <button className="btn btn-secondary me-2 btn-sm">
                                       <NavLink className="nav-link"  to="/categorias/edit/:idcategorias"> <i className="bi bi-pencil-square"></i></NavLink> 
                                    </button> 
                                    <button className="btn btn-danger btn-sm">
                                        <i className="bi bi-trash-fill"></i>
                                    </button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
      )
}


export default CategoryPage;
