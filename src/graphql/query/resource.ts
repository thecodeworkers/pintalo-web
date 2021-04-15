import { GraphQlClient, normalized } from '@utils'
import homePageQuery from './homePage'
import registerPageQuery from './registerPage'
import loginPage from './loginPage'
import aboutPage from './aboutPage'
import painterPage from './painterPage'

const resource = async (resource: any) => {

  const resources = {
    'homePage': homePageQuery,
    'registerPage': registerPageQuery,
    'loginPage': loginPage,
    'aboutPage': aboutPage,
    'painterPage': painterPage
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
