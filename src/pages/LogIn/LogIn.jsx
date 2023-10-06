import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const LogIn = () => {

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(() => {
                navigate("/");
            })
            .catch(err => console.error(err))
    }

    return (
        <section className="container mx-auto">
            <Helmet>
                <title>Login | The Dragon News</title>
            </Helmet>
            <NavBar />
            <div className="flex justify-center">
                <div className="bg-gray-100 w-5/12 p-10 rounded-lg">
                    <h2 className="text-3xl text-center pb-10 font-semibold">Login to your account</h2>
                    <form onSubmit={handleLogIn}>
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
                        <div className="flex flex-col mt-6 gap-y-2">
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
                        <button type="submit" className="mt-8 p-4 bg-black text-white w-full rounded">Login</button>
                    </form>
                    <p className="font-semibold text-center mt-8">Don&apos;t Have An Account? <Link to="/register" className="text-red-500">Register</Link></p>
                </div>
            </div>
        </section>
    );
};

export default LogIn;