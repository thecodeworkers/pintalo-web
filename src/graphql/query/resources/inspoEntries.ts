const products = `
products(first: 10000000) {
  nodes {
    id
    name
    onSale
    date
    status
    slug
    sku
    totalSales
    purchasable
    description
    ... on SimpleProduct {
      price
    }
    productBrands(first: 10000000) {
      nodes {
        id
        name
        slug
      }
    }
    productBases(first: 10000000) {
      nodes {
        id
        name
        slug
      }
    }
    productCategories(first: 10000000) {
      nodes {
        id
        name
        slug
      }
    }
    productTypes(first: 10000000) {
      nodes {
        id
        name
        slug
      }
    }
    attributes(first: 10000000) {
      nodes {
        id
        name
        options
      }
    }
  }
}
`

export default products
