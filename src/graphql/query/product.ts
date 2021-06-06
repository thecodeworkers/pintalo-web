const product = (id: string) => (`
query Page {
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
}
`)

export default product
