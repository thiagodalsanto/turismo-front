import PackageCard from "../../components/package/PackageCard";
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/auth';


export default function PackageGalery() {
    const auth = useContext(AuthContext);
    const [pacotes, setPacotes] = useState([]);

    useEffect(() => {
        const checkAdminStatus = async () => {
          try {
            const pacotes = await auth.Pacotes(auth.token);
            setPacotes(pacotes);
            console.log(pacotes);
          } catch (error) {
            setPacotes(null);
            console.error('Erro ao verificar se o usuário é administrador:', error);
          }
        };
    
        checkAdminStatus();
    }, [auth]);

    return (
        <div class="lg:flex justify-center flex-wrap w-full pt-8 bg-stone-200 dark:bg-gray-900 min-h-screen h-max pb-12">
            {pacotes.map(item => (
                <PackageCard 
                    dataIda={item.dataInicial}
                    dataVolta={item.dataFinal}
                    img={item.passeios[0].imagem}
                    nome={item.passeios[0].destino}
                    id={item.id}
                />
            ))}
        </div>
    );
}