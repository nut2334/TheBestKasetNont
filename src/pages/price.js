// https://dataapi.moc.go.th/gis-products?keyword=ทุเรียน&sell_type=retail
import React from 'react'
import axios from 'axios';
import { useEffect, useState,useRef } from 'react';

const Price = () => {
    const inputRef = useRef();
    const [keyword, setKeyword] = useState(null);
    const [responses, setResponse] = useState([]);
    const [min, setMin] = useState([]);
    const [max, setMax] = useState([]);
    const [name, setName] = useState([]);
    const [unit, setUnit] = useState([]);

    function handleChange() {
        setKeyword(inputRef.current.value);
    }
      useEffect(() => {
        const apiUrl = `https://dataapi.moc.go.th/gis-products?keyword=${keyword}&sell_type=retail`;
            axios.get(apiUrl)
            .then(response => {
                setResponse(response.data.map((data) => data.product_id));
            })
            .catch(error => {
                console.error('เกิดข้อผิดพลาดในการเรียก API:', error);
            });
            setMin([]);
            setMax([]);
            setName([]);
            setUnit([]);
        },[keyword]);

        useEffect(() => {
            responses.map((id) => {
            const apiUrl2 = `https://dataapi.moc.go.th/gis-product-prices?product_id=${id}&from_date=2023-11-10&to_date=2023-11-10`;
            axios.get(apiUrl2)
            .then(response => {
                setMin(prevData => [...prevData, response.data.price_min_avg]);
                setMax(prevData => [...prevData, response.data.price_max_avg]);
                setName(prevData => [...prevData, response.data.product_name]);
                setUnit(prevData => [...prevData, response.data.unit]);
            })
        });
        }, [responses]);

  return (
    <div>
        ค้นหา <input ref={inputRef}/>
        <button onClick={handleChange}>ค้นหา</button>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
        <h1>Price Min Avg</h1>
        <ul>
            {min.map((price, index) => (
                <li key={index}>{name[index]}{price}{unit[index]}</li>
            ))}
        </ul></div>
        <div style={{ flex: 1 }}>
        <h1>Price Max Avg</h1>
        <ul>
        {max.map((price, index) => (
                <li key={index}>{name[index]}{price}{unit[index]}</li>
            ))}
        </ul></div>
        </div>
    </div>
  )
}

export default Price