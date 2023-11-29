import CartItem from "../components/CartItem";

export default function CartPage() {
    return (
        <section class="flex items-center bg-stone-200 lg:h-screen font-poppins dark:bg-gray-700 ">
            <div class="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
                <div class="p-8 bg-gray-50 dark:bg-gray-800">
                    <h2 class="mb-8 text-4xl font-bold dark:text-gray-400">Your Cart</h2>
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
                            <div class="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                                <div class="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                                    <h2 class="font-bold text-gray-500 dark:text-gray-400">Product name</h2>
                                </div>
                                <div class="hidden px-4 lg:block lg:w-2/12">
                                    <h2 class="font-bold text-gray-500 dark:text-gray-400">Price</h2>
                                </div>
                                <div class="hidden md:block px-4 md:w-1/6 lg:w-2/12 ">
                                    <h2 class="font-bold text-gray-500 dark:text-gray-400">Quantity</h2>
                                </div>
                                <div class="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12 ">
                                    <h2 class="font-bold text-gray-500 dark:text-gray-400"> Subtotal</h2>
                                </div>
                            </div>
                            <div class="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">
                                <CartItem productImage={"https://encurtador.com.br/pJX45"} productName="Porto, Portugal" productCategorie="Europe" price="599.00" priceTotal="599.00" />
                                <CartItem productImage={"https://encurtador.com.br/bsGQY"} productName="Ghent, Belgium" productCategorie="Europe" price="599.00" priceTotal="599.00" />
                            </div>
                            <div class="flex flex-wrap items-center gap-4">
                                <span class="text-gray-700 dark:text-gray-400">Apply Coupon</span>
                                <input type="text" class="flex-1 px-8 py-4 font-normal placeholder-gray-300 border dark:border-gray-700 dark:placeholder-gray-500 md:flex-none md:mr-6 dark:text-gray-400 dark:bg-gray-800" placeholder="x304k45" required=""/>
                                <button class="flex-1 inline-block px-8 py-4 font-bold text-center text-gray-100 bg-blue-500 rounded-md hover:bg-blue-600 md:flex-none">Apply</button>
                            </div>
                        </div>
                        <div class="w-full px-4 xl:w-4/12">
                            <div class="p-6 border border-blue-100 dark:bg-gray-900 dark:border-gray-900 bg-blue-50 md:p-8">
                                <h2 class="mb-8 text-3xl font-bold text-gray-700 dark:text-gray-400">Order Summary</h2>
                                <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
                                    <span class="text-gray-700 dark:text-gray-400">Subtotal</span>
                                    <span class="text-xl font-bold text-gray-700 dark:text-gray-400 ">$99</span>
                                </div>
                                <div class="flex items-center justify-between pb-4 mb-4 ">
                                    <span class="text-gray-700 dark:text-gray-400 ">Shipping</span>
                                    <span class="text-xl font-bold text-gray-700 dark:text-gray-400 ">Free</span>
                                </div>
                                <div class="flex items-center justify-between pb-4 mb-4 ">
                                    <span class="text-gray-700 dark:text-gray-400">Order Total</span>
                                    <span class="text-xl font-bold text-gray-700 dark:text-gray-400">$99.00</span>
                                </div>
                                <h2 class="text-lg text-gray-500 dark:text-gray-400">We offer:</h2>
                                <div class="flex items-center mb-4 ">
                                    <a href="/">
                                        <img src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png" alt="" class="object-cover h-16 mr-2 w-26"/>
                                    </a>
                                    <a href="/">
                                        <img src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png" alt="" class="object-cover h-16 mr-2 w-26"/>
                                    </a>
                                    <a href="/">
                                        <img src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png" alt="" class="object-cover h-16 mr-2 w-26"/>
                                    </a>
                                </div>
                                <div class="flex items-center justify-between ">
                                    <button class="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}