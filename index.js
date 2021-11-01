// const input = document.querySelector('.input')
// const container = document.querySelector('.container')
// const btn = document.querySelector('#btn')

// btn.addEventListener('click', (e) => {
//   if (input.value === '') return
//   getInput(input.value)
//   input.value = ''
// })

// // Создание листа
// function getInput(value) {
//   //   let btn = `<button class= "btn"></button>`
//   //   list.innerHTML += `<li class= "li">${e}</li>${btn}`
//   let li = document.createElement('p')
//   let delBtn = document.createElement('button')
//   li.className = 'li'
//   li.textContent = value

//   delBtn.className = 'btn'
//   delBtn.id = 'btn'
//   delBtn.textContent = 'Del'
//   li.appendChild(delBtn)

//   delBtn.addEventListener('click', (e) => {
//     list.removeChild(li)
//   })
//   list.appendChild(li)
//   li.addEventListener('click', () => {
//     li.classList.toggle('list_active')
//   })
// }

const container = document.querySelector('.container')
const button = document.querySelector('#btn')
const input = document.querySelector('.input')
const list = document.querySelector('.list')
const text = document.querySelector('.text')

button.addEventListener('click', (e) => {
  if (input.value === '') return
  createEl(input.value)
  input.value = ''
})
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (input.value === '') return
    createEl(input.value)
    input.value = ''
  }
})

function createEl(value) {
  const item = document.createElement('div')
  const element = document.createElement('div')
  const delBtn = document.createElement('a')
  item.className = 'container'
  element.className = 'text'
  element.textContent = value
  delBtn.className = 'btn'
  item.appendChild(element)
  list.appendChild(item)
  item.appendChild(delBtn)
  delBtn.textContent = 'Del'
  delBtn.addEventListener('click', () => {
    // text.removeChild(item)
    // console.log(item)
    // while (list.firstChild) {
    //   list.removeChild(list.lastChild)
    // }
    list.removeChild(item)
  })
  item.addEventListener('click', () => {
    item.classList.toggle('list_active')
  })
}
