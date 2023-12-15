
export default function DashboardCard({ tourImage, tourName, tourValue, tourDescription }) {
    return (
        <div tabindex="0" aria-label="card 1" class="mt-6 focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-100 dark:bg-gray-800 p-6 shadow rounded h-[495px]">
            <div class="flex w-full h-[255px] justify-center">
                <img src={tourImage} alt="coin avatar" class="w-full h-full object-cover rounded-lg"/>
            </div>
            <div class="flex items-center pb-6 pt-12">
                <div class="flex items-start justify-between w-full">
                    <div class="pl-3 w-full">
                        <p tabindex="0" class="focus:outline-none text-2xl font-medium leading-5 text-gray-800 dark:text-stone-200">{tourName}</p>
                        <p tabindex="0" class="focus:outline-none text-xl italic leading-normal pt-2 text-gray-500 dark:text-gray-50">R$ {tourValue}</p>
                    </div>
                    <div role="img" aria-label="bookmark" className="flex flex-row items-center justify-center">
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="red" class="bi bi-trash" viewBox="0 0 36 36">
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-2 dark:bg-gray-700 bg-gray-200 rounded-md">
                <p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-600 dark:text-gray-50">{tourDescription}</p>
            </div>
        </div>
    );
}