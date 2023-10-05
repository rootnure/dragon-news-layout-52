import { Outlet } from "react-router-dom";
import Time from "../components/Time/Time";


const Root = () => {


    return (
        <div className="font-poppins">
            <Time></Time>
            <Outlet />
        </div>
    );
};

export default Root;