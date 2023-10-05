import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";


const LogIn = () => {
    return (
        <section className="container mx-auto">
            <NavBar />
            <div className="h-[calc(100vh-150px)] flex justify-center items-center">
                <div className="bg-gray-100 w-5/12 p-20 rounded-lg">
                    <h2 className="text-3xl text-center pb-20 font-semibold">Login to your account</h2>
                    <form>
                        <div className="flex flex-col gap-y-2">
                            <label
                                className="font-bold"
                                htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email address"
                                className="px-6 py-3 rounded" />
                        </div>
                        <div className="flex flex-col mt-4 gap-y-2">
                            <label
                                className="font-bold"
                                htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                className="px-6 py-3 rounded" />
                        </div>
                        <button className="mt-8 p-4 bg-black text-white w-full rounded">Login</button>
                        <p className="font-semibold text-center mt-8">Don&apos;t Have An Account? <Link to="/register" className="text-red-500">Register</Link></p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LogIn;