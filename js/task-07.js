const qs = (val) => document.querySelector(val)
const fontSizeControler = qs("#font-size-control")
const text = qs("#text")

const setFontSize = () => {
  let rangeValue = fontSizeControler.value
  text.style.fontSize = `${rangeValue}px`
}

fontSizeControler.addEventListener("input", setFontSize)
