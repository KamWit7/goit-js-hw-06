function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const qs = (val) => document.querySelector(val)
const body = qs("body")
const btn = qs(".change-color")
const colorSpan = qs(".color")

function changeBgColor() {
  const currentColor = getRandomHexColor()
  body.style.backgroundColor = currentColor
  colorSpan.innerText = currentColor
}

btn.addEventListener("click", changeBgColor)
