
export default function PackageCard({ imageURL, placeName, rating, price }) {
    return (
        <div class="w-full max-w-sm max-h-96 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-md">
            <a href="/package-detail">
                <img class="rounded-t-lg object-cover h-48 w-96" src={imageURL} alt="product" />
            </a>
            <div class="px-5 pb-5">
                <div class="pt-6">
                    <a href="/package-detail">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{placeName}</h5>
                    </a>
                </div>
                <div class="flex items-center mt-2.5 mb-5">
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{rating}</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                    <a href="/package-detail" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</a>
                </div>
            </div>
        </div>
    );
}