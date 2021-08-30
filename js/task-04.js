// let counter = 0
// const qs = (val) => document.querySelector(val)
// const decrementBtn = qs('[data-action="decrement"]')
// const value = qs("#value")
// const incrementBtn = qs('[data-action="increment"]')

// const setCounter = (operation) => {
//   if (operation === "decrement") counter--
//   if (operation === "increment") counter++
//   value.innerText = counter
// }

// decrementBtn.addEventListener("click", (event) => setCounter("decrement"))
// incrementBtn.addEventListener("click", (event) => setCounter("increment"))

const qs = (selector) => document.querySelector(selector);

const btnDecrement = qs('button[data-action="decrement"]');
const textCounterValue = qs("#counter #value");
const btnIncrement = qs('button[data-action="increment"]');

const counterValue = 0;

// MODEL
let data = {
  counter: counterValue
};

// UPDATE
const updateDecrement = (e) => {
  const newData = { ...data, counter: data.counter - 1 };
  updateView(newData);
};
const updateIncrement = (e) => {
  const newData = { ...data, counter: data.counter + 1 };
  updateView(newData);
};

btnDecrement.addEventListener("click", updateDecrement);
btnIncrement.addEventListener("click", updateIncrement);

// VIEW
const updateView = (newData) => {
  textCounterValue.textContent = String(newData.counter);
  data = newData;
};