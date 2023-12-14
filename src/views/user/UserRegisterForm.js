import UserRegistrationForm from '../../components/form/UserRegistrationForm';

export default function UserRegisterForm() {
    return (
        <>
            <section class="bg-stone-200 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
                    <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img class="w-8 h-8 mr-2" src="/images/hot-face-svgrepo-com.svg" alt="logo"/>
                        EROTURISM    
                    </a>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <UserRegistrationForm />
                    </div>
                </div>
            </section>
        </>
    );
}