import { useNavigate } from "react-router-dom";
import { deleteSeriesService } from "../services/SerieService";

function SerieComponent(props) {
   const navigate = useNavigate();

   const gotoUrl = (codigo) => {
         navigate("/series/editar/" + codigo);
   };

   const handlDelete = async (codigo) => {
      if (window.confirm("¿Está seguro de eliminar este registro?")) {
         try {
            await deleteSeriesService(codigo);  // Eliminar serie
            const nLista = props.lista.filter(item => item.id !== codigo);
            props.actualizLista(nLista);
            navigate(0);  // Redirigir a la misma página (forzar recarga de la página)
         } catch (error) {
            console.error("Error al eliminar la serie:", error);
         }
      }
   };

   return (
      <div className="card">
         <img 
            className="card-img-top" 
            src={"https://dummyimage.com/400x250/000/fff&text=" + props.imagen} 
            alt="img" 
         />
         <div className="card-body">
            <h5 className="card-title">{props.nombre}</h5>
            <p className="card-text">{props.categoria}</p>
            <div className="d-flex justify-content-between">
               <button onClick={() => gotoUrl(props.codigo)} className="btn btn-secondary">Editar</button> 
               <button onClick={() => handlDelete(props.codigo)} className="btn btn-danger">Eliminar</button>
            </div>
         </div>
      </div>
   );
}

export default SerieComponent;
