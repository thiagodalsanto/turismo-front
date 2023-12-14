
export default function CartItem({ productImage, productName, productCategorie, price, priceTotal }) {
    return (
        <div class="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
            <div class="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                <div class="flex flex-wrap items-center -mx-4">
                    <div class="w-full px-4 mb-3 md:w-1/3">
                        <div class="w-full h-96 md:h-24 md:w-24">
                            <img src={productImage} alt="" class="object-cover w-full h-full"/>
                        </div>
                    </div>
                    <div class="w-2/3 px-4">
                        <h2 class="mb-2 text-xl font-bold dark:text-gray-400">{productName}</h2>
                        <p class="text-gray-500 dark:text-gray-400 ">{productCategorie}</p>
                    </div>
                </div>
            </div>
            <div class="hidden px-4 lg:block lg:w-2/12">
                <p class="text-lg font-bold text-blue-500 dark:text-gray-400">${price}</p>
            </div>
            <div class="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                <div class="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md dark:border-gray-700 ">
                    <button class="py-2 hover:text-gray-700 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                        </svg>
                    </button>
                    <input type="number" class="w-12 px-2 py-4 text-center border-0 rounded-md dark:bg-gray-800 bg-gray-50 dark:text-gray-400 md:text-right" placeholder="1"/>
                    <button class="py-2 hover:text-gray-700 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                <p class="text-lg font-bold text-blue-500 dark:text-gray-400">${priceTotal}</p>
            </div>
        </div>
    );
}