import './heroSection.css'
import { menuItem } from './manuItem'
import React ,  { useState } from 'react'

function OrderDelivery(){
    const [filteredItems, setfilteredItems] = useState(menuItem)

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

    const [uniqueCategories, setuniqueCategories] = useState([])

    setuniqueCategories(menuItem.map(item =>{
        if (uniqueCategories.indexOf(item.category) === -1){
            uniqueCategories.push(item.category)
        }
    }))

 console.log(uniqueCategories)

    const dsiplayCategories = (categories) => categories.map(category =>
        <button className="pill secondaryButton" id={category} onClick={()=> showCategorisedItems(category)}>{category}</button>
    )

    return(
        <>
            <div className="ordering">
                <h3>Order for delivery!</h3>
                <div className="pill-container">
                    {/* {dsiplayCategories(uniqueCategories)} */}
                    <button className="pill secondaryButton" id='all' onClick={()=> showCategorisedItems('all')}>All</button>
                    <button className="pill secondaryButton" id='appetizers' onClick={()=> showCategorisedItems('appetizers')}>Appetizers</button>
                    <button className="pill secondaryButton" id='platters' onClick={()=> showCategorisedItems('platters')}>Platters</button>
                    <button className="pill secondaryButton" id='entrees' onClick={()=> showCategorisedItems('entrees')}>Entrees</button>
                    <button className="pill secondaryButton" id='salads' onClick={()=> showCategorisedItems('salads')}>Salads</button>
                    <button className="pill secondaryButton" id='sandwiches' onClick={()=> showCategorisedItems('sandwiches')}>Sandwiches</button>
                    <button className="pill secondaryButton" id='desserts' onClick={()=> showCategorisedItems('desserts')}>Desserts</button>
                    <button className="pill secondaryButton" id='beverages' onClick={()=> showCategorisedItems('beverages')}>Beverages</button>
                </div>
                <hr className="solid" />
                {displayItem(filteredItems)}
            </div>
        </>
    )
}

export default OrderDelivery