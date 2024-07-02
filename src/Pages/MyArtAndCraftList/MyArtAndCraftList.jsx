import { useContext, useEffect, useState } from "react";
import { CreateContext } from "../../Provider/AuthProvider";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyArtAndCraftList = ({ loaderArtAndCraftItems }) => {
    const { user, theme } = useContext(CreateContext)
    const [originalArtAndCraftItems, setOriginalArtAndCraftItems] = useState(loaderArtAndCraftItems);
    const [artAndCraftItems, setArtAndCraftItems] = useState(loaderArtAndCraftItems);
    const [lengthCount, setLengthCount] = useState(500);

    // useEffect(() => {
    //     // Update originalArtAndCraftItems whenever artAndCraftItems changes
    //     setOriginalArtAndCraftItems(artAndCraftItems);
    // }, [artAndCraftItems]);


    const handleDelete = _id => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://stone-crafters-server.vercel.app/artAndCraft/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            // Handle response
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });
                                const remaining = artAndCraftItems.filter(art => art._id !== _id);
                                setOriginalArtAndCraftItems(remaining);
                            }
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    };

    const handleSeeMore = () => {
        setLengthCount(Number.MAX_SAFE_INTEGER); // Set to a very large number to show the entire description
    };
    // console.log(artAndCraftItems._id);

    // Function to render slider section
    const sliderSection = (title, description, url, _id, rating, stokeStatus, emailAndGitUid, price, customization, subcategory_Name, processing_time) => (
        <div className="shadow-2xl shadow-[#0000009f] rounded-xl border-[#161616a2] bg-opacity-75 grid grid-cols-1 card-body">
            <figure className='h-96 w-full lg:w-[500px] lg:h-[500px] lg:border-2 dark:border-[#161616a2] rounded-xl'><div className="inset-0 bg-no-repeat bg-center bg-cover h-full w-full lg:w-full rounded-xl" style={{ backgroundImage: `url(${url})` }}></div></figure>
            <div className="">
                <h2 className="card-title text-3xl font-semibold mb-6 mt-3">{title} {description.length}</h2>
                <p>
                    {description.slice(0, lengthCount)}
                    {description.length > lengthCount && (
                        <button onClick={handleSeeMore} className="font-bold ml-1"> See More . . .</button>
                    )}
                </p>
                <p className='flex items-center space-x-3 text-2xl font-light my-6'>
                    <span className='inline-block'>{rating}</span>
                    <span className='text-amber-500'><FaStar /></span>
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <p className='text-xl font-semibold'>Stoke : {stokeStatus}</p>
                    <p className='text-xl font-semibold'>Price : {price}$</p>
                    <p className='text-xl font-semibold'>Customization : {customization}</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <p className='text-xl font-semibold'>Subcategory : {subcategory_Name}</p>
                    <p className='text-xl font-semibold'>Processing Time : {processing_time}</p>
                </div>
                <div className="card-actions mt-6">
                    <Link to={`/update/${_id}`}>
                        <button className="btn">Update</button>
                    </Link>
                    <Link>
                        <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                    </Link>
                </div>
            </div>
        </div>
    );

    // Filter Section
    const handleFilter = arg => {
        if (arg === 'Yes') {
            const remaining = artAndCraftItems.filter(art => art.customization === 'Yes');
            setOriginalArtAndCraftItems(remaining);
        }
        if (arg === 'No') {
            const remaining = artAndCraftItems.filter(art => art.customization === 'No');
            setOriginalArtAndCraftItems(remaining);
        }
    }

    return (
        <div className={`pt-10 ${theme}`}>
            <h1 className='text-center text-3xl font-semibold underline mb-7'>My Art&Craft Items</h1>
            {/* Filter */}
            <div className="text-center">
                <details className="dropdown">
                    <summary className="m-1 btn">Customization</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52">
                        <li><button onClick={() => handleFilter('Yes')}>Yes</button></li>
                        <li><button onClick={() => handleFilter('No')}>No</button></li>
                    </ul>
                </details>
            </div>
            {/* Card Section */}
            <div className='relative container mx-auto p-7 space-y-6'>
                {originalArtAndCraftItems.map(oneData => (
                    <div key={oneData._id}>
                        {sliderSection(
                            oneData.item_name,
                            oneData.description,
                            oneData.photo,
                            oneData._id,
                            oneData.rating,
                            oneData.stokeStatus,
                            oneData.emailAndGitUid,
                            oneData.price,
                            oneData.customization,
                            oneData.subcategory_Name,
                            oneData.processing_time,
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyArtAndCraftList;