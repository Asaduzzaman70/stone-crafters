import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllArtAndCraftItems = ({ artItems }) => {
    // Function to render slider section
    const sliderSection = (title, description, url, _id, rating, stokeStatus) => (
        <div className="shadow-2xl rounded-sm bg-opacity-75">
            <figure className='h-96'><div className="inset-0 bg-no-repeat bg-center bg-cover h-full w-full" style={{ backgroundImage: `url(${url})` }}></div></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-semibold">{title.slice(0, 20)} . . .</h2>
                <p>{description.slice(0, 100)} ....</p>
                <p className='flex items-center space-x-3 text-2xl font-light'>
                    <span className='inline-block'>{rating}</span>
                    <span className='text-amber-500'><FaStar /></span>
                </p>
                <p className='text-xl font-bold'>Stoke : {stokeStatus}</p>
                <div className="card-actions">
                    <Link to={`/addCraftItem/${_id}`}>
                        <button className="btn">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <div className='pt-10'>
            <h1 className='text-center text-3xl font-bold underline mb-7'>All Art & Craft Section</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative container mx-auto z-10 p-7'>
                {artItems.map(oneData => (
                    <div key={oneData._id}>
                        {sliderSection(oneData.item_name, oneData.description, oneData.photo, oneData._id, oneData.rating, oneData.stokeStatus)}
                    </div>
                ))}
            </div>
        </div>
    );

};

export default AllArtAndCraftItems;
