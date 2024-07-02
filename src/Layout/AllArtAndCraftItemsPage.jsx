import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import AllArtAndCraftItems from "../Pages/AllArt&CraftItems/AllArtAndCraftItems";

const AllArtAndCraftItemsPage = () => {
    const artItems = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <AllArtAndCraftItems key={artItems._id} artItems={artItems}/>
        </div>
    );
};

export default AllArtAndCraftItemsPage;