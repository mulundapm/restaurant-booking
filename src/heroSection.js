import restaurantImage from './asset/cropped-restaurant.jpeg'
import './heroSection.css'

function HeroSection(){
    return(
        <>
        <div className="hero">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <div className="container">
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <img src={restaurantImage} alt="Restaurant image"  className='restaurantImg'/>
            </div>
            <button>Reserve a table</button>
        </div>
        </>
    )
}
export default HeroSection