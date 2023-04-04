import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SplitPhone = () => {
    const [phone, setPhone] = useState([]);
    useEffect(() => {
        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
            .then(data => {
                const loadData = data.data.data;
                const phonesData = loadData.map(phone => {
                    const parts = phone.slug.split('-')
                    const price = parseInt(parts[1]);
                    const phoneInfo={
                        name:phone.phone_name,
                        price:price
                    }
                    return phoneInfo;
                })
                console.log(phonesData)
                setPhone(phonesData);
            })
    }, [])
    return (
        <div>
           <BarChart width={1000} height={500} data={phone}>
            <Bar dataKey="price" fill="#8884d8"></Bar>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
           </BarChart>

        </div>
    );
};

export default SplitPhone;