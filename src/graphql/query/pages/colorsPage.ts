import { colorsId } from '@utils/pageIds'

const colorsPage = `
  page(id: "${colorsId}") {
    colors {
      title
      subtitle
      buttonBrand
      buttonColors
    }
  }
`

export default colorsPage
