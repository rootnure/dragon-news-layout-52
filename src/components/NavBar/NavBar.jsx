import { BiUserCircle } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-x-2">
                <BiUserCircle className='text-5xl'></BiUserCircle>
                <Link className="bg-black hover:bg-gray-600 duration-100 text-white px-6 py-2 font-semibold" to="/login">LogIn</Link>
            </div>
        </div>
    );
};

export default NavBar;