const sortFunction = ({ column, dir }) =>
  dir === "asc"
    ? (i1, i2) => i1[column] < i2[column] ? -1 : i1[column] > i2[column]
    : (i1, i2) => i2[column] < i1[column] ? -1 : i2[column] > i1[column]

export const ProductSortOptions = {
  PriceLowToHigh: { label: "Price low to high", function: sortFunction({ column: "price", dir: "asc" }) },
  PriceHighToLow: { label: "Price high to low", function: sortFunction({ column: "price", dir: "desc" }) },
  NewToOld: { label: "New to old", function: sortFunction({ column: "added", dir: "desc" }) },
  OldToNew: { label: "Old to new", function: sortFunction({ column: "added", dir: "asc" }) }
}

export const productSortOptionsForRadio = Object.entries(ProductSortOptions).map(([id, { label }]) => ({ id, label }))