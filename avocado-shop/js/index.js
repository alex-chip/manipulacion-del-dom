// web api
const baseURL = 'https://platzi-avo.vercel.app'
const apiURL = `${baseURL}/api/avo`

const appNode = document.querySelector('#app')

// formateo de el precio con la API Internacionalizacion
const formatPrice = price => {
  const newPrice = new window.Intl.NumberFormat('en-En', {
    style: 'currency',
    currency: 'USD'
  }).format(price)

  return newPrice
}

// function para peticion, creacion y renderizados de datos de nuestra api
async function fetchData() {
  // peticion de datos con fetch
  const response = await fetch(apiURL)

  // transformamos la respuesta en formato json
  const dataJson = await response.json()

  // creacion de varible para todos los items provenientes de la peticion api
  const allItems = []

  // iteramos los datos de la api
  dataJson.data.forEach((item) => {
    // creacion de elementos
    const image =document.createElement('img')
    const title = document.createElement('h2')
    const price = document.createElement('span')
    const container = document.createElement('article')
    const info = document.createElement('div')

    // agregar clases a los elementos
    container.classList.add('container')
    image.classList.add('image')
    title.classList.add('title')
    price.classList.add('price')
    info.classList.add('info')

    // agregamos la informacion a los elementos
    image.src = `${baseURL}${item.image}`
    title.textContent = item.name
    price.textContent = formatPrice(item.price)

    // insertamos los elementos a un contenedor para cada item
    info.append(title, price)
    container.append(image, info)

    // insertamos cada item a un array
    allItems.push(container)
  })

  // pintamos los items en el body
  appNode.append(...allItems)
}

// ejecutamos la funcion
fetchData()