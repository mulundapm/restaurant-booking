import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import MainLayout from '../Layout/MainLayout'
import { menuItem } from '../component/manuItem'

function CartPage() {
    const{cart}= useContext(CartContext);

    const mergedCart = [];
    for (let i=0; i<cart.length; i++){
        mergedCart.push({
            ...cart[i],
            ...(menuItem.find((item)=> item.name === cart[i].name))
        })
    }
    console.log(mergedCart)

    const displayCartItem = (mergedCart) => mergedCart.map(item=>
        <article className='dish' id={item.id}>
            <div className="text-info">
                <h6 className='name'>{item.name}</h6>
                <p className='quantity'>Quantity: {item.quantity} </p>
                <p className='remark'>Remarks: {item.remarks}</p>
                <p className='price'>Price: ${Math.round(item.price*item.quantity*100)/100}</p>
            </div>
            <img src={item.img} alt={item.name} className='image'/>
            <hr className='solid'/>
        </article>
    )
    const initialValue = 0
    const totalPrice = mergedCart.reduce(
        (totalPrice, item) => totalPrice + Math.round(item.price*item.quantity*100)/100, initialValue,
    );

    return (
    <MainLayout>
        {displayCartItem(mergedCart)}
        <h5>Total Price: ${totalPrice}</h5>
    </MainLayout>
    )
}

export default CartPage