
export default function PostedComments({ whoComment ,rating, comment, nameFirstLetter }) {
    return (
        <div class="bg-gray-100 p-6 mb-12 mt-4 rounded-lg shadow-lg border boder-bg-gray-200 dark:bg-gray-800 dark:border-gray-700 max-w-5xl">
            <h2 class="text-lg mb-4 dark:text-gray-200 font-mono font-bold">Comments</h2>
            <div class="flex flex-col space-y-4 max-w-5xl min-w-full">
                <div class="bg-white p-4 rounded-lg shadow-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600">
                    <div class="flex flex-row justify-between">
                        <div>
                            <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-4">
                                <span class="font-medium text-gray-600 dark:text-gray-300">{nameFirstLetter}</span>
                            </div>
                            <span class="text-lg font-bold dark:text-gray-200 font-mono">{whoComment}</span>
                        </div>
                        <div>
                            <span class="text-gray-700 text-sm mb-2 dark:text-gray-100 font-mono">Rating:</span>
                            <span class="ml-2 text-sm mb-2 dark:text-gray-100 dark:bg-blue-600 bg-blue-600 rounded-lg p-1 font-mono text-white">{rating}</span>
                        </div>
                    </div>
                    <div class="border-t-2 border-gray-600 border-opacity-40 mt-4">
                        <p class="text-gray-700 dark:text-gray-100 mt-2 font-mono">{comment}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}