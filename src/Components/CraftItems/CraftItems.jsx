import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CraftItems = ({ data }) => {
    // Function to render slider section
    // console.log(data);
    const sliderSection = (title, description, url, _id, rating) => (
        <div className="shadow-xl">
            <figure className='h-96'><div className="inset-0 bg-no-repeat bg-center bg-cover h-full w-full" style={{ backgroundImage: `url(${url})` }}></div></figure>
            <div className="card-body bg-gray-100 dark:bg-[#1D232A]">
                <h2 className="card-title text-3xl font-semibold">{title.slice(0, 22)} . . .</h2>
                <p>{description.slice(0, 80)} ....</p>
                <p className='flex items-center space-x-3 text-2xl font-light'>
                    <span className='inline-block'>{rating}</span>
                    <span className='text-amber-500'><FaStar /></span>
                </p>
                <div className="card-actions">
                    <Link to={`/addCraftItem/${_id}`}>
                        <button className="btn">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );

    // State for slides per view
    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth <= 768 ? 1 : 3);

    // Effect for handling window resize
    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth <= 768 ? 1 : 3);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='my-24 p-6'>
            <div className='mb-10'>
                <h2 className="text-5xl text-center font-normal mb-5">Craft Items</h2>
                <p className=" text-center lg:px-48 text-lg font-extralight">
                    The Craft Items section offers a curated selection of artisanal creations spanning various categories such as painting, drawing, and more. Each item is meticulously crafted by skilled artists, ensuring quality and uniqueness. From vibrant paintings to intricate sketches, discover the perfect piece to inspire your creativity or add a touch of artistry to your space.
                </p>
            </div>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    data.slice(0, 6).map(oneData =>
                        <SwiperSlide className='shadow-2xl my-20' key={oneData._id}>
                            {sliderSection(oneData.item_name, oneData.description, oneData.photo, oneData._id, oneData.rating)}
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default CraftItems;
