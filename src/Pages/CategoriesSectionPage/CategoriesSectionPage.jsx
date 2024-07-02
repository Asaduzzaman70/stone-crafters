import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoriesSectionPage = ({ categoriesData }) => {
    const sliderSection = (title, description, url, _id, rating, stokeStatus) => (
        <div className="shadow-2xl bg-opacity-75">
            <figure className='h-96'><div className="inset-0 bg-no-repeat bg-center bg-cover h-full w-full rounded-t-xl" style={{ backgroundImage: `url(${url})` }}></div></figure>
            <div className="card-body rounded-b-xl">
                <h2 className="card-title text-3xl font-semibold">{title.slice(0, 50)} . . .</h2>
                <p>{description.slice(0, 200)} ....</p>
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
        <div className="container mx-auto">
            <div className="mt-6 mb-12">
                <h1 className="text-4xl text-center">-{categoriesData[0]?.subcategory_Name ? categoriesData[0]?.subcategory_Name : 'Stoke Out'}-</h1>
            </div>
            <div className="grid grid-cols-3 gap-6 mb-10">
                {
                    categoriesData.map(oneData =>
                        <div key={oneData._id}>
                            {sliderSection(oneData.item_name, oneData.description, oneData.photo, oneData._id, oneData.rating, oneData.stokeStatus)}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CategoriesSectionPage;