
export default function CommentForm() {
    return (
        <div class="flex items-center justify-center mt-16 mb-4 mx-8 w-[1024px] shadow-md border border-gray-200 rounded-lg dark:border-gray-800">
            <form class="w-full bg-gray-100 dark:bg-gray-800 rounded-lg px-4 pt-2 shadow-md">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <h2 class="font-bold px-4 pt-3 pb-2 text-gray-800 dark:text-gray-200 text-lg font-mono">Add a new comment</h2>
                    <div class="w-full px-3 mb-2 mt-2">
                        <textarea class="bg-gray-200 dark:bg-gray-700 rounded border border-gray-400 dark:border-gray-600 leading-normal resize-none w-full h-20 py-2 px-3 placeholder-gray-700 font-mono placeholder:font-mono dark:placeholder-gray-100 dark:text-gray-100 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea>
                    </div>
                    <div class="w-full flex items-start px-3">
                        <div class="flex items-start w-1/2 text-gray-700 mr-auto">
                            <div class="text-xs pt-px">
                               <input class="bg-gray-200 dark:bg-gray-700 rounded border border-gray-400 dark:border-gray-600 leading-normal resize-none w-full h-10 py-2 px-3 font-sans placeholder:font-mono placeholder-gray-700 dark:placeholder-gray-100 dark:text-gray-100 focus:outline-none focus:bg-white overflow-hidden" type="number" name="rating" placeholder='Rating' required/>
                            </div>
                        </div>
                        <div class="-mr-1">
                            <button type='submit' class="bg-transparen font-sans py-1 px-4 border rounded-lg tracking-wide mr-1 text-blue-500 border-blue-500 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300 h-10">Post Comment</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}