
export default function DashboardCard({ tourImage, tourName, tourCategorie, tourDescription }) {
    return (
        <div tabindex="0" aria-label="card 1" class="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-100 dark:bg-gray-800 p-6 shadow rounded h-64">
            <div class="flex items-center border-b border-gray-200 pb-6">
                <img src={tourImage} alt="coin avatar" class="w-12 h-12 rounded-full" />
                <div class="flex items-start justify-between w-full">
                    <div class="pl-3 w-full">
                        <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800 dark:text-stone-200">{tourName}</p>
                        <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-2 text-gray-500 dark:text-gray-50">{tourCategorie}</p>
                    </div>
                    <div role="img" aria-label="bookmark" className="flex flex-row items-center justify-center">                    
                        <a href="/">
                            <button type="button" class="text-black dark:text-black bg-gray-300 hover:bg-gray-400 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-200 dark:hover:bg-gray-300 dark:focus:ring-fuchsia-800 mr-3">
                            Edit
                            </button>
                        </a>
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" class="bi bi-trash" viewBox="0 0 18 18">
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-2">
                <p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-600 dark:text-gray-50">{tourDescription}</p>
            </div>
        </div>
    );
}