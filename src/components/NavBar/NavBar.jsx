import { useContext } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate("/login");
            })
            .catch(err => console.error(err))
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        {
            user &&
            <>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/bookmarks">Bookmarks</NavLink></li>
            </>
        }
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </>

    return (
        <div className="navbar py-6">
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
                <ul className="menu menu-horizontal px-1 gap-x-2 font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-x-2">
                {
                    user?.photoURL ?
                        <Link to="/profile" title="Profile"><img src={user.photoURL} alt={`Profile Image of user ${user?.displayName}`} className='h-11 rounded-full' /></Link> :
                        <Link to="/register" title='Register/SignUp'><BiUserCircle className='text-5xl'></BiUserCircle></Link>
                }
                {
                    user ?
                        <button onClick={handleLogOut} className="bg-black hover:bg-gray-600 duration-100 text-white px-6 py-2 font-semibold rounded-md">Sign Out</button> :
                        <Link to="/login" title="Log In"><button className="bg-black hover:bg-gray-600 duration-100 text-white px-6 py-2 font-semibold rounded-md">LogIn</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;