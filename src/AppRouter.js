import { Routes, Route } from "react-router-dom"
import Home from "./views/Home";
import UserForm from "./views/user/UserForm";
import UserRegisterForm from "./views/user/UserRegisterForm";
import NotFound from "./views/NotFound";
import TourGalery from "./views/TourGalery";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/user/login" element={ <UserForm/> } />
            <Route path="/user/new" element={ <UserRegisterForm/> } />
            <Route path="/user/:id" element={ <UserForm/> } />
            <Route path="/tour" element={ <TourGalery/> } />
            <Route path="*" element={ <NotFound/> } />
        </Routes>
    );
}

export default AppRoutes;