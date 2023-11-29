
export default function NotFound() {
    return (
        <section class="h-screen w-full flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-800">
            <h1 class="text-9xl font-extrabold text-black dark:text-white tracking-widest">404</h1>
            <div class="bg-teal-600 px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button class="mt-5">
                <a href="/" class="relative inline-block text-sm font-medium text-teal-600 group active:text-teal-500 focus:outline-none focus:ring">
                    <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-teal-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>
                    <span class="relative block px-8 py-3 bg-gray-50 dark:bg-gray-800 border border-current">
                        <a href="/">Go Home</a>
                    </span>
                </a>
            </button>
        </section>
    );
}