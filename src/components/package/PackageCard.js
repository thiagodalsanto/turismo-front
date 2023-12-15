
export default function PackageCard({ img, nome, dataIda, dataVolta }) {
    return (
        <div class="w-4/12 mr-7 mt-8 h-[400px] bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-md">
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
                    <p class="text-xl font-bold text-gray-900 dark:text-white">Ida: {dataIda}</p>
                    <p class="text-xl font-bold text-gray-900 dark:text-white">Volta: {dataVolta}</p>
                </div>
                <div class="flex items-center justify-end">
                    <a href="/package-detail" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</a>
                </div>
            </div>
        </div>
    );
}