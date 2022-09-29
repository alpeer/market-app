import { useEffect } from "react"
import ProductCard from "./helpers/ProductCard"
import "./ProductGrid.css"

export const ProductGrid = ({ products = [] }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products.map(i => i.id).toString()])
  
  return <div className="ProductGrid">
    {products.map((product) =>
      <ProductCard key={product.id} {...product} />)}
  </div>
}