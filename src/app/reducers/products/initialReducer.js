import { getGridView } from "./filterSortReducer"
import { getPagination } from "./paginationReducer"

export default (state, { payload: items }) => {

  let { tags, itemTypes } = items.reduce((o, item) => {
    o.itemTypes.add(item.type)
    o.tags.add(...item.tags)
    return o
  }, { itemTypes: new Set(), tags: new Set() })

  itemTypes = Array.from(itemTypes).sort((a, b) => a > b)
  tags = Array.from(tags)
    .sort((i1, i2) => i1 > i2)
    .map((item) => ({ id: item, name: item }))

  state.status = 'loaded'
  state.data = items
  state.totalCount = items.length
  state.options = { itemTypes, tags }
  state.gridState = { ...state.gridState, itemType: itemTypes[0] }
  state.gridView = getGridView(items, state.gridState)
  state.gridPagination = getPagination(state, 1)
}