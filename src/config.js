import productImagePlaceholder from "./assets/product_sample.png"
export default {
  API: {
    baseUrl: process.env.NODE_ENV === "production"
      ? window.location.href + "api/"
      : "http://localhost:3001/"
  },
  UI: {
    defaultPageSize: 16,
    productImagePlaceholder
  }
}