import { connect } from "react-redux"
import Pagination from "@mui/material/Pagination"
import { ProductGrid, RadioGroup, SearchableFilter, TagSelector } from "../../../components"
import { productSortOptionsForRadio } from "./ProductSortOptions"

const gridStateDispatch = (field) => ({
  onChange: (value) =>
  ({
    type: "products/filter",
    payload: { field, value }
  })
})

export const Connected = {
  FilterBrands: connect(({
    brands: { options },
    products: {
      totalCount,
      gridState: { brands: value },
      gridView: { counts: { brands: counts } } }
  }) =>
    ({ totalCount, options, counts, value, type: "brand" }), gridStateDispatch("brands"))
    (SearchableFilter),

  FilterTags: connect(({
    products: {
      totalCount,
      options: { tags: options },
      gridState: { tags: value },
      gridView: { counts: { tags: counts } } }
  }) =>
    ({ totalCount, options, counts, value, type: "tag" }), gridStateDispatch("tags"))
    (SearchableFilter),

  ItemTypeSelector: connect(({
    products: { totalCount, options: { itemTypes: options }, gridState: { itemType: value } }
  }) =>
    ({ options, value }), gridStateDispatch("itemType"))
    (TagSelector),

  Sort: connect(({
    products: { gridState: { sort: value } }
  }) =>
    ({ value, options: productSortOptionsForRadio }), gridStateDispatch("sort"))
    (RadioGroup),

  ProductGrid: connect(({ products: { gridPagination: { data: products } } }) => ({
    products
  }))(ProductGrid),
  Pagination: connect(({ products: { gridPagination: { count, page } } }) => ({
    count,
    page
  }), {
    onChange: (e, payload) => ({ type: "products/pageChanged", payload })
  })(Pagination)
}
