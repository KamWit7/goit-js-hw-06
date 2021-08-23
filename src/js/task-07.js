const fontSizeControler = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

const setFontSize = () => {
  let currentRangeVal = fontSizeControler.value
  text.style.fontSize = `${currentRangeVal}px`
}

fontSizeControler.addEventListener("input", setFontSize)
