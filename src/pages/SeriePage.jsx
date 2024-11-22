import HeaderComponent from "../components/Header.jsx"
import SerieComponent from "../components/SerieComponent.jsx"
import { useState,useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

function SeriePage(){
    
    const urlApi='http://localhost:8000/series/api/v1/series/';
    const [series, setSeries]=useState( []);

    const loadData=async()=>{
        const resp= await axios.get(urlApi);
        console.log (resp.data);
        setSeries(resp.data);
    }

    useEffect(()=>{
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
                    {series.map((serie)=>(
                    <div key={serie.id} className="col-md-3 mb-3">
                        <SerieComponent
                        	codigo={serie.id}
                        	nombre={serie.name}
                        	categoria={serie.release_date}
                        	imagen={serie.rating}
                                                         
                        />
                    </div>
                    ))}
                </div>
            </div>
        </>
      )
}


export default SeriePage
