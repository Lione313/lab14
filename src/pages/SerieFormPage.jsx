import HeaderComponent from "../components/Header";
import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function SerieFormPage() {
  const urlApi = "http://localhost:8000/series/api/v1/series/";
  const categoriesApi = "http://localhost:8000/series/api/v1/categories/";
  const { idserie } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    release_date: "",
    rating: 0,
  });

  const [categories, setCategories] = useState([]); // Estado para almacenar las categorías

  // Cargar datos de una serie específica para edición
  const loadSerie = async (id) => {
    try {
      const response = await axios.get(`${urlApi}${id}/`);
      const serie = response.data;
      setFormData({
        name: serie.name,
        category: serie.category,
        release_date: serie.release_date,
        rating: serie.rating,
      });
    } catch (error) {
      console.error("Error cargando la serie:", error);
      alert("Ocurrió un error al cargar los datos de la serie.");
    }
  };

  // Cargar categorías desde la API
  const loadCategories = async () => {
    try {
      const response = await axios.get(categoriesApi);
      setCategories(response.data); // Asume que la API devuelve un arreglo con las categorías [{ id, description }]
    } catch (error) {
      console.error("Error cargando las categorías:", error);
      alert("Ocurrió un error al cargar las categorías.");
    }
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (idserie) {
        await axios.put(`${urlApi}${idserie}/`, formData);
        alert("Serie actualizada con éxito.");
      } else {
        await axios.post(urlApi, formData);
        alert("Serie creada con éxito.");
      }
      navigate("/series");
    } catch (error) {
      console.error("Error al guardar la serie:", error);
      alert("Ocurrió un error al guardar la serie.");
    }
  };

  // Efecto para cargar datos si `idserie` está definido y para cargar categorías
  useEffect(() => {
    if (idserie) {
      loadSerie(idserie);
    }
    loadCategories();
  }, [idserie]);

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="border-bottom pb-3 mb-3">
          <h3>{idserie ? "Editar Serie" : "Nueva Serie"}</h3>
        </div>
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-md-4">
            {/* Usamos una imagen predeterminada en caso de no tener un campo de imagen */}
            <img
              id="fileImg"
              className="card-img-top"
              src="https://dummyimage.com/400x250/000/fff"
              alt="img"
            />
          </div>
          <div className="col-md-8">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputCategory" className="form-label">
                Categoría
              </label>
              <select
                className="form-select"
                id="inputCategory"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
              >
                <option value="">Seleccione una opción</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.description}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="inputReleaseDate" className="form-label">
                Fecha de lanzamiento
              </label>
              <input
                type="date"
                className="form-control"
                id="inputReleaseDate"
                value={formData.release_date}
                onChange={(e) =>
                  setFormData({ ...formData, release_date: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputRating" className="form-label">
                Calificación
              </label>
              <input
                type="number"
                className="form-control"
                id="inputRating"
                value={formData.rating}
                onChange={(e) =>
                  setFormData({ ...formData, rating: e.target.value })
                }
                min="0"
                max="5"
                required
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                Guardar
              </button>
            </div>
          </div>
        </form>
        <div className="mb-3">
          <NavLink className="btn btn-light" to="/series">
            Volver a la lista de Series
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SerieFormPage;
