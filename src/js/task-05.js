const qs = (val) => document.querySelector(val)
const nameInput = qs("#name-input")
const nameOutput = qs("#name-output")
const getName = () => nameInput.value

const ifEmpty = () => {
  nameOutput.innerText === ""
    ? (nameOutput.innerText = "Anonymous")
    : (nameOutput.innerText = getName())
}

const changeName = () => {
  nameOutput.innerText = getName()
  ifEmpty()
}

nameInput.addEventListener("keydown", changeName)
nameInput.addEventListener("keyup", changeName)
