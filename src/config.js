import productImagePlaceholder from "./assets/product_sample.png"
export default {
  API: {
    baseUrl: process.env.NODE_ENV === "production"
      ? "https://market-app-x6dr.vercel.app/api/"
      : "http://localhost:3001/"
  },
  UI: {
    defaultPageSize: 16,
    productImagePlaceholder
  }
}