const categoryItems = document.querySelectorAll(".item")

const itemsNames = [...categoryItems].map(
  (ele) => ele.firstElementChild.innerText
)
const categoryQuantity = [...categoryItems].map(
  (ele) => ele.lastElementChild.children.length
)

console.log(`Number of categories: ${categoryItems.length}`)

for (let i = 0; i < itemsNames.length; i++) {
  console.log(`Category: ${itemsNames[i]}`)
  console.log(`Elements: ${categoryQuantity[i]}`)
}
