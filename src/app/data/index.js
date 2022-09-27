
import request from "./request"
import { store } from ".."

export const API = ({
  getProducts: () => request("items")
    .then((items) => {
      const { slugIdMapping } = store.getState().brands
      return items.map(({ slug: id, manufacturer, price, name, added, itemType: type, tags }) =>
      ({
        id, name, price, added, type, tags,
        brand: slugIdMapping[manufacturer],
      }))
    }),
  getCompanies: () => request("companies")
    .then(companies => companies.sort((a, b) => a.name > b.name))
})