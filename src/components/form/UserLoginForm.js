import React, { useContext, useState } from 'react';
import AuthContext from '../../contexts/auth';

const UserLoginForm = () => {
    const authContext = useContext(AuthContext);
    const { authenticate } = authContext;

    const [formValues, setFormValues] = useState({
        email: '',
        senha: '',
    });

    const handleChange = event => {
        const { name, value } = event.target;

        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    async function onSubmit(event) {
        event.preventDefault();

        try {      
            // Fazer a chamada à API com os dados do formulário
            await authenticate( formValues.email, formValues.senha);
            console.log(formValues);

          } catch (error) {
            console.error('Erro no cadastro:', error);
          }
    };

    return (
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Sign In
            </h1>
            <form class="space-y-4 md:space-y-6" onSubmit={ onSubmit }>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" name="email" id="email" value={formValues.email} onChange={handleChange} class="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500" placeholder="email@company.com"/>
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="senha" value={formValues.senha} onChange={handleChange} id="password" placeholder="••••••••" class="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"/>
                </div>
                <button type="submit" class="w-full text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800">Sign in</button>

                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? 
                    <a href="/user/new" class="font-medium text-fuchsia-600 hover:underline dark:text-fuchsia-500"> Sign up</a>
                </p>
            </form>
        </div>
    );
}

export default UserLoginForm;