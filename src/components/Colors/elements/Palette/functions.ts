import { hexToRgb, determinateTextColor } from '@utils'

export const paintBackground = (type, palette, color = '') => {
  if (type == 'palettes') {
    const colorsLength = palette.colors.length
    const colors = palette.colors

    let fill = ''
    let fontColor = ''

    if (colorsLength == 1) {
      fill = `
        ${colors[0].color} 0%,
        ${colors[0].color} 100%
      `
      fontColor = `${colors[0].color}`
    }

    if (colorsLength == 2) {
      fill = `
        ${colors[1].color}  50%,
        ${colors[0].color}  50%
      `
      fontColor = `${colors[1].color}`
    }

    if (colorsLength == 3) {
      fill = `
        ${colors[2].color}  33.33%,
        ${colors[1].color}  33.33%,
        ${colors[1].color}  66.66%,
        ${colors[0].color}  66.66%,
        ${colors[0].color}  100%
      `
      fontColor = `${colors[2].color}`
    }

    if (colorsLength >= 4) {
      fill = `
        ${colors[3].color}  25%,
        ${colors[2].color}  25%,
        ${colors[2].color}  50%,
        ${colors[1].color}  50%,
        ${colors[1].color}  75%,
        ${colors[0].color}  75%,
        ${colors[0].color}  100%
      `
      fontColor = `${colors[3].color}`
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
