import { Count, Price } from "../.."
import { KeyCode } from "../../../utils/keyCodes"

export const CartItem = ({ name, price, count, onCountChange }) => {
  const onKeyUp = (e) => {
    switch (e.keyCode) {
      case KeyCode.Delete:
        onCountChange(0)
        break;
      case KeyCode.ArrowLeft:
        count > 1 && onCountChange(count - 1)
        break;
      case KeyCode.ArrowRight:
        onCountChange(count + 1)
        break;
      default:
        if (e.keyCode > 48 && e.keyCode < 58) {
          onCountChange(e.keyCode - 48)
        }
    }
  }
  return <div className="CartItem" tabIndex={1} onKeyUp={onKeyUp}>
    <div className="left">
      <div className="title"> {name} </div>
      <Price value={price} />
    </div>
    <Count name={name} value={count} onChange={onCountChange} />
  </div>
}
