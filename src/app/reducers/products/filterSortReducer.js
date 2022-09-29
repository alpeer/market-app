import { ProductSortOptions } from "../../../pages/Products/helpers/ProductSortOptions";
import { getPagination } from "./paginationReducer";

export default (state, { payload: { field, value } }) => {
  const gridState = { ...state.gridState, [field]: value };
  state.gridState = gridState;
  state.gridView = getGridView(state.data, gridState)
  state.gridPagination = getPagination(state)
}

export const filterSortState = {
  options: {
    tags: [],
    itemTypes: []
  },
  gridState: {
    sort: Object.keys(ProductSortOptions)[0],
    tags: [],
    itemType: null,
    brands: [],
  },
}
export const getGridView = (products, { itemType, brands, tags, sort }) => ({
  data: products
    .filter(item =>
      item.type === itemType // Only selected item type
      && (
        brands.length === 0 // All brands
        || brands.indexOf(item.brand) > -1) // Only selected brands
      && (
        tags.length === 0 // All tags
        || item.tags.some(tag => tags.indexOf(tag) > -1) // Only selected tags
      ))
    .sort(ProductSortOptions[sort].function)
    .map(item => item.id),
  counts: {
    brands: products.reduce((count, { brand }) => {
      count.hasOwnProperty(brand)
        ? (count[brand]++)
        : (count[brand] = 1)
      return count
    }, {}),
    tags: products.reduce((count, { tags: itemTags }) => {
      itemTags.forEach((tag) =>
        count.hasOwnProperty(tag)
          ? (count[tag]++)
          : (count[tag] = 1))
      return count
    }, {})
  }
})