import { Routes, Route } from "react-router-dom"
import Home from "./views/Home";
import UserForm from "./views/user/UserForm";
import UserRegisterForm from "./views/user/UserRegisterForm";
import NotFound from "./views/NotFound";
import TourGalery from "./views/TourGalery";
import DetailPage from "./views/DetailPage";
import CartPage from "./views/CartPage";
import DashboardHome from "./views/manager/DashboardHome";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/user/login" element={ <UserForm/> } />
            <Route path="/user/new" element={ <UserRegisterForm/> } />
            <Route path="/user/:id" element={ <UserForm/> } />
            <Route path="/tour" element={ <TourGalery/> } />
            <Route path="*" element={ <NotFound/> } />
            <Route path="/tour-detail" element={ <DetailPage/> } />
            <Route path="/cart" element={ <CartPage /> } />
            <Route path="/manager-home" element={ < DashboardHome /> } />
        </Routes>
    );
}

export default AppRoutes;