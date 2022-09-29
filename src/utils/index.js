import { KeyCode } from "./keyCodes"
import { toast as notify } from 'react-toastify'
export { default as config } from "../config"

export { notify }
export const onKey = (key, callback) => (e) => {
  if (e.keyCode === KeyCode[key]) {
    e.stopPropagation();
    callback(e)
  }
  return e
}
/**
 * @example
 * <TextField onChange={onInputValueChange(setValue)} value={value}/>
 * @param callback callback function to handle value
 */
export const onInputValueChange = (callback) => (e) => callback(e.target.value)