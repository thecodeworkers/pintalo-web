const checkout = `
query GetCheckoutRecources {
  countries {
    nodes {
      title
      slug
      townships {
        content {
          name
          key
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
