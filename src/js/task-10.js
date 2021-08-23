function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const qs = (val) => document.querySelector(val)

const createBtn = qs("[data-create]")
const destroyBtn = qs("[data-destroy]")
const boxes = qs("#boxes")
const input = qs("input")
let allBoxes = 0

const setDivStyle = (div, sqrDivSize, getGbColor) => {
  div.style.width = sqrDivSize
  div.style.height = sqrDivSize
  div.style.backgroundColor = getGbColor()
}

const createBox = () => {
  allBoxes++
  let div = document.createElement("div")
  let sqrDivSize = `${30 + allBoxes * 10}px`

  setDivStyle(div, sqrDivSize, getRandomHexColor)
  boxes.append(div)
}

const createBoxes = () => {
  let numberInput = parseInt(input.value)
  for (let boxNr = 0; boxNr < numberInput; boxNr++) {
    createBox()
  }
}

const destroyBoxes = () => {
  ;[...boxes.children].forEach((ele) => ele.remove())
  resetAllBoxes()
}

const resetAllBoxes = () => (allBoxes = 0)

createBtn.addEventListener("click", createBoxes)
destroyBtn.addEventListener("click", destroyBoxes)
