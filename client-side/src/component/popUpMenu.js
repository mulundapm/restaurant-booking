import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { CartContext} from '../context/CartContext';
import React, { useState , useContext } from "react";

function usePopUpMenu({selectedItem, setSelectedItem}){
    const {cart, setCart} =useContext(CartContext)

    let [itemQuantity, setItemQuanity] =useState(1)
    const [cartItem, setCartItem] =  useState({
        name: "",
        quantity: 1,
        remarks: ""
    })

    const addToCart = (item) =>{
        const newCartItem = {name: (item.name), quantity: itemQuantity, remarks: cartItem.remarks}
        setCartItem(newCartItem)
        setCart(prevCart => {
            const index = cart.map(e => e.name).indexOf(item.name);
            if (index !== -1) {
              const updatedCart = [...prevCart];
              updatedCart[index] = newCartItem;
              console.log(updatedCart);
              return updatedCart;
            } else {
              const updatedCart = [...prevCart, newCartItem];
              console.log(updatedCart);
              return updatedCart;
            }
          });
        }


        // const index = cart.map(e => e.name).indexOf(item.name)
        // setCart(prevCart =>{
        //     const cartToUpdate = [...prevCart]
        //     if (index !== -1){
        //         cartToUpdate[index] = newCartItem;
        //         console.log(cartToUpdate)
        //         return cartToUpdate;
        //     }else 
        //     console.log([cartToUpdate, newCartItem])
        //     return [cartToUpdate, newCartItem]
        // })

    // (cart.some(e => e.name === item.name)){
    //     console.log("test")
    // }
    const closePopUpMenu = () => {
        setSelectedItem(null)
        setItemQuanity(1);
        setCartItem({
            name: "",
            quantity: 1,
            remarks: ""
        })
    }

    const editQuantity = (e) =>{
        if (e.currentTarget.classList.contains('plus')){
            setItemQuanity(itemQuantity += 1) ;
        }else
        setItemQuanity(itemQuantity -= 1)
    }

    if(selectedItem)
    return(
    <div className="popup-menu">
        <div className="popup-menu text-container">
            <button className="closeButton secondaryButton" onClick={closePopUpMenu}><IoMdClose />Close</button>
            <img src={selectedItem.img} alt={selectedItem.name} className='image center' width={50}/>
            <h1 className='name green'>{selectedItem.name}</h1>
            <p className='description'>{selectedItem.description} </p>
            <div className="itemQuantity">
                <IconContext.Provider value={{ className: "global-class-name", size: "3em"  }}>
                    <p className='price'>${Math.round(selectedItem.price*itemQuantity*100)/100}</p>
                    <button className="minus" onClick={editQuantity} disabled={itemQuantity <= 1}><CiCircleMinus /></button>
                    <h6 className="quantity" >{itemQuantity}</h6>
                    <button className="plus" onClick={editQuantity}><CiCirclePlus /></button>
                </IconContext.Provider>
            </div>
            <label htmlFor="remarks" >Remarks</label><br />
            <textarea type="textarea" name="remarks" id='remarks' value={cartItem.remarks} onChange={(e) => setCartItem({...cartItem, remarks: e.target.value})}/>
            <button className='primaryButton center' onClick={()=>addToCart(selectedItem)}>Add to basket</button>
        </div>
</div>)
    return null
}

export default usePopUpMenu