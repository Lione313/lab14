import HeaderComponent from "../components/Header";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { getAllCategoryService } from "../services/CategoryService";

function CategoryPage() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const urlApi = 'http://localhost:8000/series/api/v1/categories/'; // Asegúrate de definir la URL correctamente
    
    const loadData = async () => {
        const resp = await getAllCategoryService();
        setCategories(resp.data);
    };

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro que quieres borrarlo?')) {
            await axios.delete(`${urlApi}${id}/`);
            const nLista = categories.filter(item => item.id !== id);
            setCategories(nLista);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>Categorías</h3>
                    <div>
                        <Link className="btn btn-primary" to="/categorias/nuevo">Nuevo</Link>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th className="text-center">Id</th>
                            <th className="text-center" style={{ width: "100px" }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((item) => (
                            <tr key={item.id}>
                                <td>{item.description}</td>
                                <td className="text-center">{item.id}</td>
                                <td className="text-center">
                                    <button className="btn btn-secondary me-2 btn-sm">
                                        <NavLink 
                                            className="nav-link" 
                                            to={`/categorias/editar/${item.id}`}  // Usamos `item.id` aquí para que redirija a la categoría correcta
                                        >
                                            <i className="bi bi-pencil-square"></i>
                                        </NavLink> 
                                    </button>
                                    <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm">
                                        <i className="bi bi-trash-fill"></i>
                                    </button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CategoryPage;

