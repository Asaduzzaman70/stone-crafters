import React, { useContext } from 'react';
import swal from 'sweetalert';
import { CreateContext } from '../../Provider/AuthProvider';
import subcategoryToken from './subcategoryToken';

const AddCraftItem = () => {
    const { user } = useContext(CreateContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const description = form.description.value;
        const priceText = form.price.value;
        const ratingText = form.rating.value;
        const processing_time = form.processing_time.value;
        const customization = form.customization.value;
        const stokeStatus = form.stokeStatus.value;
        const photo = form.photo.value;

        const subcategory_token = subcategoryToken(subcategory_Name);
        // console.log(subcategory_token);

        const price = parseFloat(priceText);
        const rating = parseFloat(ratingText);

        if (typeof price !== 'number') {
            return swal({
                title: "Price must be a Floating Number",
                text: "Please enter a valid number in the price field",
                icon: "warning",
                button: "Back",
            });
        }

        if (typeof rating !== 'number' || Number.isInteger(rating)) {
            return swal({
                title: "Rating must be a Floating Number",
                text: "Please enter a valid number in the Rating field",
                icon: "warning",
                button: "Back",
            });
        }

        const newArtItems = { item_name, subcategory_Name, subcategory_token, description, price, rating, processing_time, customization, stokeStatus, photo, name: user?.displayName, emailAndGitUid: user.email ? user?.email : user?.uid };

        console.log(newArtItems);

        fetch('https://stone-crafters-server.vercel.app/artAndCraft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newArtItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success",
                        button: "Aww yiss!",
                    });
                }
            })
    }

    return (
        <div className="p-8 relative">
            <div className="absolute inset-0 bg-no-repeat bg-center bg-cover blur-md h-full" style={{ backgroundImage: 'url("https://i.ibb.co/3zrT5C9/Forest.jpg")' }}></div>
            <div className="max-w-4xl mx-auto p-8 relative h-full bg-[#0000003f] rounded-md">
                <h1 className="text-2xl font-bold text-center mb-4">Add Craft Items</h1>
                <p className="text-center mb-8">
                    "Add Craft Items" lets users contribute to the Art & Craft Store by submitting their own creations. This feature enables artists to showcase their work to a wider audience. With a user-friendly form, creators can upload images, describe their crafts, and categorize them easily. It's a platform for sharing creativity and expanding the store's selection.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-xl">Item Name</label>
                            <input type="text" name="item_name" placeholder="Enter Item name" className="w-full bg-transparent p-2 border border-zinc-300 rounded" required />
                        </div>
                        {/* <div>
                            <label htmlFor="chef" className="block mb-2">Subcategory Name</label>
                            <input type="text" name="subcategory_Name" placeholder="Enter coffee chef" className="w-full bg-transparent p-2 border border-zinc-300 rounded" required />
                        </div> */}
                        {/* <div>
                            <label htmlFor="supplier" className="block mb-2">Short description</label>
                            <input type="text" name="description" placeholder="Enter coffee supplier" className="w-full bg-transparent p-2 border border-zinc-300 rounded" required />
                        </div> */}
                        <div>
                            <label htmlFor="taste" className="block mb-2 text-xl">Price</label>
                            <input type="text" name="price" placeholder="Enter Item Price" className="w-full bg-transparent p-2 border border-zinc-300 rounded" required />
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-xl">Rating</label>
                            <input type="text" name="rating" placeholder="Enter Rating" className="w-full bg-transparent p-2 border border-zinc-300 rounded" required />
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-xl">Processing Time</label>
                            <input type='date' name="processing_time" placeholder="Enter Time and Date" className="w-full bg-transparent p-2 border border-zinc-300 rounded" required />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="supplier" className="block mb-2 text-xl">Short description</label>
                            <textarea name="description" placeholder="Enter Short Description" className="w-full bg-transparent p-2 border border-zinc-300 rounded h-32" required></textarea>
                        </div>
                    </div>
                    {/* Selected Section */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        {/* Customization */}
                        <div className='mb-5 '>
                            <label htmlFor="category" className="block mb-2 text-xl">Customization</label>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Yes</span>
                                    <input type="radio" name="customization" value='Yes' className="radio" required />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">No</span>
                                    <input type="radio" name="customization" value='No' className="radio" required />
                                </label>
                            </div>
                        </div>
                        {/* stockStatus */}
                        <div className='mb-5 '>
                            <label htmlFor="category" className="block mb-2 text-xl">Stock Status</label>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Stock</span>
                                    <input type="radio" name="stokeStatus" value='Stock' className="radio" required />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Made</span>
                                    <input type="radio" name="stokeStatus" value='Made' className="radio" required />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Order</span>
                                    <input type="radio" name="stokeStatus" value='Order' className="radio" required />
                                </label>
                            </div>
                        </div>
                        {/* Customization */}
                        <div className='mb-5 '>
                            <label htmlFor="category" className="block mb-2 text-xl">Customization</label>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Landscape Painting</span>
                                    <input type="radio" name="subcategory_Name" value='Landscape Painting' className="radio" required />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Portrait Drawing</span>
                                    <input type="radio" name="subcategory_Name" value='Portrait Drawing' className="radio" required />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Watercolour Painting</span>
                                    <input type="radio" name="subcategory_Name" value='Watercolour Painting' className="radio" required />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Oil Painting</span>
                                    <input type="radio" name="subcategory_Name" value='Oil Painting' className="radio" required />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Charcoal Sketching</span>
                                    <input type="radio" name="subcategory_Name" value='Charcoal Sketching' className="radio" required />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Cartoon Drawing</span>
                                    <input type="radio" name="subcategory_Name" value='Cartoon Drawing' className="radio" required />
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* Photo */}
                    <div className="mb-4">
                        <label htmlFor="photo" className="block mb-2 text-xl">Photo</label>
                        <input type="text" name="photo" placeholder="Enter photo URL" className="w-full bg-transparent p-2 border border-zinc-300 rounded" required />
                    </div>
                    <button type="submit" className="w-full font-bold py-2 px-4 rounded btn mt-10">
                        Add Art
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;