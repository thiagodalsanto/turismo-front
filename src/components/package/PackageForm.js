import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/auth';

const SelectWithAddRemove = ({ options, onAddOption }) => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleAddOption = () => {
        const selected = options.find(opt => opt.id === selectedOption);
        if (selected) {
            onAddOption(selected);
            setSelectedOption('');
        }
    };
  
    return (
        <div className="rounded-lg flex w-full">
          <div className="flex justify-between w-full">
            <select className="p-2 border rounded-md dark:bg-gray-800 dark:text-gray-200" placeholder="Selecione uma opção" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                    {option.destino}
                    </option>
                ))}
            </select>
            <button className="ml-2 p-2 bg-fuchsia-600 text-white rounded-md" onClick={handleAddOption} type="button">
              Adicionar
            </button>
          </div>
        </div>
    );      
};

const PackageForm = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedOptionsIds, setSelectedOptionsIds] = useState([]);
    const [passeio, setPasseio] = useState([]);
    const auth = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const passeio = await auth.Tours(auth.token);
            setPasseio(passeio);
          } catch (error) {
            console.error('Erro ao obter informações:', error);
          }
        };
    
        fetchData();
    }, [auth.id, auth.token, auth]);

    const [formValues, setFormValues] = useState({
        nome: '',
        dataIda: '',
        dataVolta: '',
    });

    const handleChange = event => {
        const { name, value } = event.target;

        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    const onSubmit = async event => {
        // event.preventDefault();
        try {
            console.log(formValues.dataIda);
            console.log(formValues.dataVolta);
    
            await auth.PacoteRegister(
                auth.token,
                auth.id,
                formValues?.dataIda,
                formValues?.dataVolta,
                selectedOptionsIds
            );
        } catch (error) {
            console.error('Erro no cadastro:', error);
        }
    };

    const handleAddOption = newOption => {
        setSelectedOptions([...selectedOptions, newOption]);
        setSelectedOptionsIds([...selectedOptionsIds, newOption.id]); // Adicionar apenas o ID
        console.log(selectedOptionsIds);
    };

    const handleRemoveOption = optionToRemove => {
        setSelectedOptions(prevOptions =>
          prevOptions.filter(option => option.id !== optionToRemove.id)
        );
        setSelectedOptionsIds(prevIds =>
          prevIds.filter(id => id !== optionToRemove.id)
        ); // Remover apenas o ID
    };

    return (
        <section class="bg-stone-200 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
                <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-8 h-8 mr-2" src="/images/beer.png" alt="logo"/>
                    BeerTourism    
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                            New Package
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="/package" onSubmit={onSubmit}>
                            <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Package Name</label>
                                <input type="text" name="nome" id="name" value={formValues.nome} onChange={handleChange} class="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500 mb-6" placeholder="Package Name" />
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data de Ida</label>
                                <input type="date" name="dataIda" id="dataIda" value={formValues.dataIda} onChange={handleChange} class="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"/>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Data de Volta</label>
                                <input type="date" name="dataVolta" id="dataVolta" value={formValues.dataVolta} onChange={handleChange} class="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"/>
                                <div className="mt-4">
                                    <div className="max-w-400px">
                                        <h1 class="dark:text-gray-200 mb-4">Selecione as opções:</h1>
                                        <SelectWithAddRemove options={passeio} onAddOption={handleAddOption} />
                                        <h2 class="dark:text-gray-200 mt-4 mb-4">Opções adicionadas:</h2>
                                        <ul>
                                        {selectedOptions.map((option) => (
                                            <li
                                            key={option.id}
                                            className="flex justify-between items-center mb-2 dark:text-gray-200 text-gray-800"
                                            >
                                            {option.destino}
                                            <button className="ml-2 pt-2 pb-2 pl-4 pr-4 bg-red-500 text-white rounded-md" onClick={() => handleRemoveOption(option)}>
                                                X
                                            </button>
                                            </li>
                                        ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="w-full text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800">Create Package</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PackageForm;