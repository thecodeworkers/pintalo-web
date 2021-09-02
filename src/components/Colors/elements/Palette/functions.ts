import { hexToRgb, determinateTextColor } from '@utils'

export const paintBackground = (type, palette, color = '') => {
  if (type == 'palettes') {
    const colorsLength = palette.colors.length
    const colors = palette.colors

    let fill = ''
    let fontColor = ''

    if (colorsLength == 1) {
      fill = `
        #${colors[0].slug} 0%,
        #${colors[0].slug} 100%
      `
      fontColor = `${colors[0].slug}`
    }

    if (colorsLength == 2) {
      fill = `
        #${colors[1].slug}  50%,
        #${colors[0].slug}  50%
      `
      fontColor = `${colors[1].slug}`
    }

    if (colorsLength == 3) {
      fill = `
        #${colors[2].slug}  33.33%,
        #${colors[1].slug}  33.33%,
        #${colors[1].slug}  66.66%,
        #${colors[0].slug}  66.66%,
        #${colors[0].slug}  100%
      `
      fontColor = `${colors[2].slug}`
    }

    if (colorsLength >= 4) {
      fill = `
        #${colors[3].slug}  25%,
        #${colors[2].slug}  25%,
        #${colors[2].slug}  50%,
        #${colors[1].slug}  50%,
        #${colors[1].slug}  75%,
        #${colors[0].slug}  75%,
        #${colors[0].slug}  100%
      `
      fontColor = `${colors[3].slug}`
    }

    return `
      background: linear-gradient(0deg, ${fill});
      color: ${determinateTextColor(hexToRgb(fontColor))}
    `
  }

  if (type == 'colors') {
    return `
      background-color: ${color};
      color: ${determinateTextColor(hexToRgb(color))}
    `
  }
}
