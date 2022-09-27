import  Button from "@mui/material/Button"
import { Count, Price } from ".."
import { config } from "../../utils"
import { productCardConnector } from "./productCardConnector"

const ProductCard = ({ img=config.UI.productImagePlaceholder, price, name, slug, count = 0, onCountChange }) => {
  const add = () => onCountChange(1)

  return <div className="ProductCard">
    <div className="image" style={{backgroundImage:`url(${img})`}}></div>
    <Price value={price} />
    <div className="title"> {name} </div>
    {count === 0
      ? <Button className="Add" onClick={add}> Add </Button>
      : <Count value={count} name={name} onChange={onCountChange} />
    }
  </div>
}
export default productCardConnector(ProductCard)

