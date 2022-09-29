import { config } from "../../../utils"

const pageSize = config.UI.defaultPageSize

export default (state, { payload: page }) => {
  state.gridPagination = getPagination(state, page)
}
export const paginationState = {
  gridPagination: {
    page: 1,
    count: 1,
    data: Array(config.UI.defaultPageSize).fill(1).map((_, id) => ({ id }))
  }
}
export const getPagination = ({ gridView: { data: list }, data }, page = 1) => (
  {
    page,
    count: Math.round(list.length / pageSize),
    data: list
      .slice((page - 1) * pageSize, page * pageSize)
      .map(id => data.find(item => item.id === id))
  })
