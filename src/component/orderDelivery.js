import './heroSection.css'
import { menuItem } from './manuItem'
import React ,  { useEffect, useState } from 'react'

function OrderDelivery(){
    const [filteredItems, setfilteredItems] = useState(menuItem)
    const [uniqueCategories, setuniqueCategories] = useState([])
    const [focus, setFocus] = useState("all")
    const [selectedItem, setSelectedItem] = useState(null)

    const displayItem = (items) => items.map(item =>
        <article className='dish' id={item.id} onClick={() => itemClicked(item)}>
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

    const displayCategories = (categories) => categories.map(category =>
        <button className={focus === category? "pill secondaryButton selected" : "pill secondaryButton"} id={category} onClick={() => categoryClicked(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</button>
    )

    const categoryClicked = (category) =>{
        showCategorisedItems(category)
        setFocus(category);
    }

    const itemClicked = (item) =>{
        setSelectedItem(item)
    }

    const displayPopUpMenu = (item) => {
        if(selectedItem) {
        return(
        <div className="popup-menu">
            <div className="popup-menu text-container">
                <h6 className='name'>{item.name}</h6>
                <p className='description'>{item.description} </p>
                <p className='price'>${item.price}</p>
                <button onClick={closePopUpMenu}>Close</button>
            </div>
    </div>)
        }return null
    }

    const closePopUpMenu = () => {
        setSelectedItem(null)
    }

    return(
        <>
            <div className="ordering">
                <h3>Order for delivery!</h3>
                <div className="pill-container">
                    {displayCategories(uniqueCategories)}
                </div>
                <hr className="solid" />
                {displayItem(filteredItems)}
                {displayPopUpMenu(selectedItem)}
            </div>
        </>
    )
}

export default OrderDelivery