import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import ViewDetails from '../Pages/ViewDetails/ViewDetails';
import { useLoaderData } from 'react-router-dom';

const ViewDetailsPage = () => {
    const artItem = useLoaderData()
    return (
        <div>
            <Navbar/>
            <ViewDetails key={artItem._id} artItem={artItem}></ViewDetails>
        </div>
    );
};

export default ViewDetailsPage;