import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-poppins">
            <Outlet />
        </div>
    );
};

export default Root;