import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import MyArtAndCraftList from '../Pages/MyArtAndCraftList/MyArtAndCraftList';
import { useLoaderData } from 'react-router-dom';

const MyArtAndCraftListPage = () => {
    const loaderArtAndCraftItems = useLoaderData();
    return (
        <div>
            <Navbar/>
            <MyArtAndCraftList key={loaderArtAndCraftItems._id} loaderArtAndCraftItems={loaderArtAndCraftItems}></MyArtAndCraftList>
        </div>
    );
};

export default MyArtAndCraftListPage;