import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import auth from "../../firebase/firebase.config";


const Register = () => {

    const { createUser, updateInfo } = useContext(AuthContext);

    const [isDisabled, setIsDisabled] = useState(true);

    const handleTermsChecked = e => {
        setIsDisabled(!e.target.checked);
    }

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const isTermsChecked = e.target.terms.checked;
        console.log({ name, photoURL, email, password });
        if (isTermsChecked) {
            createUser(email, password)
                .then(res => {
                    if (auth.currentUser) {
                        updateInfo(name, photoURL)
                            .then(() => console.log('profile updated', res))
                            .catch(err => console.error(err))
                    }
                })
                .catch(err => console.error(err))
        }
        else {
            console.log('terms are not accepted');
        }
    }

    return (
        <section className="container mx-auto">
            <Helmet>
                <title>Register | The Dragon News</title>
            </Helmet>
            <NavBar />
            <div className="flex justify-center">
                <div className="bg-gray-100 w-5/12 p-10 rounded-lg">
                    <h2 className="text-3xl text-center pb-10 font-semibold">Register an account</h2>
                    <form onSubmit={handleRegister}>
                        <div className="flex flex-col gap-y-2">
                            <label
                                className="font-bold"
                                htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your full name"
                                className="px-6 py-3 rounded" />
                        </div>
                        <div className="flex flex-col mt-6 gap-y-2">
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
                        <div className="flex flex-col mt-6 gap-y-2">
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
                        <div className="flex gap-x-2 mt-4 gap-y-2">
                            <input
                                type="checkbox"
                                name="terms"
                                id="terms"
                                onChange={handleTermsChecked}
                                placeholder="Enter your password"
                                className="px-6 py-3 rounded" />
                            <label
                                className=" text-sm text-gray-500"
                                htmlFor="terms">Accept <span className="font-semibold">Term & Conditions</span></label>
                        </div>
                        <button type="submit" className="btn mt-8 p-4 bg-black text-white hover:bg-gray-800 w-full rounded" disabled={isDisabled}>Register</button>
                    </form>
                    <p className="font-semibold text-center mt-8">Already Have An Account? <Link to="/login" className="text-red-500">Login</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Register;