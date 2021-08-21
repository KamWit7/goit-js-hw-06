const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
]
const ingredientsList = document.querySelector("#ingredients")
let listItem

ingredients.forEach((ele) => {
  listItem = document.createElement("li")
  listItem.innerText = ele
  listItem.classList.add("item")
  ingredientsList.append(listItem)
})
