let hue = 128
let saturation = 100
let lightness = 50
let alpha = 1

const getHSLA = () => {
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
}

const main = () => {
  const swatch = document.querySelector('.swatch')
  const hueInput = document.querySelector('input[name=hue]')
  hueInput.addEventListener('input', () => {
    hue = hueInput.value
    swatch.style.backgroundColor = getHSLA()
  })
  const saturationInput = document.querySelector('input[name=saturation]')
  saturationInput.addEventListener('input', () => {
    saturation = saturationInput.value
    swatch.style.backgroundColor = getHSLA()
  })
  const lightnessInput = document.querySelector('input[name=lightness]')
  lightnessInput.addEventListener('input', () => {
    lightness = lightnessInput.value
    swatch.style.backgroundColor = getHSLA()
  })
  const alphaInput = document.querySelector('input[name=alpha]')
  alphaInput.addEventListener('input', () => {
    alpha = alphaInput.value
    swatch.style.backgroundColor = getHSLA()
  })
}

document.addEventListener('DOMContentLoaded', main)
