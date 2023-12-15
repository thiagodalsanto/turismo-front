import DashboardCard from "../../components/dashboard/DashboardCard";
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/auth';


export default function TourGalery() {
    const auth = useContext(AuthContext);
    const [tours, setTours] = useState([]);

    useEffect(() => {
        const checkAdminStatus = async () => {
          try {
            const tours = await auth.Tours(auth.token);
            setTours(tours);
          } catch (error) {
            setTours(null);
            console.error('Erro ao verificar se o usuário é administrador:', error);
          }
        };
    
        checkAdminStatus();
    }, [auth]);

    return (
        <>
            <div class="lg:flex justify-center flex-wrap w-full pt-8 bg-stone-200 dark:bg-gray-900 h-max min-h-screen pb-12">
                {tours.map(item => (
                    <DashboardCard 
                        tourName={item.destino}
                        tourImage={item.imagem}
                        tourValue={item.preco}
                        tourDescription={item.itinerario}

                    />
                ))}
            </div>
        </>
    );
}