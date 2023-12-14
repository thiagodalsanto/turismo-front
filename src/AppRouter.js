import Home from "./views/commom/Home";
import UserRegisterForm from "./views/user/UserRegisterForm";
import UserForm from "./views/user/UserForm";
import TourGalery from "./views/user/TourGalery";
import PackageGalery from "./views/user/PackageGalery";
import DetailPage from "./views/user/DetailPage";
import PackageDetailPage from "./views/user/PackageDetailPage";
import UserHome from "./views/user/UserHome";
import NotFound from "./views/commom/NotFound";

// import AuthContext from './contexts/auth';

import CartPage from "./views/user/CartPage";

import DashboardHome from "./views/manager/DashboardHome";
import TourRegistration from "./views/manager/TourRegistration";
import PackageRegistration from "./views/manager/PackageRegistration";

// import { Fragment, useContext, useEffect, useState } from 'react'; 
import { Routes, Route } from "react-router-dom"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/user/login" element={ <UserForm/> } />
            <Route path="/user/new" element={ <UserRegisterForm/> } />
            <Route path="/tour" element={ <TourGalery/> } />
            <Route path="/package" element={ <PackageGalery/> } />
            <Route path="*" element={ <NotFound/> } />
            <Route path="/tour-detail" element={ <DetailPage/> } />
            <Route path="/package-detail" element={ <PackageDetailPage/> } />

            <Route path="/cart" element={ <CartPage /> } />
            <Route path="/manager-home" element={ < DashboardHome /> } />
            <Route path="/tour-registration" element={ <TourRegistration/> } />
            <Route path="/package-registration" element={ <PackageRegistration/> } />
            <Route path="/user-home" element={ <UserHome/> } />
        </Routes>
    );
}

export default AppRoutes;