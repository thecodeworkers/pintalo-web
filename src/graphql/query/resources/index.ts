import { GraphQlClient, normalizedArray } from '@utils'
import basesQuery from './bases'
import typesQuery from './types'
import productsQuery from './products'
import brandsQuery from './brands'
import categoriesQuery from './categories'
import inspoEntriesQuery from './inspoEntries'

const resource = async () => {

  const query = `
    query Resources {
      ${basesQuery}
      ${typesQuery}
      ${productsQuery}
      ${brandsQuery}
      ${categoriesQuery}
      ${inspoEntriesQuery}
    }
  `
  const data: any = await GraphQlClient(query)
  const resources = {
    categories: normalizedArray(data?.productCategories?.nodes),
    types: normalizedArray(data?.productTypes?.nodes),
    products: normalizedArray(data?.products?.nodes),
    bases: normalizedArray(data?.productBases?.nodes),
    brands: normalizedArray(data?.productBrands?.nodes),
    inspo: normalizedArray(data?.posts?.nodes)
  }

  return resources
}

export default resource
