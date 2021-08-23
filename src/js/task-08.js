const qs = (val) => document.querySelector(val)
const loginForm = qs(".login-form")

const isAnyFiledEmpty = (email, password) => {
  return email.value === "" || password.value === ""
}

const packedFields = (email, password) => {
  const formElements = {
    email: email.value,
    password: password.value,
  }
  console.log(formElements)
}

const getInput = (event) => {
  event.preventDefault()

  const {
    elements: { email, password },
  } = event.currentTarget

  isAnyFiledEmpty(email, password)
    ? alert("Wszytkie pola powinny być wypełnione!")
    : packedFields(email, password)

  event.currentTarget.reset()
}

loginForm.addEventListener("submit", getInput)
