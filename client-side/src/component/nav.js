import { GiHamburgerMenu } from "react-icons/gi";
import mainLogo from "../asset/Asset 16@4x.png"
import { BsCartPlus } from "react-icons/bs";
import './nav.css'
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Nav(){


    const [showHamburger, setShowHamburger] = useState(false)

    return(
        <>
        <div className="nav">
            <GiHamburgerMenu className="react-icons hamburger nav-item" size={40}  onClick={() =>setShowHamburger(!showHamburger)}/>
            <Link to="/"><img
                className="nav-item"
                src={mainLogo}
                alt="navigation logo"
                width={150}
            /></Link>
            <Link to="/cart"><BsCartPlus className="react-icons cart nav-item" size={40}/></Link>
            <div className="hamburgerMenu" style={{visibility: showHamburger? "visible": "hidden" }} >
                <button className="closeButton secondaryButton"  onClick={() =>setShowHamburger(!showHamburger)}><IoMdClose />Close</button>
                <img src={mainLogo} alt="Logo" width={150}/>
                <Link to="/ordering">
                    <h5>Order</h5>
                </Link>
                <Link to="/booking">
                    <h5>Reservation</h5>
                </Link>
                <Link to="/review">
                    <h5>Reviews</h5>
                </Link>
                <Link to="/about">
                    <h5>About</h5>
                </Link>
                <Link to="/contact">
                    <h5>Contact Us</h5>
                </Link>
            </div>
        </div>
        </>
    )}

export default Nav