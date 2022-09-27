import classNames from "classnames"
import Button from "@mui/material/Button"
import "./TagSelector.css"
export const TagSelector = ({ options=[], value, onChange }) => {
  const select = (option) => () => onChange && onChange(option)
  
  return <div className="TagSelector">
    {options.map((option, index) =>
      <Button key={option} className={classNames("Tag", { selected: option === value })} onClick={select(option)}>
        {option}
      </Button>)}
  </div>
}