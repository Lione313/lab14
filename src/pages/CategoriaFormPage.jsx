import HeaderComponent from "../components/Header"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
function CategoriaFormPage(){

    const series = [
        {cod:1, nom:"Friends", cat:"Comedy", img:"friends.png"},
        {cod:2, nom:"Law & Order", cat:"Drama", img:"law-and-order.png"},
        {cod:3, nom:"The Big Bang Theory", cat:"Comedy", img:"the-big-bang.png"},
        {cod:4, nom:"Stranger Things", cat:"Horror", img:"stranger-things.png"},
        {cod:5, nom:"Dr. House", cat:"Drama", img:"dr-house.png"},
        {cod:6, nom:"The X-Files", cat:"Drama", img:"the-x-files.png"},
    ];

    const {idserie} =useParams();
    const setDataForm=(codigo) =>{
        for (const item of series){
            if(item.cod==codigo){
                console.log(item);
                document.getElementById("inputName").value= item.nom;
                document.getElementById("inputCategory").value= item.cat;
                document.getElementById("fileImg").src= `https://via.placeholder.com/400x250/000/fff?text=${item.img}`;
            }
        }



    }
    useEffect(()=>{
        setDataForm((idserie));
    },[]);
    
    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>Nuevo -Categorias</h3>
                </div>
                <form className="row"  >
                    <div className="col-md-4">
                        <img 
                            id="fileImg"
                            className="card-img-top" 
                            src={"https://dummyimage.com/400x250/000/fff"} 
                            alt="img" />
                    </div>
                    <div className="col-md-8">
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="inputName" required />
                        </div>
                       
                      
                        <div className="mb-3">
                            <button className="btn btn-primary">Guardar</button>
                        </div>
                        
                    </div>
                </form>
                <div className="mb-3">
                        <NavLink className="btn btn-light" to= "/series">Volver a la lista de Categorias</NavLink>   
                    </div>
            </div>
        </>
    )
}


export default CategoriaFormPage;
