
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from '../Card/Card';

const CoffeeCards = () => {
    const navigate = useNavigate()
    const {category} = useParams()
    const data = useLoaderData()
    const [coffees, setCoffees] = useState([])

    useEffect(() => {
       if(category){
        const filterByCategory = [...data].filter(coffee => coffee.category === category)
        setCoffees(filterByCategory)

       }else{
        setCoffees(data.slice(0, 6))
       }
    },[category, data])

    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
            coffees.map((coffee) => <Card
            key={coffee.id}
            coffee={coffee}
            ></Card>)
           }
        </div>
        <button className='btn btn-warning' onClick={()=> navigate('/coffee')}>View All</button>
        </>
    );
};

export default CoffeeCards;