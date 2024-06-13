import { GiHamburgerMenu } from "react-icons/gi";
import mainLogo from "../asset/Asset 16@4x.png"
import { BsCartPlus } from "react-icons/bs";
import './nav.css'
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function Nav(){
    const closePopUpMenu = () => {
        
    }

    const showPopUpMenu = () => {
        console.log()
    }
    return(
        <>
        <div className="nav">
            <GiHamburgerMenu className="react-icons hamburger nav-item" size={40} onClick={showPopUpMenu}/>
            <Link to="/"><img
                className="nav-item"
                src={mainLogo}
                alt="navigation logo"
                width={150}
            /></Link>
            <BsCartPlus className="react-icons cart nav-item" size={40}/>
            <div className="hamburgerMenu">
            <button className="closeButton secondaryButton" onClick={closePopUpMenu}><IoMdClose />Close</button>
                <img src={mainLogo} alt="Logo" width={150}/>
                <h5>Order</h5>
                <h5>Reservation</h5>
                <h5>Reviews</h5>
                <h5>About</h5>
                <h5>Contact Us</h5>
            </div>
        </div>
        </>
    )}

export default Nav