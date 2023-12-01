
export default function TourForm() {
    return (
        <section class="bg-gray-100 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
                <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-8 h-8 mr-2" src="/images/hot-face-svgrepo-com.svg" alt="logo"/>
                    EROTURISM    
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                            New Tour
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="/">
                            <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tour Name</label>
                                <input type="text" name="name" id="name" class="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500 mb-6" placeholder="Tour Name" required=""/>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tour Categorie</label>
                                <input type="text" name="name" id="name" class="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500" placeholder="Tour Categorie" required=""/>
                            </div>
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tour Description</label>
                                <textarea type="text" name="tour" class="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500 mb-6" placeholder="Tour description" required=""/>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tour Image</label>
                                <textarea type="text" name="tour" class="mt-2 bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500" placeholder="Tour URL" required=""/>
                            </div>
                            <button type="submit" class="w-full text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800">Create Tour</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}