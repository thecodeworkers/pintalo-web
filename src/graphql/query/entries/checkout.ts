const checkout = `
query GetCheckoutRecources {
  countries {
    nodes {
      title
      cities {
        nodes {
          name
          slug
          townships {
            content {
              name
              key
            }
          }
        }
      }
    }
  }
  paymentGateways {
    nodes {
      description
      id
      title
    }
  }

}
`
export default checkout
