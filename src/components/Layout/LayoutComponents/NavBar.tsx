import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav>
            <ul className="flex items-center gap-8">
                <li>
                    <Link to={'/'}><button className="nav-link-white">Browse</button></Link>
                </li>
                <li> 
                    <Link to={'/library'}><button className="nav-link-white">Categories</button></Link>
                </li>
                <li>  
                    <Link to={'/'}><button className="nav-link-white">FAQ</button></Link>
                </li>
            </ul>
        </nav>
    );
};