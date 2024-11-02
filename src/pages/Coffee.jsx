
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card/Card';


const Coffee = () => {
    const data = useLoaderData()
    const [coffees, setCoffees] = useState(data)
    const handleSort =(sortBy) =>{
        if(sortBy === 'popularity'){
            // sort by popularity
            const sorted = [...data].sort((a, b) => b.popularity -a.popularity)
            setCoffees(sorted)

        }else if(sortBy === 'rating'){
            // sort by asc ratings
            const sorted = [...data].sort((a, b) => a.rating - b.rating)
            setCoffees(sorted)

        }
    }
    return (
        <>

        <div className='flex justify-between items-center my-12'>
            <div>
                <h1 className='text-3xl font-thin'>
                Coffee Sorting by Popularity And Ratings
                </h1>
            </div>
            <div className='space-x-4'>
                <button onClick={() => handleSort('popularity')} className='btn btn-warning'>Sort By Popularity</button>
                <button onClick={() => handleSort('rating')} className='btn btn-warning'>Sort By Ratings</button>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
            coffees.map((coffee) => <Card
            key={coffee.id}
            coffee={coffee}
            ></Card>)
           }
        </div>

        </>
    );
};

export default Coffee;