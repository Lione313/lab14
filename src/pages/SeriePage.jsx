import HeaderComponent from "../components/Header.jsx";
import SerieComponent from "../components/SerieComponent.jsx";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { getAllSeriesService,deleteSeriesService } from "../services/SerieService.jsx";


function SeriePage() {
    const [series, setSeries] = useState([]);
    const navigate = useNavigate(); 


    const loadData = async () => {
        const resp = await getAllSeriesService();
        setSeries(resp.data);
    };

 
    useEffect(() => {
        loadData();
    }, []);
    

    

    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
                    <h3>Series</h3>
                    <div><Link className='btn btn-primary' to="/series/nuevo">Nuevo</Link></div>
                </div>
                <div className="row">
                    {series.map((serie) => (
                        <div key={serie.id} className="col-md-3 mb-3">
                            <SerieComponent
                                codigo={serie.id}
                                nombre={serie.name}
                                categoria={serie.category_description}
                                imagen={"serie.png"}
                                lista= {series}
                                actualizarLista={setSeries}
                            />
                              
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SeriePage;
