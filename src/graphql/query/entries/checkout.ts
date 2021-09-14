const checkout = `
query GetCheckoutRecources {
  countries {
    nodes {
      id
      slug
      status
      title
    }
  }
  municipalities {
    nodes {
      name
      slug
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
