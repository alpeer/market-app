import classNames from "classnames"
import { useMemo } from "react"
import "./Price.css"
/**
 * @typedef IPriceProps
 * @prop {string} className Custom className
 * @prop {number} value Price value
 * 
 * @component Price component formats the price. 
 * @description Price
 * @param {IPriceProps}
 */
export const Price = ({ className, value = 0, ...props }) => {
  const formattedValue = useMemo(() =>
    !value && value !== 0
      ? ""
      : currencyFormatter.format(value)
    , [value])

  return <div className={classNames("Price", className)} {...props}>
    {formattedValue}
  </div>
}


// TODO: Move to utils/formatters.js in the future
// TODO: Use React.Provider for currency and language
const currencyFormatter = new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
