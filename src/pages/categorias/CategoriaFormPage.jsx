import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCategoryService } from "../../services/CategoryService";  // Asegúrate de importar la función
import HeaderComponent from "../../components/Header"

const initData = {
    id: '',
    description: '',
}

function CategoryFormPage(){
    
    const navigate = useNavigate();
    const [data, setData] = useState(initData);

    const onChangeNombre = (e) => {
        const nData = {...data, description: e.target.value};
        setData(nData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Utilizamos la función createCategoryService para crear la nueva categoría
            await createCategoryService(data);
            console.log("Categoría creada exitosamente");
            navigate("/categorias");  // Redirige a la lista de categorías
        } catch (error) {
            console.error("Error al crear la categoría:", error);
        }
    };

    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>Nueva - Categoría</h3>
                </div>
                <form onSubmit={handleSubmit} className="row">
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Nombre</label>
                        <input 
                            type="text" 
                            onChange={onChangeNombre} 
                            className="form-control" 
                            required 
                            value={data.description} 
                        />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CategoryFormPage;
