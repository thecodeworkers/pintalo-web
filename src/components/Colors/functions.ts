import { filter } from "@utils"


export const buildPallete = (data, type, element) => {

  const filterProducts = filter(data, element, 'slug', ['brands', 'nodes'])
  const pallete = filterProducts.reduce((prev, next) => {
    const color = next.colors?.nodes[0]
    const index = prev.findIndex((pal) => pal.name === color?.name)
    if (index < 0) {
      const newPallete = {
        name: color?.name,
        colors: [next]
      }
      prev.push(newPallete)
      return prev
    }
    prev[index].colors.push(next)
    return prev
  }, [])

  return pallete ? pallete : []
}
