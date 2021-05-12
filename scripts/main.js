const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>This is going to be added to the container</h1>
`

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const dogs = [
  {
    id: 1,
    name: 'Woofer'
  },
  {
    id: 2,
    name: 'Globber'
  },
  {
    id: 3,
    name: 'Patsy'
  },
  {
    id: 4,
    name: 'Tazza'
  },
  {
    id: 5,
    name: 'Slobber'
  }
]

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']


const convertToUnorderedList = (collection) => {
  let listItem = '<ul>'

  for (const item of collection) {
    listItem += `<li>${item}</li>`
  }

  listItem += '</ul>'

  return listItem
}


const writeToContainerElement = (content) => {
  mainContainer.innerHTML = content
}


const handleClickEvent = (event) => {
  console.log(event.currentTarget.textContent)
}


const buttons = document.querySelectorAll('button')


for (const button of buttons) {
  button.addEventListener('click', handleClickEvent)
}


/*
document.addEventListener('mousemove', event => {
  console.log(`x: ${event.clientX} y: ${event.clientY}`)
})
*/
