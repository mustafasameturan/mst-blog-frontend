import Button from "~/components/button/index.jsx";

export default function AdminLogin(){
    return(
        <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center px-2 py-0 pt-6 pb-28 lg:pb-32">
                    <div className="w-full border border-secondary shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                                Admin Login
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="w-full border border-primary bg-grey-lightest px-5 py-2 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:border-secondary" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="w-full border border-primary bg-grey-lightest px-5 py-2 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:border-secondary" />
                                </div>
                                <div className="flex items-center justify-center h-16">
                                    <Button
                                        variant="primary-small"
                                        type="submit"
                                        as="button"
                                    >
                                        Login
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    )
}