import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import HeaderComponent from "../../components/Header";
import { showCategoryService, updateCategoryService } from "../../services/CategoryService";

const initData = {
    id: '',
    description: '',
};

function CategoriaEditFormPage() {
    const navigate = useNavigate();
    const { id } = useParams();  // Obtener el ID de la categoría desde la URL
    const [data, setData] = useState(initData);  // Estado para almacenar la categoría a editar

    // Función para cargar los datos de la categoría que se quiere editar
    const setDataForm = async () => {
        try {
            const resp = await showCategoryService(id);  // Llamar al servicio para obtener los detalles de la categoría
            if (resp.data) {
                setData(resp.data);  // Establecer la categoría en el estado
            } else {
                console.error('No se encontró la categoría');
            }
        } catch (error) {
            console.error('Error al cargar la categoría:', error);
        }
    };

    // Llamamos a la función para cargar la categoría cuando se monta el componente
    useEffect(() => {
        setDataForm();
    }, [id]); // El efecto se ejecuta cada vez que cambia el ID de la categoría

    // Manejo de cambio en el campo de descripción
    const onChangeDescription = (e) => {
        const nData = { ...data, description: e.target.value };
        setData(nData);
    };

    // Manejo del envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateCategoryService(data.id, data);  // Enviar la categoría actualizada al servidor
            console.log('Categoría actualizada', data);
            navigate('/categorias');  // Redirigir a la lista de categorías después de la actualización
        } catch (error) {
            console.error('Error al actualizar la categoría:', error);
        }
    };

    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>Actualizar - Categoría</h3>
                </div>
                <form onSubmit={handleSubmit} className="row">
                    <div className="col-md-8">
                        <div className="mb-3">
                            <label htmlFor="inputDescription" className="form-label">Descripción</label>
                            <input
                                type="text"
                                onChange={onChangeDescription}
                                className="form-control"
                                id="inputDescription"
                                value={data.description || ''}  // Asegurarse de que el valor no sea undefined
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary me-2">Actualizar Categoría</button>
                            <Link className="btn btn-secondary" to="/categorias">Cancelar</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CategoriaEditFormPage;
