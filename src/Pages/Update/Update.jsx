import swal from "sweetalert";
import subcategoryToken from "../AddCraftItem/subcategoryToken";

const Update = ({ loadedArtAndCraft }) => {
    // const { item_name, subcategory_Name, description, price, rating, processing_time, customization, stokeStatus, photo } = loadedArtAndCraft;
    const { _id, item_name, subcategory_Name, description, price, rating, processing_time, customization, stokeStatus, photo, name, emailAndGitUid } = loadedArtAndCraft;

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

        const newArtItems = { item_name, subcategory_Name, subcategory_token, description, price, rating, processing_time, customization, stokeStatus, photo };

        console.log(newArtItems);

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

        // send data to the server
        fetch(`https://stone-crafters-server.vercel.app/artAndCraft/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newArtItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }

    console.log(customization);

    return (
        <div className="container mx-auto">
            <div className="max-w-4xl mx-auto p-7">
                <div>
                    <h1 className="text-center text-2xl mb-10">Update Your Data</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="name" className="block mb-2">Item Name</label>
                                <input type="text" defaultValue={item_name} name="item_name" placeholder="Enter coffee name" className="w-full bg-transparent p-2 border border-zinc-300 rounded" required />
                            </div>
                            {/* <div>
                                <label htmlFor="chef" className="block mb-2">Subcategory Name</label>
                                <input type="text" defaultValue={subcategory_Name} name="subcategory_Name" placeholder="Enter coffee chef" className="w-full bg-transparent p-2 border border-zinc-300 rounded" required />
                            </div> */}
                            <div>
                                <label htmlFor="taste" className="block mb-2">Price</label>
                                <input type="text" defaultValue={price} name="price" placeholder="Enter coffee taste" className="w-full bg-transparent p-2 border border-zinc-300 rounded" required />
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2">Rating</label>
                                <input type="text" defaultValue={rating} name="rating" placeholder="Enter coffee category" className="w-full bg-transparent p-2 border border-zinc-300 rounded" required />
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2">Processing Time</label>
                                <input type='date' defaultValue={processing_time} name="processing_time" placeholder="Enter coffee category" className="w-full bg-transparent p-2 border border-zinc-300 rounded" required />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="supplier" className="block mb-2">Short description</label>
                                <textarea defaultValue={description} name="description" placeholder="Enter coffee supplier" className="w-full bg-transparent p-2 border border-zinc-300 rounded h-32" required></textarea>
                            </div>
                        </div>
                        {/* Selected Section */}
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            {/* Customization */}
                            <div className='mb-5 '>
                                <label htmlFor="category" className="block mb-2">Customization</label>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Yes</span>
                                        <input type="radio" name="customization" value='Yes' className="radio" defaultChecked={customization === 'Yes'} required />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">No</span>
                                        <input type="radio" name="customization" value='No' className="radio" defaultChecked={customization === 'No'} required />
                                    </label>
                                </div>
                            </div>
                            {/* stockStatus */}
                            <div className='mb-5 w-1/2'>
                                <label htmlFor="category" className="block mb-2">Stock Status</label>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Stock</span>
                                        <input type="radio" name="stokeStatus" value='Stock' className="radio" defaultChecked={stokeStatus === 'Stock'} required />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Made</span>
                                        <input type="radio" name="stokeStatus" value='Made' className="radio" defaultChecked={stokeStatus === 'Made'} required />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Order</span>
                                        <input type="radio" name="stokeStatus" value='Order' className="radio" defaultChecked={stokeStatus === 'Order'} required />
                                    </label>
                                </div>
                            </div>
                            {/* Sub Catagory */}
                            <div className='mb-5 '>
                                <label htmlFor="category" className="block mb-2">Customization</label>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Landscape Painting</span>
                                        <input type="radio" name="subcategory_Name" value='Landscape Painting' className="radio" defaultChecked={subcategory_Name === 'Landscape Painting'} required />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Portrait Drawing</span>
                                        <input type="radio" name="subcategory_Name" value='Portrait Drawing' className="radio" defaultChecked={subcategory_Name === 'Portrait Drawing'} required />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Watercolour Painting</span>
                                        <input type="radio" name="subcategory_Name" value='Watercolour Painting' className="radio" defaultChecked={subcategory_Name === 'Watercolour Painting'} required />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Oil Painting</span>
                                        <input type="radio" name="subcategory_Name" value='Oil Painting' className="radio" defaultChecked={subcategory_Name === 'Oil Painting'} required />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Charcoal Sketching</span>
                                        <input type="radio" name="subcategory_Name" value='Charcoal Sketching' className="radio" defaultChecked={subcategory_Name === 'Charcoal Sketching'} required />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Cartoon Drawing</span>
                                        <input type="radio" name="subcategory_Name" value='Cartoon Drawing' className="radio" defaultChecked={subcategory_Name === 'Cartoon Drawing'} required />
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* Photo */}
                        <div className="mb-4">
                            <label htmlFor="photo" className="block mb-2">Photo</label>
                            <input type="text" defaultValue={photo} name="photo" placeholder="Enter photo URL" className="w-full bg-transparent p-2 border border-zinc-300 rounded" required />
                        </div>
                        <button type="submit" className="w-full bg-[#00000065] hover:bg-[#00000083] text-white font-bold py-2 px-4 rounded btn mt-10">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;