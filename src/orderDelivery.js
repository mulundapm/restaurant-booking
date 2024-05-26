import './heroSection.css'
import greekSalad from  './asset/easy_caesar_salad_64317_16x9.jpg'
import brushetta from './asset/warm-bruschetta-1.jpg'
import grilledFish from './asset/Greek-Style-Grilled-Fish-1.jpg'

function OrderDelivery(){
    return(
        <>
            <div className="ordering">
                <h3>Order for delivery!</h3>
                <div className="pill-container">
                    <button className="pill secondaryButton" id='lunch'>Lunch</button>
                    <button className="pill secondaryButton" id='mains'>Mains</button>
                    <button className="pill secondaryButton" id='desserts'>Desserts</button>
                    <button className="pill secondaryButton" id='alacarte'>A La Carte</button>
                    <button className="pill secondaryButton" id='specials'>Specials</button>
                </div>
                <hr className="solid" />
                <article className='dish' id='greekSalad'>
                    <div className="text-info">
                        <h6 className='name'>Greek Salad</h6>
                        <p className='description'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <p className='price'>$12.99</p>
                    </div>
                    <img src={greekSalad} alt="Greek Salad" className='image'/>
                    <hr className='solid'/>
                </article>
                <article className='dish' id='Brushetta'>
                    <div className="text-info">
                        <h6 className='name'>Brushetta</h6>
                        <p className='description'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta. </p>
                        <p className='price'>$7.99</p>
                    </div>
                    <img src={brushetta} alt="Brushetta" className='image'/>
                    <hr className='solid'/>
                </article>
                <article className='dish' id='grilledFish'>
                    <div className="text-info">
                        <h6 className='name'>Grill Fish</h6>
                        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quos debitis tempore ullam quae corrupti ipsum, eveniet esse ipsa magnam. </p>
                        <p className='price'>$19.99</p>
                    </div>
                    <img src={grilledFish} alt="Grill Fish" className='image'/>
                    <hr className='solid'/>
                </article>
            </div>
        </>
    )
}

export default OrderDelivery