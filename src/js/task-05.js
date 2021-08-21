const nameInput = document.querySelector("#name-input")
const nameOutput = document.querySelector("#name-output")

const getName = () => nameInput.value
const changeName = () => (nameOutput.innerText = getName())

nameInput.addEventListener("keydown", changeName)
