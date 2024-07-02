import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import CategoriesSectionPage from "../Pages/CategoriesSectionPage/CategoriesSectionPage";
import Footer from "../Components/Footer/Footer";

const CategoriesSectionLayoutPage = () => {
    const categoriesData = useLoaderData();
    console.log(categoriesData);

    return (
        <div>
            <Navbar/>
            <CategoriesSectionPage key={categoriesData._id} categoriesData={categoriesData}/>
            <Footer/> 
        </div>
    );
};

export default CategoriesSectionLayoutPage;