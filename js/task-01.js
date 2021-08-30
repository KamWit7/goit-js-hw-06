const categoryItems = document.querySelectorAll(".item")
const arrCategoryItems = [...categoryItems]

const itemsNames = arrCategoryItems.map(
  (ele) => ele.firstElementChild.innerText
)
const categoryQuantity = arrCategoryItems.map(
  (ele) => ele.lastElementChild.children.length
)

console.log(`Number of categories: ${arrCategoryItems.length}`)

arrCategoryItems.forEach((ele, idx) => {
  console.log(`Category: ${itemsNames[idx]}`)
  console.log(`Elements: ${categoryQuantity[idx]}`)
})  