
export default function Home() {
    return (
        <div class="bg-stone-200 dark:bg-gray-900 flex flex-row justify-center items-center" style={{overflow: "hidden", width: "100vw", height: "calc(100vh - 72px)"}}>
            <div class=" bg-stone-300 dark:bg-gray-700 dark:bg-opacity-20 flex flex-row justify-center items-center" style={{ width: "100vw" }}>
                <div class="p-24 rounded-lg">
                    <h2 class="text-9xl font-mono font-thin italic text-amber-600 drop-shadow-md text-left">Beer</h2>
                    <h2 class="text-9xl font-mono font-thin italic text-amber-600 drop-shadow-md">Tourism</h2>
                    <p class="text-xl text-justify font-mono max-w-lg text-gray-500 drop-shadow-md mt-8">
                    Explore destinos cervejeiros com o Beer Tourism. Encontre pacotes de viagem, descubra pubs autênticos e experiências de degustação únicas. Planeje sua jornada cervejeira agora!
                    </p>
                </div>
                <div>
                    <img src="/images/home.png" alt="Logo" style={{ height: "65vh" }} />
                </div>
            </div>
        </div>
    );
}