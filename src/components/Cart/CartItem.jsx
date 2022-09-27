import { Count, Price } from ".."

export const CartItem = ({ name, price, count, onCountChange }) => 
  <div className="CartItem">
    <div className="left">
      <div className="title"> {name} </div>
      <Price value={price} />
    </div>
    <Count name={name} value={count} onChange={onCountChange} />
  </div>

