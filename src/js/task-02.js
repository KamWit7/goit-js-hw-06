const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
]
const ingredientsList = document.querySelector("#ingredients")

ingredients.forEach((ele) => {
  let listItem = document.createElement("li")
  listItem.innerText = ele
  listItem.classList.add("item")
  ingredientsList.append(listItem)
})
