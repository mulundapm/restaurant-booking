import { GiHamburgerMenu } from "react-icons/gi";
import mainLogo from "../asset/Asset 16@4x.png"
import { BsCartPlus } from "react-icons/bs";
import './nav.css'
import { Link } from "react-router-dom";

function Nav(){
    return(
        <>
        <div className="nav">
            <GiHamburgerMenu className="react-icons hamburger nav-item" size={40}/>
            <Link to="/"><img
                className="nav-item"
                src={mainLogo}
                alt="navigation logo"
                width={150}
            /></Link>
            <BsCartPlus className="react-icons cart nav-item" size={40}/>

        </div>
        </>
    )}

export default Nav