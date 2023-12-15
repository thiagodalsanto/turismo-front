import { RegisterRequest } from '../../contexts/utils';
import React, { useState } from 'react';

const UserRegistrationForm = () => {

    const [formValues, setFormValues] = useState({
        nome: '',
        email: '',
        cpfCnpj: '',
        tipo: false,
        senha: '',
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        const newValue = type === 'checkbox' ? checked : value;

        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: newValue,
        }));
    }

    const onSubmit = async (event) => {
        try {      
            // Fazer a chamada à API com os dados do formulário
            await RegisterRequest(
              formValues?.nome,
              formValues?.email,
              formValues?.cpfCnpj,
              formValues.tipo === true ? 'AGENCIA_VIAGEM' : 'CLIENTE',
              formValues?.senha
            );
            console.log(formValues);

          } catch (error) {
            console.error('Erro no cadastro:', error);
          }
    };

    return (
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                New Account
            </h1>
            <form class="space-y-4 md:space-y-6" action='/user/login' onSubmit={onSubmit}>
                <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" name="nome" value={formValues.nome} onChange={handleChange} id="name" class="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500" placeholder="Your name here" required=""/>
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" name="email" id="email" value={formValues.email} onChange={handleChange} class="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500" placeholder="email@company.com" required=""/>
                </div>

                <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CPF / CNPJ</label>
                    <input type="text" name="cpfCnpj" id="cpf" value={formValues.cpfCnpj} onChange={handleChange} placeholder="CPF - CPNJ" class="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500" required=""/>
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="senha" id="password" value={formValues.senha} onChange={handleChange} placeholder="••••••••" class="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500" required=""/>
                </div>
                <div>
                    <label for="tipo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
                    <div class="flex items-center mb-4">
                        <input name="tipo" id="default-checkbox" type="checkbox" checked={formValues.tipo} onChange={handleChange} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">É Adm?</label>
                    </div>
                </div>
                <button type="submit" class="w-full text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800">Create an account</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <a href="/user/login" class="font-medium text-fuchsia-600 hover:underline dark:text-fuchsia-500"> Login here</a>
                </p>
            </form>
        </div>
    );
}

export default UserRegistrationForm;