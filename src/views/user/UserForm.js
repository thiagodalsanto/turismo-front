
export default function UserForm() {
    return (
        <>
            <h2 className="text-gray-500 text-lg text-center">Usuário</h2>

            <div>
                <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="nome">Nome</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nome"/>
                </div>

                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">Email</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email"/>
                </div>

                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="senha">Senha</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Senha"/>
                </div>

                <div class="py-3">
                    <button type="submit" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Salvar</button>
                </div>
            </div>
        </>
    );
}