import { Link, NavLink } from "react-router-dom";
import subcategoryToken from "../../Pages/AddCraftItem/subcategoryToken";

const CategoriesSection = () => {
    const categories = [
        'Landscape Painting',
        'Portrait Drawing',
        'Watercolour Painting',
        'Oil Painting',
        'Charcoal Sketching',
        'Cartoon Drawing'
    ];

    return (
        <div className="container mx-auto mb-24">
            <div className="p-3">
                <h1 className="text-5xl text-center font-normal mb-5">Art & Craft Categories Section</h1>
                <p className="text-center lg:px-48 text-lg font-extralight">
                    Discover a world of creativity with our diverse Art & Craft Categories. From painting and drawing to knitting, scrapbooking, and more, each category offers a range of tools, materials, and inspiration to help you bring your artistic visions to life. Whether you are a beginner or a seasoned artist, you'll find everything you need to fuel your passion and enhance your skills. Explore now and let your imagination soar!
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 px-2">
                {categories.map((item, idx) => (
                    <NavLink key={idx} to={`/categoriesSection/${subcategoryToken(item)}`}>
                        <button className="
                            w-full h-48 btn btn-ghost shadow-xl text-center rounded-md text-3xl
                            hover:text-[31px]
                            ">
                            <h2 className="uppercase">{item}</h2>
                        </button>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default CategoriesSection;