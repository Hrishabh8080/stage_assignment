import axios from 'axios';


const ROOT_URL = "https://dev-api.stage.in/"

export const getAllData = async () => {
    try {
        const response = await axios.get(`${ROOT_URL}v23/assignment/carousel-data`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};

export const getRowData = async () => {
    try {
        const response = await axios.get(`${ROOT_URL}v23/assignment/row-data`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};