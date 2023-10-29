import Home from "./views/Home";
import Login from "./components/forms/login/login";
import Register from "./components/forms/register/register";
import UserProfilePage from "./views/UserProfilePage";
import ChangePassword from "./views/changePassword";
import ProductTemplate from "./components/productTemplate/ProductTemplate";
import ProductTemplateNew from "./components/productTemplate/ProductTemplateNew";

export const routes = [
    { path: "/", element: <Home/> },
    { path: "/login", element: <Login/> },
    { path: "/register", element: <Register/> },
    { path: "/home", element: <Home/> },
    { path: "/change-password", element: <ChangePassword/>},
    { path: "/user-profile", element: <UserProfilePage/> },
    { path: "/user-profile/edit",element: <UserProfilePage edit={true}/>},
    { path: "/product-template/new",element: <ProductTemplate action={"new"}/>},
    { path: "/product-template2/new",element: <ProductTemplateNew action={"New"}/>},
    { path: "/product-template/:id/edit",element: <ProductTemplate action={"edit"}/>},
]