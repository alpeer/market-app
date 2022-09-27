import FormControl  from "@mui/material/FormControl"
import FormControlLabel  from "@mui/material/FormControlLabel"
import Radio  from "@mui/material/Radio"
import MuiRadioGroup  from "@mui/material/RadioGroup"
import { onInputValueChange } from "../../utils"
import { Icon } from "../Icon/Icon"
import "./RadioGroup.css"
/**
 * @typedef TRadioItem
 * @prop {string|number} id
 * @prop {string} label
 * 
 * @typedef IRadioGroupProps
 * @prop {TRadioItem[]} options Options for the radio group
 * @prop {string} value Current value
 * @prop {number} onChange Callback
 * 
 * @component RadioGroup
 * @param {IRadioGroupProps}
 */
export const RadioGroup = ({ options=[], value, onChange }) =>
  <FormControl>
    <MuiRadioGroup
      className="RadioGroup"
      aria-labelledby="radio-group"
      value={value}
      onChange={onInputValueChange(onChange)}
      name="radio-buttons-group"
    >
      {options.map(({ id, label }) =>
        <FormControlLabel key={id} value={id} control={<Radio checkedIcon={<Icon icon="Check" size={10} />} icon={<Icon icon="Check" size={0} />} />} label={label} />)}
    </MuiRadioGroup>
  </FormControl>