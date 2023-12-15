
export default function PackageCard({ img, nome, dataIda, dataVolta, agencia, id }) {
    return (
        <div class="w-4/12 mr-7 mt-8 h-[450px] bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-md">
            <a href="/package-detail">
                <div class="flex w-full h-48 justify-center">
                    <img class="rounded-t-lg w-full h-full object-cover" src={img} alt="product" />
                </div>
            </a>
            <div class="px-5 pb-5">
                <div class="pt-6 flex justify-center">
                    <a href="/package-detail">
                        <h5 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-stone-300">{nome}</h5>
                    </a>
                </div>
                <div class="flex flex-col mt-2.5 mb-5">
                    <div class="flex justify-around items-center w-full">
                            <span class="text-lg font-bold text-gray-900 dark:text-gray-200">Agencia:</span>
                            <span class="text-lg font-sans text-gray-900 dark:text-gray-200">{agencia}</span>
                        </div>
                    <div class="flex justify-around items-center w-full">
                        <span class="text-lg font-bold text-gray-900 dark:text-gray-200">Ida:</span>
                        <span class="text-lg font-sans text-gray-900 dark:text-gray-200">{dataIda}</span>
                    </div>
                    <div class="flex justify-around items-center w-full">
                        <span class="text-lg font-bold text-gray-900 dark:text-gray-200">Volta:</span>
                        <span class="text-lg font-sans text-gray-900 dark:text-gray-200">{dataVolta}</span>
                    </div>                
                </div>
                <div class="flex items-center justify-end">
                    <a href={`/package-detail/${id}`} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</a>
                </div>
            </div>
        </div>
    );
}