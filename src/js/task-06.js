const input = document.querySelector("input")
const minReqiredSymbolLength = parseInt(input.dataset.length)

const checkWordLength = () => {
  let inputValue = input.value.length

  inputValue >= minReqiredSymbolLength
    ? input.classList.replace("invalid", "valid")
    : input.classList.add("invalid")
}

input.addEventListener("blur", checkWordLength)
