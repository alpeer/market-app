import { useState } from "react"
import classNames from "classnames"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import { Icon, Price } from ".."
import { CartItem } from "./helpers/CartItem"
import { EmptyCart } from "./helpers/EmptyCart"
import "./Cart.css"
/**
 * @component Cart
 * @example
 * <Cart
 *   totalCost={100} 
 *   items={{"item-slug": {id:"item-slug", name:"Item", price: 20.11}}}
 *   onCountChange={(item) => (count) => doSomething({...item,count})}
 * />
 * @typedef {Object} ICartItem 
 * @property {string|number} id
 * @property {string} name
 * @property {number} price
 * @property {number} count
 * 
 * @typedef {Object.<string|number, ICartItem>} ICartItems

 * 
 * @typedef {Object} ICartProps
 * @property {number} totalCost
 * @property {TCartItems} items
 * 
 * @param {ICartProps}

 */

export const Cart = ({totalCost, items = {}, onCountChange}) => {
  const [popupActive, setPopupActive] = useState(false)
  const togglePopup = () => setPopupActive((state) => !state)
  
  return <>
    <Button
      onClick={togglePopup}
      className={classNames("cart-button", { active: popupActive })}
    >
      <Icon icon="Cart" />
      <Price className="total-price" value={totalCost}/>
    </Button>

    <div className={classNames("Cart Popup", { active: popupActive })}>
      {popupActive && <>
        <List className="CartItemList">
          {Object.keys(items).length === 0
            ? <EmptyCart/>
            : Object.entries(items).map(([id, item]) =>
                <CartItem key={id} {...item} onCountChange={onCountChange(item)} />)}
        </List>
        
        <div className="line">
          <Price className="total-price" value={totalCost}/>
        </div>
      </>}
    </div>
  </>
}
/*
  Code seems dirty here,
  CartPopup can be separated as different component
*/

