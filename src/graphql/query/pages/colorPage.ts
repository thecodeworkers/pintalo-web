const product = (id: string) => (`
  product(id: "${id}") {
    id
    name
    slug
    ... on SimpleProduct {
      price
      stockQuantity
      stockStatus
    }
  }
`)

export default product
