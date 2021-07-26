import { GraphQlClient, normalizedArray } from '@utils'
import attributes from './attributes'
import categories from './categories'
import productsQuery from './products'

const resource = async () => {

  const query = `
    query Resources {
      ${productsQuery}
      ${attributes}
      ${categories}
    }
  `

  const data: any = await GraphQlClient(query)

  return {
    products: normalizedArray(data?.data?.products?.nodes),
    categories: normalizedArray(data?.data?.productCategories?.nodes),
    attributes: {
      uses: normalizedArray(data?.data?.allPaUses?.nodes),
      types: normalizedArray(data?.data?.allPaTypes?.nodes),
      presentations: normalizedArray(data?.data?.allPaPresentations?.nodes),
      bases: normalizedArray(data?.data?.allPaBases?.nodes),
      colors: normalizedArray(data?.data?.paColors?.nodes),
      classes: normalizedArray(data?.data?.paClasses?.nodes),
      brands: normalizedArray(data?.data?.allPaMarcas?.nodes)
    }
  }
}
export default resource
