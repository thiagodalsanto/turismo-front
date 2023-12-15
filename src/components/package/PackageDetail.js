import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/auth';

export default function PackageDetail({ nota, id }) {
    const [pacote, setPacote] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const auth = useContext(AuthContext);
    const [adm, setAdm] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
    
            // Obter informações do pacote
            const fetchedPacote = await auth.Pacote(id);
            setPacote(fetchedPacote);
            console.log(fetchedPacote);

            // Verificar se o usuário é administrador
            const adm = await auth.isAdm(auth.token, auth.id);
            setAdm(adm);
    
            setLoading(false);
          } catch (error) {
            console.error('Erro ao obter informações:', error);
            setError(
              'Erro ao carregar as informações. Por favor, tente novamente.'
            );
            setLoading(false);
          }
        };
    
        fetchData();
    }, [id, auth]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    const somaPrecosPasseios = pacote.passeios
    ? pacote.passeios.reduce((total, passeio) => total + passeio.preco, 0)
    : 0;

    async function Reservar() {
        try {
        await auth.reservaPacote(auth.token, id, auth.id);
        } catch (err) {
        console.log(err);
        }
    }

    return (
        <div class="bg-white py-11 font-poppins dark:bg-gray-800 w-screen h-[87.5vh] mt-2">
            <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full px-4 md:w-1/2 ">
                        <div class="sticky top-0 z-50 ">
                            <div class="relative mb-6 lg:mb-10 lg:h-3/4 ">
                                <img src={pacote.passeios[0].imagem} alt=""
                                    class="object-cover w-full lg:h-full "/>
                            </div>
                            <div class="flex-wrap hidden md:flex ">
                                <div class="w-1/2 p-2 sm:w-1/4">
                                    <a href="/"
                                        class="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                        <img src={pacote.passeios[0].imagem} alt=""
                                            class="object-cover w-full lg:h-20"/>
                                    </a>
                                </div>
                                <div class="w-1/2 p-2 sm:w-1/4">
                                    <a href="/"
                                        class="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                        <img src={pacote.passeios[0].imagem} alt=""
                                            class="object-cover w-full lg:h-20"/>
                                    </a>
                                </div>
                                <div class="w-1/2 p-2 sm:w-1/4">
                                    <a href="/"
                                        class="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                        <img src={pacote.passeios[0].imagem} alt=""
                                            class="object-cover w-full lg:h-20"/>
                                    </a>
                                </div>
                                <div class="w-1/2 p-2 sm:w-1/4">
                                    <a href="/"
                                        class="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                        <img src={pacote.passeios[0].imagem} alt=""
                                            class="object-cover w-full lg:h-20"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 ">
                        <div class="lg:pl-20">
                            <div class="mb-8 ">
                                <span class="text-lg font-medium text-rose-500 dark:text-rose-200">Tours Presentes:</span>
                                {/* <h2 class="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                    {pacote && pacote.passeios && pacote.passeios.length > 0
                  ? pacote.passeios[0].destino
                  : 'Destino não disponível'}</h2> */}
                                <p class="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                    {pacote && pacote.passeios && pacote.passeios.length > 0 ? ( pacote.passeios.map((item, index) => (
                                        <div key={index}>
                                            <p fontSize="20px">{item.destino}</p>
                                            <p fontSize="15px">{item.itinerario}</p>
                                        </div> ))
                                    ) : (
                                        <p>Ta carregando...</p>
                                    )}
                                </p>
                                <p class="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                <div class="flex justify-between items-center w-64">
                                    <span class="text-lg font-bold text-gray-900 dark:text-gray-200">Ida:</span>
                                        <span class="text-lg font-bold text-gray-900 dark:text-gray-200">{pacote.dataInicial}</span>
                                    </div>
                                    <div class="flex justify-between items-center w-64">
                                        <span class="text-lg font-bold text-gray-900 dark:text-gray-200">Volta:</span>

                                        <span class="text-lg font-bold text-gray-900 dark:text-gray-200">{pacote.dataFinal}</span>
                                    </div>
                                    <p class="text-3xl font-bold text-gray-900 dark:text-gray-200 pt-12">${somaPrecosPasseios} </p>
                                </p>
                            </div>
                            <div class="flex items-center mb-8">
                                <h2 class="w-16 text-xl font-bold dark:text-gray-400">
                                    Nota:</h2>
                                <div class="flex flex-wrap items-center -mx-2 text-lg font-bold text-gray-900 dark:text-gray-200">
                                    {nota}
                                </div>
                            </div>
                            <div class="w-32 mb-8 ">
                                <label for=""
                                    class="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Booking</label>
                                <div class="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                    <button
                                        class="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                        <span class="m-auto text-2xl font-thin">-</span>
                                    </button>
                                    <input type="number" class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                        placeholder="1"/>
                                    <button
                                        class="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                        <span class="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                            <div class="flex flex-wrap items-center -mx-4 ">
                                <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                    {auth.id ? (
                                        <a href="/profile">
                                            <button onClick={Reservar}
                                            class="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                            Book It
                                            </button>
                                        </a>
                                    ) : (
                                        <p class="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">Faça Login Primeiro</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


