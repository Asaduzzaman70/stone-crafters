import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Update from "../Pages/Update/Update";

const UpdateLayout = () => {
    const loadedArtAndCraft = useLoaderData()
    console.log(loadedArtAndCraft)
    return (
        <div>
            <Navbar/>
            <Update key={loadedArtAndCraft._id} loadedArtAndCraft={loadedArtAndCraft}/>
        </div>
    );
};

export default UpdateLayout;