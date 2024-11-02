
import React from 'react';
import Banner from '../components/Banner/Banner';
import Heading from '../components/Heading/Heading';
import Categories from '../components/Categories/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {

    const categories = useLoaderData()
   
    return (
        <div>
           {/* banner */}
           {/* ai khane heading components ta holo reusable components */}
            <div className='hidden'>
            <Heading title='Welcome to Dashboard' subtitle='Manage coffees that you 
            have previously added as 
            favorite. You can view or remove them from here'></Heading>
            </div>
           <Banner></Banner>
           <Heading title='Browse Coffees by Category' subtitle='Choose your desired coffee category to
             browse through specific coffees that fit in your taste.'></Heading>
             {/* category section */}

            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;