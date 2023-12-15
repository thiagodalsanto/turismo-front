import Home from "./views/commom/Home";
import NotFound from "./views/commom/NotFound";
import UserRegisterForm from "./views/user/UserRegisterForm";
import UserForm from "./views/user/UserForm";

import TourRegistration from "./views/manager/TourRegistration";
import PackageRegistration from "./views/manager/PackageRegistration";

import TourGalery from "./views/user/TourGalery";
import PackageGalery from "./views/user/PackageGalery";
// import DetailPage from "./views/user/DetailPage";
import PackageDetailPage from "./views/user/PackageDetailPage";
import UserHome from "./views/user/UserHome";
import CartPage from "./views/user/CartPage";

import AuthContext from './contexts/auth';

import { Fragment, useContext, useEffect, useState } from 'react'; 
import { Routes, Route } from "react-router-dom"

const IsAdm = ({ Item }) => {
    const auth = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(null);
  
    useEffect(() => {
      const checkAdminStatus = async () => {
        try {
          const adm = await auth.isAdm(auth.token, auth.id);
          setIsAdmin(adm);
        } catch (error) {
          console.error('Erro ao verificar se o usuário é administrador:', error);
        }
      };
      checkAdminStatus();
    }, [auth]);
  
    return isAdmin ? <Item /> : <Home />;
};

const Private = ({ Item }) => {
    const auth = useContext(AuthContext);
    return auth.username ? <Item /> : <UserForm />;
};

const Loged = ({ Item }) => {
    const auth = useContext(AuthContext);
    return !auth.username ? <Item /> : <Home />;
};

const AppRoutes = () => {
    return (
        <Fragment>
            <Routes>
                {/* Unlogged */}
                <Route path="/" element={ <Home/> } />
                <Route path="*" element={ <NotFound/> } />
                <Route path="/user/new" element={ <Loged  Item={UserRegisterForm}/> } />
                <Route path="/user/login" element={ <Loged Item={UserForm}/> } />
                <Route path="/package" element={ <PackageGalery/> } />
                <Route path="/package-detail/:id" element={ <PackageDetailPage/> } />

                {/* User */}
                <Route path="/user-home" element={ <Private Item={UserHome}/> } />
                <Route path="/profile" element={ <Private Item={CartPage} /> } />
                {/* <Route path="/tour-detail/" element={ <DetailPage/> } /> */} 

                {/* Manager */}
                <Route path="/tour" element={ <IsAdm Item={TourGalery}/> } />
                <Route path="/tour-registration" element={ <IsAdm Item={TourRegistration}/> } />
                <Route path="/package-registration" element={ <IsAdm Item={PackageRegistration}/> } />

            </Routes>
        </Fragment>
    );
}

export default AppRoutes;