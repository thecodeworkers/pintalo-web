const mutation = (args) => {
  const { email, password, name, lastname } = args

  return (`
    mutation registerUser {
      registerUser(input: {
        username: "${email}",
        email: "${email}",
        password: "${password}",
        firstName: "${name}",
        lastName: "${lastname}"
      }) {
        user {
          email
        }
      }
    }
  `)
}

export default mutation
