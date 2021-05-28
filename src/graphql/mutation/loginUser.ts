import { authId } from '@utils/pageIds'

const loginUser = ({ email, password }) => {
  return (`
    mutation LoginUser {
      login( input: {
        clientMutationId: "${authId}",
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
