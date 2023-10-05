import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center flex flex-col justify-center h-screen items-center text-gray-300 font-bold">
            <Helmet>
                <title>Error!!!</title>
            </Helmet>
            <p className="text-5xl h-[calc(100vh-70px)] flex items-center">Oops!!! Something went wrong...</p>
            <Link to="/">
                <button className="btn">Go To Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;