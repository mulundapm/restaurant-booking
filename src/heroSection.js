import restaurantImage from './asset/cropped-restaurant.jpeg'
import './heroSection.css'
import { Link } from "react-router-dom";

function HeroSection(){
    return(
        <>
        <div className="hero">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <div className="container">
                <em>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</em>
                <img src={restaurantImage} alt="Restaurant"  className='restaurantImg'/>
            </div>
            <button className='primaryButton'><Link to="/booking">Reserve a table</Link></button>
        </div>
        </>
    )
}
export default HeroSection