const countries = `
query GetCountries {
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
}
`
export default countries
