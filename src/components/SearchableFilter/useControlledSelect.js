/**
 * @typedef TUseSelect
 * @prop {(id: TItemKey) => boolean} isSelected
 * @prop {() => void} reset Resets selection state
 * @prop {(id: TItemKey) => (newValue: boolean) => void} onSelectionStatusChange Callback to be called when items selection status changed
 * 
 * @param {TItemKey[]} selectedItems Current selection state
 * @callback onChange 
 * @returns {{isSelected: (id)=>boolean}}
 */

export const useControlledSelect = (selectedItems, onChange) => {
  const isSelected = (id) => selectedItems.indexOf(id) !== -1
  const reset = () => onChange([])
  const onSelectionStatusChange = (id) => (newValue) => {
    const selected = new Set(selectedItems)
    newValue
      ? selected.add(id)
      : selected.delete(id)
    onChange(Array.from(selected))
  }
  return { isSelected, reset, onSelectionStatusChange }
}

// import {useState} from "react"
// export const useSelect = () => {
//   const [state, setState] = useState([])
//   const isSelected = (id) => state.indexOf(id) !== -1
//   const reset = () => setState([])
//   const onSelectionStatusChange = (id) => (newValue) => {
//     const selected = new Set(state)
//     newValue ? selected.add(id) : selected.delete(id)
//     setState(Array.from(selected))
//   }
//   return [state, {isSelected, reset, onSelectionStatusChange}]
// }