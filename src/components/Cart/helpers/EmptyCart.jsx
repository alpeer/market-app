import emptyCart from "../../../assets/undraw_empty_cart_co35.svg"

export const EmptyCart = () => 
  <div className="EmptyCart">
    <img alt="Empty Cart Illustration" src={emptyCart} width="100%" />
    <span>
      Your cart is empty, add some products by clicking Add button
    </span>
  </div>
