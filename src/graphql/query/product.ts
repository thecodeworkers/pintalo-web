const product = (id: string) => (`
query Page {
  product(id: "${id}") {
    id
    name
    slug
    description
    ... on SimpleProduct {
      price(format: RAW)
      stockQuantity
      stockStatus
    }
  }
}
`)

export default product
