import './heroSection.css' 
import React ,  { useEffect, useState } from 'react'
import usePopUpMenu from './popUpMenu';
import axios from "axios"

function OrderDelivery(){
    const [filteredItems, setfilteredItems] = useState([])
    const [uniqueCategories, setuniqueCategories] = useState([])
    const [focus, setFocus] = useState("all")
    const [selectedItem, setSelectedItem] = useState(null)
    const [menuItems, setMenuItems] = useState([]);

    
    const axiosFetchData = async(processing) =>{
        await axios.get('http://localhost:4000/menuitems')
        .then(res =>{
            if (processing) {
                setMenuItems(res.data);
                setfilteredItems(res.data);
            }
        })
        .catch(err => console.log(err))
    }

    // this is just to prevent it from running twice
    useEffect(() => {
        let processing = true;
        axiosFetchData(processing);

        return () => {
        processing = false
        }
    }, [])
    
    const displayItem = (items) => items.map(item =>
        <article className='dish' id={item.id} onClick={() => itemClicked(item)}>
            <div className="text-info">
                <h6 className='name'>{item.name}</h6>
                <p className='description'>{item.description} </p>
                <p className='price'>${item.price}</p>
            </div>
            {/* <img src={item.img} alt={item.name} className='image'/> */}
            <hr className='solid'/>
        </article>
    )

    const showCategorisedItems = (category) =>{
        if (category === 'all'){
            setfilteredItems(menuItems)
        }else
        setfilteredItems(menuItems.filter((item) => (item.category === category)))
    }

    useEffect(() => {
        const categories = ['all', ...new Set(menuItems.map(item => item.category))];
        setuniqueCategories(categories);
    }, [menuItems]);

    const displayCategories = (categories) => categories.map(category =>
        <button className={focus === category? "pill secondaryButton selected" : "pill secondaryButton"} id={category} onClick={() => categoryClicked(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</button>
    )

    const categoryClicked = (category) =>{
        showCategorisedItems(category)
        setFocus(category);
    }

    const itemClicked = (item) =>{
        setSelectedItem(item);
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
                {usePopUpMenu({ selectedItem, setSelectedItem })}
            </div>
        </>
    )
}

export default OrderDelivery