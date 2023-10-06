import { Outlet } from "react-router-dom";
import Time from "../components/Time/Time";
import Logo from "../components/Logo/Logo";


const Root = () => {


    return (
        <div className="font-poppins">
            <Time></Time>
            <Logo></Logo>
            <Outlet />
        </div>
    );
};

export default Root;