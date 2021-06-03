import { v4 as uuidv4 } from 'uuid'

const loginUser = ({ email, password }) => {
  return (`
    mutation LoginUser {
      login( input: {
        clientMutationId: "${uuidv4()}",
        username: "${email}",
        password: "${password}"
      } ) {
        authToken
        user {
          email
        }
      }
    }
  `)
}

export default loginUser
