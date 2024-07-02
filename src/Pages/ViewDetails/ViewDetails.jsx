import React from 'react';
import { FaStar } from 'react-icons/fa';

const ViewDetails = ({ artItem }) => {
    const { item_name, subcategory_Name, description, price, rating, processing_time, customization, stokeStatus, photo, name, emailAndGitUid } = artItem;

    return (
        <div className="shadow-xl p-10 bg-no-repeat bg-cover relative z-0">
            <div className="absolute inset-0 bg-no-repeat bg-cover blur-md" style={{ backgroundImage: `url(${photo})` }}></div>
            <div className='container mx-auto grid grid-cols-1  h-full z-10 relative'>
                <div className="bg-no-repeat bg-cover w-full h-96 md:w-[600px] md:h-[600px] rounded-md shadow-2xl border-8 border-[#000000a6] border-double" style={{ backgroundImage: `url(${photo})` }}>
                    {/* <!-- Placeholder --> */}
                </div>
                <div className="mx-auto w-full shadow-lg rounded-lg overflow-hidden bg-[#000000]  bg-opacity-50">
                    <div className="p-6">
                        <h1 className="text-4xl font-extralight text-white mb-2">{item_name}</h1>
                        <p className="text-gray-200 mb-2">Author: {name}</p>
                        <p className="text-xl font-bold text-white mb-4">{subcategory_Name}</p>
                        <p className="text-lg font-light text-gray-300 leading-relaxed mb-4">{description}</p>
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-lg font-semibold text-white">Price: {price} $</p>
                            <p className="text-lg font-semibold text-white flex items-center">Rating: {rating} <FaStar className='ml-1 text-orange-400'/></p>
                        </div>
                        <div className="border-b border-gray-300 mb-4"></div>
                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <p className="text-lg font-semibold text-white mr-2">Customization:</p>
                                <span className="text-gray-300">{customization}</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <p className="text-lg font-semibold text-white mr-2">Stock Status:</p>
                                <span className="text-gray-300">{stokeStatus}</span>
                            </div>
                            <p className="text-lg font-semibold text-white">Processing Time: {processing_time}</p>
                        </div>
                        <button className="bg-[#0000008a] hover:bg-[#0000006c] text-white font-bold py-2 px-4 rounded-md transition duration-300">Contact {emailAndGitUid}</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ViewDetails; <h1>Hi</h1>