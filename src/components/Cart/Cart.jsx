import { useState } from "react"
import classNames from "classnames"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import { Icon, Price } from ".."
import { CartItem } from "./CartItem"
import { EmptyCart } from "./EmptyCart"
import "./Cart.css"
/**
 * @component
 * @example 
 * <Cart 
 *   totalCost={100} 
 *   items={{"item-slug": {id:"item-slug", name:"Item", price: 20.11}}}
 *   onCountChange={(item) => (count) => doSomething({...item,count})}
 * />
 *   
 * @param {number} totalCost Total cost of basket 
 * @param {{[key:slug]:IItem}} items Items in basket 
 * @callback onCountChange Total cost of basket 
 * @returns {JSX.Element}
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

