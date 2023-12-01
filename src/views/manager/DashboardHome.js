import DashboardCard from "../../components/DashboardCard";

export default function DashboardHome() {
    return (
        <div aria-label="group of cards" tabindex="0" class="focus:outline-none w-full">
            <nav class="bg-gray-200 dark:bg-gray-800 border-b-1 border-gray-300 shadow-md">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
                    <div class="flex md:order-2">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span class="sr-only">Search</span>
                        </button>
                        <div class="relative hidden md:block">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span class="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                        </div>
                        <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <div class="relative mt-3 md:hidden">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                        </div>
                        <ul class="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
                            <li>
                                <a href="/tour-registration" class="block py-2 px-3 text-white bg-green-500 rounded-lg shadow-md" aria-current="page">Create</a>
                            </li>
                            <li>
                                <a href="/" class="block py-2 px-3 text-black rounded bg-gray-200 dark:bg-gray-800  dark:text-white" aria-current="page">
                                    Filter
                                </a> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="lg:flex justify-center w-full pt-8 bg-gray-100 dark:bg-gray-900 h-screen">
                <DashboardCard tourImage={"https://encurtador.com.br/pJX45"} tourName={"Porto, Portugal"} tourCategorie={"Europe"} tourDescription={"O Porto é a segunda maior cidade de Portugal e aquela que deu nome ao país. Desde 1996 que o seu centro histórico está classificado como Património Mundial pela UNESCO."} />
                <DashboardCard tourImage={"https://encurtador.com.br/bsGQY"} tourName={"Ghent, Belgium"} tourCategorie={"Europe"} tourDescription={"Capital da província de Flandres Oriental, Gent nasceu de um assentamento celta na confluência dos rios Lys e Scheldt, na Idade Média. Chegou a ser uma das cidades mais ricas e prósperas do norte da Europa. Hoje é a terceira maior cidade da Bélgica e tem pouco mais de 200 mil habitantes."} />
            </div>
        </div>
    );
}