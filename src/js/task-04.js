let counter = 0
const qs = (val) => document.querySelector(val)
const decrementBtn = qs('[data-action="decrement"]')
const value = qs("#value")
const incrementBtn = qs('[data-action="increment"]')

const setCounter = (operation) => {
  if (operation === "decrement") counter--
  if (operation === "increment") counter++
  value.innerText = counter
}

decrementBtn.addEventListener("click", (event) => setCounter("decrement"))
incrementBtn.addEventListener("click", (event) => setCounter("increment"))
