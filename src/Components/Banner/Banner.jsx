// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useTypewriter } from 'react-simple-typewriter';
import { useContext } from 'react';
import { CreateContext } from '../../Provider/AuthProvider';


const Banner = () => {
    const { theme } = useContext(CreateContext);
    const handleText = (arg) => {
        const [text] = useTypewriter({
            words: [arg],
            loop: 0
        })
        return <span>{text}</span>;
    }

    const sliderSection = (title, halfTitle, description, url) => <>
        <div className={`p-8 relative flex items-center h-full`}>
            {/* Background image with overlay */}
            <div className="absolute inset-0 bg-no-repeat bg-center bg-cover blur-md" style={{ backgroundImage: `url(${url})` }}></div>

            {/* Content */}
            <div className="max-w-3xl pl-10 relative z-10">
                <h2 className={`text-6xl lg:text-8xl font-bold mb-5`}>{title}{handleText(halfTitle)}</h2>
                <p className="text-xl lg:text-3xl font-extralight">
                    {description}
                </p>
            </div>
        </div>
    </>

    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-screen"
            >
                <SwiperSlide>
                    {sliderSection('Discover Your Creative ', 'Journey.', 'Explore a world of artistic possibilities with our wide range of painting and drawing supplies. Let your imagination run wild!', "https://i.ibb.co/Hzrtrfj/Brush.jpg")}
                </SwiperSlide>
                <SwiperSlide>
                    {sliderSection('Express Yourself Through ', 'Art.', 'Unleash your creativity and express your unique vision with our high-quality paints, brushes, and canvases. Your masterpiece awaits!', "https://i.ibb.co/1qZczpY/Eye.jpg")}
                </SwiperSlide>
                <SwiperSlide>
                    {sliderSection('Capture the Beauty of ', 'Nature.', 'From serene landscapes to vibrant floral arrangements, our painting supplies will help you capture the beauty of the natural world. Start your next masterpiece today!', "https://i.ibb.co/Nmybdt8/God-level-art.jpg")}
                </SwiperSlide>
                <SwiperSlide>
                    {sliderSection('Bring Faces to ', 'Life.', 'Create lifelike portraits that captivate and inspire with our selection of drawing pencils, charcoal, and sketching tools. Elevate your portrait drawing skills!', "https://i.ibb.co/ChMpxb4/War-Battle.jpg")}
                </SwiperSlide>
                <SwiperSlide>
                    {sliderSection('Splash Color with ', 'Watercolours.', 'Experience the magic of watercolour painting with our vibrant pigments and versatile brushes. Dive into a world of fluid artistry!', "https://i.ibb.co/0ZmGWGK/Mountain.jpg")}
                </SwiperSlide>
                <SwiperSlide>
                    {sliderSection('Master the Art of Oil ', 'Painting.', 'Unlock the richness and depth of oil painting with our premium paints and mediums. Explore the timeless beauty of oil on canvas!', "https://i.ibb.co/4YZ2M1B/Girl.jpg")}
                </SwiperSlide>
                <SwiperSlide>
                    {sliderSection('Sketch Your Dreams in ', 'Charcoal.', 'Harness the dramatic effects of charcoal to bring your sketches to life. Dive into the world of chiaroscuro and create captivating compositions!', "https://i.ibb.co/FYB5RBL/Space.jpg")}
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default Banner;