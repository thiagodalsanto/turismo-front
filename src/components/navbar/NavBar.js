import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/auth';

export default function NavBar({ darkMode, setDarkMode }) {
    const location = useLocation();

    const auth = useContext(AuthContext);
    const [adm, setAdm] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const adm = await auth.isAdm(auth.token, auth.id);
            setAdm(adm);
            console.log(adm);
          } catch (error) {
            setAdm(false);
            console.error('Erro ao obter informações:', error);
          }
        };
        console.log('1');
        fetchData();
      }, [auth.id, auth.token, auth]);

    return (
        <nav class="bg-stone-200 border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/images/beer.png" class="h-10" alt="Logo" />
                <span class="self-center text-2xl font-mono font-bold whitespace-nowrap dark:text-white">BeerTourism</span>
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <>
                    {adm ? (
                        <a href="/tour-registration">
                            <button type="button" class="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2">Create Tour</button>
                        </a> 
                        ) : (
                            <></>
                        )
                    }
                    {adm ? (
                        <a href="/package-registration">
                            <button type="button" class="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2">Create Package</button>
                        </a> 
                        ) : (
                            <></>
                        )
                    }
                </>
                <button onClick={() => { setDarkMode(!darkMode); }} className="flex justify-center items-center mr-2 rounded-lg bg-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600 dark:bg-gray-700 w-9 h-9">
                    { darkMode ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-sun" viewBox="0 0 16 16"> <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-moon" viewBox="0 0 16 16">
  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278M4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
</svg> }
                </button>
                <>
                    {adm ? (
                        <></>
                    ) : (
                        <a href="/profile">
                            <button type="button" className="flex items-center justify-center mr-2 rounded-lg bg-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600 dark:bg-gray-700 w-9 h-9">
                            { darkMode ? <svg width="20" height="20" viewBox="0 0 48 48" fill="white" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="white"/> <path d="M12 35.6309C12 34.5972 12.772 33.7241 13.7995 33.6103C21.515 32.7559 26.5206 32.8325 34.218 33.6287C35.2324 33.7337 36 34.5918 36 35.6116C36 36.1807 35.7551 36.7275 35.3262 37.1014C26.2414 45.0195 21.0488 44.9103 12.6402 37.1087C12.2306 36.7286 12 36.1897 12 35.6309Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M34.1151 34.6234C26.4784 33.8334 21.5449 33.7587 13.9095 34.6042C13.3954 34.6612 13 35.1002 13 35.6309C13 35.9171 13.1187 36.1885 13.3204 36.3757C17.4879 40.2423 20.6461 41.9887 23.7333 41.9999C26.8309 42.0113 30.1592 40.2783 34.6691 36.3476C34.8767 36.1667 35 35.8964 35 35.6116C35 35.0998 34.6154 34.6752 34.1151 34.6234ZM13.6894 32.6164C21.4852 31.7531 26.5628 31.8315 34.3209 32.6341C35.8495 32.7922 37 34.0838 37 35.6116C37 36.465 36.6336 37.2884 35.9832 37.8553C31.4083 41.8426 27.598 44.0141 23.726 43.9999C19.8435 43.9857 16.2011 41.7767 11.9601 37.8418C11.3425 37.2688 11 36.4624 11 35.6309C11 34.0943 12.1487 32.787 13.6894 32.6164Z" fill="white"/> <path d="M32 20C32 24.4183 28.4183 28 24 28C19.5817 28 16 24.4183 16 20C16 15.5817 19.5817 12 24 12C28.4183 12 32 15.5817 32 20Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18 23.3137 20.6863 26 24 26ZM24 28C28.4183 28 32 24.4183 32 20C32 15.5817 28.4183 12 24 12C19.5817 12 16 15.5817 16 20C16 24.4183 19.5817 28 24 28Z" fill="white"/> </svg> : 
                            <svg width="20" height="20" viewBox="0 0 48 48" fill="black" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="black"/> <path d="M12 35.6309C12 34.5972 12.772 33.7241 13.7995 33.6103C21.515 32.7559 26.5206 32.8325 34.218 33.6287C35.2324 33.7337 36 34.5918 36 35.6116C36 36.1807 35.7551 36.7275 35.3262 37.1014C26.2414 45.0195 21.0488 44.9103 12.6402 37.1087C12.2306 36.7286 12 36.1897 12 35.6309Z" fill="black"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M34.1151 34.6234C26.4784 33.8334 21.5449 33.7587 13.9095 34.6042C13.3954 34.6612 13 35.1002 13 35.6309C13 35.9171 13.1187 36.1885 13.3204 36.3757C17.4879 40.2423 20.6461 41.9887 23.7333 41.9999C26.8309 42.0113 30.1592 40.2783 34.6691 36.3476C34.8767 36.1667 35 35.8964 35 35.6116C35 35.0998 34.6154 34.6752 34.1151 34.6234ZM13.6894 32.6164C21.4852 31.7531 26.5628 31.8315 34.3209 32.6341C35.8495 32.7922 37 34.0838 37 35.6116C37 36.465 36.6336 37.2884 35.9832 37.8553C31.4083 41.8426 27.598 44.0141 23.726 43.9999C19.8435 43.9857 16.2011 41.7767 11.9601 37.8418C11.3425 37.2688 11 36.4624 11 35.6309C11 34.0943 12.1487 32.787 13.6894 32.6164Z" fill="black"/> <path d="M32 20C32 24.4183 28.4183 28 24 28C19.5817 28 16 24.4183 16 20C16 15.5817 19.5817 12 24 12C28.4183 12 32 15.5817 32 20Z" fill="black"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18 23.3137 20.6863 26 24 26ZM24 28C28.4183 28 32 24.4183 32 20C32 15.5817 28.4183 12 24 12C19.5817 12 16 15.5817 16 20C16 24.4183 19.5817 28 24 28Z" fill="black"/> </svg> }
                            </button>
                        </a>
                    )}
                </>
                <> 
                {auth.id ? (
                    <div onClick={auth.logout}>
                        <button type="button" class="text-black dark:text-white bg-gray-300 hover:bg-gray-400 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-fuchsia-800 ml-2">Logout</button>
                    </div> 
                   ) : (
                    <a href="/user/login">
                        <button type="button" class="text-black dark:text-white bg-gray-300 hover:bg-gray-400 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-fuchsia-800">Sign In</button>
                    </a>
                    )}
                </>
                
                <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span class="sr-only">Main Menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-stone-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-stone-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link to="/" className={`block py-2 px-3 md:p-0 rounded ${location.pathname === '/' ? 'text-fuchsia-700 dark:text-fuchsia-600 hover:text-fuchsia-400 dark:hover:text-fuchsia-800' : 'text-gray-700 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-500'}`} aria-current={location.pathname === '/' && 'page'}>
                            Home
                        </Link>
                    </li>
                    <li>
                    {adm ? (
                            <Link to="/tour" className={`block py-2 px-3 md:p-0 rounded ${location.pathname === '/tour' ? 'text-fuchsia-600 dark:text-fuchsia-600 hover:text-fuchsia-400 dark:hover:text-fuchsia-800' : 'text-gray-700 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-500'}`}>
                            Tours
                            </Link>
                        ) : (
                            <></>
                            )}
                    </li>
                    <li>
                        <Link to="/package" className={`block py-2 px-3 md:p-0 rounded ${location.pathname === '/package' ? 'text-fuchsia-600 dark:text-fuchsia-600 hover:text-fuchsia-400 dark:hover:text-fuchsia-800' : 'text-gray-700 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-500'}`}>
                        Packages
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}