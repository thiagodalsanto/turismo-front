
export default function CommentForm() {
    return (
        <div class="flex items-center justify-center mt-12 mb-4 mx-8 max-w-5xl min-w-5xl shadow-md border border-gray-200 rounded-lg dark:border-gray-800">
            <form class="w-full max-w-5xl min-w-5xl bg-gray-100 dark:bg-gray-800 rounded-lg px-4 pt-2 shadow-md">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <h2 class="px-4 pt-3 pb-2 text-gray-800 dark:text-gray-200 text-lg">Add a new comment</h2>
                    <div class="w-full md:w-full px-3 mb-2 mt-2">
                        <textarea class="bg-gray-200 dark:bg-gray-700 rounded border border-gray-400 dark:border-gray-600 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 dark:placeholder-gray-100 dark:text-gray-100 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea>
                    </div>
                    <div class="w-full md:w-full flex items-start px-3">
                        <div class="flex items-start w-1/2 text-gray-700 mr-auto">
                            <div class="text-xs md:text-sm pt-px">
                               <input class="bg-gray-200 dark:bg-gray-700 rounded border border-gray-400 dark:border-gray-600 leading-normal resize-none w-full h-10 py-2 px-3 font-medium placeholder-gray-700 dark:placeholder-gray-100 dark:text-gray-100 focus:outline-none focus:bg-white overflow-hidden" type="number" name="rating" placeholder='Rating' required/>
                            </div>
                        </div>
                        <div class="-mr-1">
                            <button type='submit' class="bg-gray-700 text-white font-medium py-1 px-4 border border-gray-800 rounded-lg tracking-wide mr-1 hover:bg-gray-600 dark:bg-gray-500 dark:hover:bg-gray-600 dark:text-black h-10">Post Comment</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}