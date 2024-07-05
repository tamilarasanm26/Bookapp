import React, { useEffect, useState } from 'react';
import axios from 'axios';
const FetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div>
            <h1>Fetched Data</h1>
            <ul>
                {data.map((item, index) => (
                    <li >{item.title}{item.price}{item.description}{item.image}</li> // Adjust according to the data structure
                ))}
            </ul>
        </div>
    );
};
export default FetchData;
