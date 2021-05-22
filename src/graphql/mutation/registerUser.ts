const registerUser = (args) => {
  const { email, password, name, lastname } = args

  return (`
    mutation register {
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

export default registerUser
