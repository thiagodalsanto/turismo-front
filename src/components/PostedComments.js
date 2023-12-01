
export default function PostedComments({ whoComment ,rating, comment }) {
    return (
        <div class="bg-gray-100 p-6 mb-12 mt-4 rounded-lg shadow-lg border boder-bg-gray-200 dark:bg-gray-800 dark:border-gray-700 max-w-5xl">
            <h2 class="text-lg font-bold mb-4 dark:text-gray-200">Comments</h2>
            <div class="flex flex-col space-y-4 max-w-5xl min-w-full">
                <div class="bg-white p-4 rounded-lg shadow-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600">
                    <h3 class="text-lg font-bold dark:text-gray-200">{whoComment}</h3>
                    <span class="text-gray-700 text-sm mb-2 dark:text-gray-100">Rating:</span>
                    <span class="ml-2 text-gray-700 text-sm mb-2 dark:text-gray-100 dark:bg-gray-500 bg-gray-300 rounded-lg p-1">{rating}</span>
                    <p class="text-gray-700 dark:text-gray-100 mt-2">{comment}</p>
                </div>
            </div>
        </div>
    );
}