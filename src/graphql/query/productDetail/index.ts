import { GraphQlClient, normalized } from '@utils'
import product from './product'

const productDetail = async (id: string) => {
  const query = `
    query ProductDetail {
      ${product(id)}
    }
  `
  const data: any = await GraphQlClient(query)

  const detail = {
    product: normalized(data?.product)
  }

  return detail
}

export default productDetail
