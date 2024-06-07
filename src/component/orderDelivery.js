import './heroSection.css'
import { menuItem } from './manuItem'
import React ,  { useEffect, useState } from 'react'

function OrderDelivery(){
    const [filteredItems, setfilteredItems] = useState(menuItem)
    const [uniqueCategories, setuniqueCategories] = useState([])

    const displayItem = (items) => items.map(item =>
        <article className='dish' id={item.id}>
            <div className="text-info">
                <h6 className='name'>{item.name}</h6>
                <p className='description'>{item.description} </p>
                <p className='price'>${item.price}</p>
            </div>
            <img src={item.img} alt={item.name} className='image'/>
            <hr className='solid'/>
        </article>
    )

    const showCategorisedItems = (category) =>{
        if (category === 'all'){
            setfilteredItems(menuItem)
        }else
        setfilteredItems(menuItem.filter((item) => (item.category === category)))
    }

    useEffect(() => {
        const categories = ['all', ...new Set(menuItem.map(item => item.category))];
        setuniqueCategories(categories);
    }, []);

    const dsiplayCategories = (categories) => categories.map(category =>
        <button className="pill secondaryButton" id={category} onClick={()=> showCategorisedItems(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</button>
    )

    return(
        <>
            <div className="ordering">
                <h3>Order for delivery!</h3>
                <div className="pill-container">
                    {dsiplayCategories(uniqueCategories)}
                </div>
                <hr className="solid" />
                {displayItem(filteredItems)}
            </div>
        </>
    )
}

export default OrderDelivery