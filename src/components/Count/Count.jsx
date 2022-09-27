import { useMemo } from "react"
import { IconButton } from ".."
import "./Count.css"
/**
 * @typedef ICountProps
 * @prop {string} name Name of element to be added/removed (for tooltip)
 * @prop {number} value Current value
 * @prop {function} onChange Callback
 * 
 * @component Count
 * @param {ICountProps}
 */
export const Count = ({name, value=0, onChange}) => {
  const { increment, decrement, removeIcon } = useMemo(() => ({
      increment: () => onChange(value + 1),
      decrement: () => value > 0 && onChange(value - 1),
      removeIcon: value === 1
        ? "Remove"
        : "Minus"  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [value])

  
  return <div className="Count">
    {value > 0 && <>
      <IconButton icon={removeIcon} size={12} alt={`Remove "${name}"`} onClick={decrement} />
      <div className="value"> {value} </div>
    </>}
    <IconButton icon="Plus" size={12} alt={`Add "${name}"`} onClick={increment}/>
  </div>
}