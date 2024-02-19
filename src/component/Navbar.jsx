const Navbar = ({cart}) => {
    return ( 
        <>
        <div className="navBar">
            <div className="logo">LOGO</div>
            <div className="navLinks">
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </div>
            <div className="navCart"><h2>{cart}</h2> CART</div>
        </div>
        </>
     );
}
 
export default Navbar;