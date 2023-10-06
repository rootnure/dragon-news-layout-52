import { Link } from 'react-router-dom';
import logo from '/logo.png';


const Logo = () => {
    return (
        <div className="flex justify-center mt-8 mb-4">
            <Link to="/" title='Home'><img src={logo} alt="Website Logo" /></Link>
        </div>
    );
};

export default Logo;