import { useState } from "react"
import FormGroup from "@mui/material/FormGroup"
import TextField from "@mui/material/TextField"
import { onInputValueChange, onKey } from "../../utils"
import { useSearch } from "./useSearch"
import { useControlledSelect } from "./useControlledSelect"
import { FilterListItem } from "./FilterListItem"
import "./SearchableFilter.css"
import { AutoSizer, List } from "react-virtualized"

export const SearchableFilter = ({ options = [], columns = ["name"], value = [], onChange, type, counts = {}, totalCount = 0 }) => {
  const [query, setQuery] = useState("")
  const results = useSearch(options, columns, query)

  const placeholder = ["Search", type].join(" ")
  const { isSelected, reset, onSelectionStatusChange } = useControlledSelect(value, onChange)
 
  const onSearchKeyUp = onKey("Enter", () => {
    if (results.length === 1) {
      setQuery("")
      onChange([options[results[0]].id])
    }
  })
  
  const rowRenderer = ({ index, key, style }) => {
    if (index === 0) {
      return <FilterListItem
        key={key}
        style={style}
        isSelected={!value.length}
        onChange={value.length ? reset : undefined}
        name="All"
        count={totalCount}
      />
    }
    const {id, name} = (query.length ? options[results[index-1]] : options[index-1]) || {}
    return <FilterListItem
      key={key}
      style={style}
      isSelected={isSelected(id)}
      onChange={onSelectionStatusChange(id)}
      name={name}
      count={counts[id]}
    />
  }
  const length = query.length ? results.length: options.length
  return <div className="SearchableFilter">
    <TextField
      onChange={onInputValueChange(setQuery)}
      onKeyUp={onSearchKeyUp}
      value={query}
      placeholder={placeholder}
    />
    <FormGroup className="FilterList">
      <AutoSizer>
        {({ height, width }) => (
          <List
            rowCount={length + 1}
            {...{ height, width, rowRenderer }}
            rowHeight={40}
          />
        )}
      </AutoSizer>
    </FormGroup>
  </div>
}