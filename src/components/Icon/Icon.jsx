import ArrowRight from "../../assets/icons/arrow-right.svg"
import Cart from "../../assets/icons/cart.svg"
import Check from "../../assets/icons/check.svg"
import Check2 from "../../assets/icons/check-2.svg"
import Cross from "../../assets/icons/cross.svg"
import Minus from "../../assets/icons/minus.svg"
import Plus from "../../assets/icons/plus.svg"
import Remove from "../../assets/icons/remove.svg"

const icons = {ArrowRight, Cart, Check, Plus, Minus, Check2, Cross, Remove}

export const Icon = ({ icon, size = 24, ...props }) =>
  <img src={icons[icon] || undefined} height={size} width={size} alt={icon + " icon"} {...props} />