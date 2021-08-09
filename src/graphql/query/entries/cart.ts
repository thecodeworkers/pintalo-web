
const cart = `
cart {
  total
  totalTax
  subtotal
  subtotalTax
  shippingTotal
  feeTotal
  shippingTax
  discountTax
  discountTotal
  contentsTax
  contentsTotal
  needsShippingAddress
  isEmpty
  availableShippingMethods {
    rates {
      id
      label
      instanceId
      methodId
    }
    supportsShippingCalculator
  }
  chosenShippingMethods
  contents(first: 1000000) {
    itemCount
    nodes {
      key
      product {
        node {
          name
          slug
          status
          sku
          description
          ... on SimpleProduct {
            id
            name
            salePrice(format: RAW)
            price
            stockQuantity
          }
          ... on VariableProduct {
            price
            stockQuantity
            totalSales
            variations(first: 100000) {
              nodes {
                id
                databaseId
                manageStock
                price
                stockQuantity
                name
                attributes(first: 100000) {
                  nodes {
                    id
                    name
                    value
                  }
                }
              }
            }
          }
          attributes(first: 100000) {
            nodes {
              id
              label
              name
              options
              position
              variation
            }
          }
          image {
            mediaItemUrl
            slug
          }
        }
      }
      variation {
        attributes {
          name
          value
        }
        node {
          id
          price
          name
          slug
          status
          sku
          description
          databaseId
          manageStock
          stockQuantity
          image {
            mediaItemUrl
            slug
          }
        }
      }
      quantity
      subtotal
      subtotalTax
      tax
      total
    }
  }
  totalTaxes {
    label
    id
    amount
  }
  fees {
    name
    amount
    taxClass
    total
    taxable
  }
}
`

export default cart;
