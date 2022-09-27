/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import { fetchBrands, fetchProducts } from "../../app"
import { Section } from "../../components"
import { Connected } from "./ConnectedComponents"

const Products = ({brandStatus}) => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchBrands()) }, [])
  useEffect(() => {
    brandStatus === "loaded" && dispatch(fetchProducts())
  }, [brandStatus])

  return <div className="Products Page">
    <div className="left">
      <Section title="Sorting">
        <Connected.Sort />
      </Section>
      <Section title="Brands">
        <Connected.FilterBrands />
      </Section>
      <Section title="Tags">
        <Connected.FilterTags />
      </Section>
    </div>
    <div className="middle">
      <h1>Products</h1>
      <Connected.ItemTypeSelector />
      <Connected.ProductGrid />
      <Connected.Pagination
        component="div"
        boundaryCount={1}
        siblingCount={2} />
    </div>
  </div>
}


export default connect(({ brands: { status } }) => ({
  brandStatus: status
}), {
})(Products);
