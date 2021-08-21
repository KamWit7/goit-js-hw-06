let counterValue = 0
const decrementBtn = document.querySelector('[data-action="decrement"]')
const value = document.querySelector("#value")
const incrementBtn = document.querySelector('[data-action="increment"]')

const counterChange = (operation) => {
  if (operation === "decrement") counterValue--
  if (operation === "increment") counterValue++
  value.innerText = counterValue
}

decrementBtn.addEventListener("click", (event) => counterChange("decrement"))
incrementBtn.addEventListener("click", (event) => counterChange("increment"))

// Dlaczego nie dziła z callbackiem ?
