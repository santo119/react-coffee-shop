
import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading/Heading';
import { getAllFavorites } from '../utilities';
import Card from '../components/Card/Card';


const DashBoard = () => {
    
    const [coffees, setCoffee] = useState([])
    useEffect(() => {
        const favorites = getAllFavorites()
        setCoffee(favorites)
    },[])

    return (
        <div>
           <Heading></Heading>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
            coffees.map((coffee) => <Card
            key={coffee.id}
            coffee={coffee}
            ></Card>)
           }
        </div>
        </div>
    );
};

export default DashBoard;