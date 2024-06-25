import "./navbar.css";

const Navbar=()=>{
    return(
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">lamabooking</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
    )
};
export default Navbar;
        // style={{background:'red', width:"100%",maxWidth:"1024px"}}