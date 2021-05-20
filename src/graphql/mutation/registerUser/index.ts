import { GraphQlClient, normalized } from '@utils'
import mutation from './mutation'

const registerUser = async (information) => {
  try {
    const data: any = await GraphQlClient(mutation(information))
    const response = data.registerUser?.user

    if (response) return response

    throw 'Error'

  } catch (err) {
    alert(err)
  }
}

export default registerUser
