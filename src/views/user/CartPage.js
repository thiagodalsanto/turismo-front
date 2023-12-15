import CartItem from "../../components/cart/CartItem";
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/auth';

const CartPage = () => {
    const auth = useContext(AuthContext);
    const [reservas, setReservas] = useState([]);
    const [adm, setAdm] = useState(null);
  
    useEffect(() => {
      const checkAdminStatus = async () => {
        try {
          const adm = await auth.isAdm(auth.token, auth.id);
          setAdm(adm);
  
          const reservas = adm
            ? await auth.reservaAgencia(auth.token, auth.id)
            : await auth.pacotesUser(auth.token, auth.id);
  
          setReservas(reservas);
        } catch (error) {
          setReservas([]); // Set to an empty array to avoid 'undefined' in the map
          console.error('Erro ao verificar se o usuário é administrador:', error);
        }
      };
  
      checkAdminStatus();
    }, []);
  
    // Move the function declaration above its usage
    const somaPrecosPasseios = passeios =>
      passeios
        ? passeios.reduce((total, passeio) => total + passeio.preco, 0)
        : 0;

    const pacotesList = reservas && reservas.length > 0 ? reservas.map(item => (
        <CartItem 
            destino={item.passeios[0].destino}
            id={item.id}
            img={item.passeios[0].imagem}
            valor={somaPrecosPasseios(item.passeios)}
            key={item.id}
            descricao={item.passeios[0].itinerario}
        />
    )) : null ;

    return (
        <section class="flex items-center bg-stone-200 lg:h-screen font-poppins dark:bg-gray-700">
            <div class="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
                <div class="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
                    <h2 class="mb-8 text-4xl font-bold dark:text-gray-400">Your Profile</h2>
                    <div class="flex flex-wrap justify-center -mx-4">
                        <div class="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
                            <div class="flex flex-wrap items-center justify-center mb-6 -mx-4 md:mb-8">
                                <div class="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                                    <h2 class="font-bold text-gray-500 dark:text-gray-400">Product name</h2>
                                </div>
                                <div class="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12 ">
                                    <h2 class="font-bold text-gray-500 dark:text-gray-400"> Valor</h2>
                                </div>
                            </div>
                            <div class="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">

                                {pacotesList}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartPage;