import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import CraftItems from "../Components/CraftItems/CraftItems";
import Navbar from "../Components/Navbar/Navbar";
import CategoriesSection from "../Components/CategoriesSection/CategoriesSection";
import Footer from "../Components/Footer/Footer";
import { useContext } from "react";
import { CreateContext } from "../Provider/AuthProvider";
import Divider from "../Components/Divider/Divider";

const Home = () => {
    const { theme } = useContext(CreateContext);
    const data = useLoaderData();
    return (
        <div className={theme}>
            <Navbar></Navbar>
            <Banner></Banner>
            <CraftItems key={data._id} data={data}></CraftItems>
            <CategoriesSection />
            <Divider/>
            <Footer />
        </div>
    );
};

export default Home;