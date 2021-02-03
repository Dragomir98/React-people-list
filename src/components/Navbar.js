import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link to="/">People</Link>
            <div className="links">              
                <Link to="/add">Add</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
     );
}
 
export default Navbar;