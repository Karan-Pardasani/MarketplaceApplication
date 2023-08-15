import Home from "./views/Home";
import Login from "./components/forms/login/login";
import Register from "./components/forms/register/register";

export const routes = [
    { path: "/", element: <Home/> },
    { path: "/login", element: <Login/> },
    { path: "/register", element: <Register/> },
    { path: "/home", element: <Home/> }
]