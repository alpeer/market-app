import { KeyCode } from "./keyCodes"
export { default as config } from "../config"

export const onKey = (key, callback) => (e) => {
  if (e.keyCode === KeyCode[key]) {
    e.stopPropagation();
    callback(e)
  }
  return e
}

export const onInputValueChange = (callback) => (e) => callback(e.target.value)
