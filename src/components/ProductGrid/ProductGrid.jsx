import ProductCard from "./ProductCard"
import "./ProductGrid.css"

export const ProductGrid = ({ products = [] }) => 
  <div className="ProductGrid">
    {products.map((product) =>
      <ProductCard key={product.id} {...product} />)}
  </div>