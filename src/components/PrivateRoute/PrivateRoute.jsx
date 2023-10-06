import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-bars loading-lg text-blue-400"></span>;
    }

    if (!user) {
        return <Navigate to="/login"></Navigate>
    }
    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoute;