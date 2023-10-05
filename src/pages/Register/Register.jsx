import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";


const Register = () => {
    return (
        <section className="container mx-auto">
            <NavBar />
            <div className="min-h-[calc(100vh-150px)] flex justify-center items-center">
                <div className="bg-gray-100 w-5/12 p-20 rounded-lg">
                    <h2 className="text-3xl text-center pb-20 font-semibold">Register an account</h2>
                    <form>
                        <div className="flex flex-col gap-y-2">
                            <label
                                className="font-bold"
                                htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                className="px-6 py-3 rounded" />
                        </div>
                        <div className="flex flex-col mt-4 gap-y-2">
                            <label
                                className="font-bold"
                                htmlFor="photoURL">Photo URL</label>
                            <input
                                type="text"
                                name="photoURL"
                                id="photoURL"
                                placeholder="Enter your profile image link"
                                className="px-6 py-3 rounded" />
                        </div>
                        <div className="flex flex-col mt-4 gap-y-2">
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
                        <div className="flex gap-x-2 mt-4 gap-y-2">
                            <input
                                type="checkbox"
                                name="terms"
                                id="terms"
                                placeholder="Enter your password"
                                className="px-6 py-3 rounded" />
                            <label
                                className=" text-sm text-gray-500"
                                htmlFor="terms">Accept <span className="font-semibold">Term & Conditions</span></label>
                        </div>
                        <button className="mt-8 p-4 bg-black text-white w-full rounded">Register</button>
                        <p className="font-semibold text-center mt-8">Already Have An Account? <Link to="/login" className="text-red-500">Login</Link></p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;