import { authId } from '@utils/pageIds'

const registerUser = ({ email, password, name, lastname }) => {
  return (`
    mutation RegisterUser {
      registerUser(
        input: {
          clientMutationId: "${authId}",
          username: "${email}",
          email: "${email}",
          password: "${password}",
          firstName: "${name}",
          lastName: "${lastname}"
        }) {
        user {
          jwtAuthToken
          jwtRefreshToken
          email
        }
      }
    }
  `)
}

export default registerUser
