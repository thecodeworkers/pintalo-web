import { GraphQlClient, normalized } from '@utils'
import homePageQuery from './homePage'
import registerPageQuery from './registerPage'

const resource = async (resource: any) => {

  const resources = {
    'homePage': homePageQuery,
    'registerPage': registerPageQuery
  }

  const query = `
    query Resources {
      ${resources[resource]}
    }
  `
  const result: any = await GraphQlClient(query)

  return 'nodes' in result[resource] ? normalized(result[resource].nodes) : normalized(result[resource])
}

export default resource
