import { Link } from "react-router-dom";

const Navbar = ({cart}) => {
    return ( 
        <>
        <div className="navBar">
            <div className="logo"><Link to={"/"}>LOGO</Link></div>
            <div className="navLinks">
                <ul>
                    <Link to={"/"}><li>home</li></Link>
                    <Link to={"about"}><li>about</li></Link>
                    <Link to={"contact"}><li>contact</li></Link>
                </ul>
            </div>
            <div className="navCart"><h2>{cart}</h2> CART</div>
        </div>
        </>
     );
}
 
export default Navbar;