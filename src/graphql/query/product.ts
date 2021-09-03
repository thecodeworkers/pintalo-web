import { cartQuery } from "./entries"

const product = (id: string) => (`
query Page {
  ${cartQuery}
  product(id: "${id}") {
    id
    databaseId
    slug
    status
    sku
    totalSales
    type
    productCategories {
      nodes {
        id
        name
        slug
      }
    }
    ... on SimpleProduct {
      id
      name
      databaseId
      description
      status
      slug
      stockQuantity
      stockStatus
      image {
        mediaItemUrl
      }
    }
    ... on VariableProduct {
      name
      description
      attributes(first: 1000000) {
        nodes {
          name
          options
          label
          id
          ... on GlobalProductAttribute {
            slug
            terms {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
      image {
        mediaItemUrl
        slug
      }
      price
      status
      stockQuantity
      stockStatus
      variations(first: 1000000) {
        nodes {
          databaseId
          id
          image {
            mediaItemUrl
            slug
          }
          price
          status
          stockQuantity
          stockStatus
          attributes(first: 1000000) {
            nodes {
              name
              value
              label
              id
            }
          }
        }
      }
    }
  }
}
`)

export default product
