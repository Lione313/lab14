import axios from 'axios';


const PREFIX_URL= 'http://localhost:8000/series/api/v1/series/';

export const getAllSeriesService = async () =>{
    const response = await axios.get(PREFIX_URL);
    return response;
};

export const createSeriesService = async (datos) =>{
    const response = await axios.post(PREFIX_URL, datos);
    return response;
};

export  const showSeriesService = async (id) =>{
    const response = await axios.get(`${PREFIX_URL}${id}/`);

    return response;
};

export const updateSeriesService = async (id,datos) =>{
    const response = await axios.put(`${PREFIX_URL}${id}/`, datos);
    return response;
}

export const deleteSeriesService = async (id) =>{
    const response = await axios.delete(`${PREFIX_URL}${id}/`);
    return response;
}