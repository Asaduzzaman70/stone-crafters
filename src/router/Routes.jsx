import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home.jsx";
import Register from "../Pages/Register/Register.jsx";
import Login from "../Pages/Login/Login.jsx";
import AddCraftItemPage from "../Components/AddCraftItemPage/AddCraftItemPage.jsx";
import ViewDetailsPage from "../Layout/ViewDetailsPage.jsx";
import AllArtAndCraftItemsPage from "../Layout/AllArtAndCraftItemsPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import MyArtAndCraftListPage from "../Layout/MyArtAndCraftListPage.jsx";
import UpdateLayout from "../Layout/UpdateLayout.jsx";
import CategoriesSectionLayoutPage from "../Layout/CategoriesSectionLayoutPage.jsx";
import Error from "./Error.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <Error/>,
        loader: () => fetch('https://stone-crafters-server.vercel.app/artAndCraft')
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />,
        loader: () => fetch('https://stone-crafters-server.vercel.app/users')
    },
    {
        path: '/addCraftItem',
        element: <PrivateRoute><AddCraftItemPage /></PrivateRoute>
    },
    {
        path: '/addCraftItem/:id',
        element: <PrivateRoute><ViewDetailsPage /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://stone-crafters-server.vercel.app/artAndCraft/${params.id}`)
    },
    {
        path: '/allArtAndCraftItems',
        element: <PrivateRoute><AllArtAndCraftItemsPage /></PrivateRoute>,
        loader: () => fetch('https://stone-crafters-server.vercel.app/artAndCraft')
    },
    {
        path: '/myArtAndCraftList/:emailAndGithubUid',
        element: <PrivateRoute><MyArtAndCraftListPage /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://stone-crafters-server.vercel.app/artAndCraft/byEmail/${params.emailAndGithubUid}`)
    },
    {
        path: '/update/:id',
        element: <PrivateRoute> <UpdateLayout /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://stone-crafters-server.vercel.app/artAndCraft/${params.id}`)
    },
    {
        path: '/categoriesSection/:item',
        element: <CategoriesSectionLayoutPage />,
        loader: ({ params }) => fetch(`https://stone-crafters-server.vercel.app/categoriesSection/${params.item}`)
    }
])

export default router;