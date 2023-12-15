
export default function CartItem({ destino, img, valor, descricao }) {
    return (
        <div class="flex flex-wrap items-center justify-center mb-6 -mx-4 md:mb-8">
            <div class="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                <div class="flex flex-wrap items-center -mx-4">
                    <div class="w-full px-4 mb-3 md:w-1/3">
                        <div class="w-full h-96 md:h-24 md:w-24">
                            <img src={img} alt="" class="object-cover w-full h-full"/>
                        </div>
                    </div>
                    <div class="w-2/3 px-4">
                        <p class="mb-2 text-xl font-bold dark:text-gray-400">{destino}</p>
                        <p class="text-gray-500 dark:text-gray-400 ">{descricao}</p>
                    </div>
                </div>
            </div>
            <div class="px-4 text-right md:w-1/6 lg:w-2/12 flex justify-end w-full">
                <p class="text-lg font-bold text-blue-500 dark:text-gray-400">${valor}</p>
            </div>
        </div>
    );
}