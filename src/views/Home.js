
export default function Home() {
    return (
        <section class="bg-gray-50 dark:bg-gray-900" style={{overflow: "hidden", width: "100vw", height: "calc(100vh - 72px)"}}>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-24 h-24 mr-12" src="/images/hot-face-svgrepo-com.svg" alt="logo"/>
                    <span class="text-8xl">EROTURISM</span>    
                </a>
            </div>
        </section>
    );
}