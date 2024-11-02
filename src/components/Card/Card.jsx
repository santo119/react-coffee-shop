
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoTrashOutline } from "react-icons/io5"

const Card = ({coffee}) => {
    const {pathname} = useLocation()
    const {name,image,category,origin,type, id, rating, popularity} = coffee || {}

    return (
        <div className='flex relative mt-9 mb-6'>
        <Link to={`/coffee/${id}`}
        className='transition hover:scale-105 shadow-xl rounded-xl overflow-hidden'
        >
            <figure className='w-full h-48 overflow-hidden'>
                <img src={image} alt="" />
            </figure>
            <div className='p-4'>
                <h1 className='text-xl'>Name: {name}</h1>
                <p>Category: {category}</p>
                <p>Type: {type}</p>
                <p>Origin:{origin}</p>
                <p>Rating: {rating}</p>
                <p>Popular: {popularity}</p>
            </div>

        </Link>

        {
            pathname === '/dashBoard' 
            && <p  className='absolute -top-5 -right-5'><IoTrashOutline /></p>
           
        }
        
    </div>
    );
};

export default Card;