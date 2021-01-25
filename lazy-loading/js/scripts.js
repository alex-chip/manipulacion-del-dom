const baseURL = 'https://randomfox.ca/images'
const app = document.querySelector('#app')

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const addImage = () => {
  const image = document.createElement('img')
  image.src = `${baseURL}/${getRandomInt(1, 122)}.jpg`
  image.alt = 'fox'
  image.classList.add('img')

  const imgContainer = document.createElement('article')
  imgContainer.classList.add('img__container')
  imgContainer.append(image)

  app.append(imgContainer)
  return app
}

const cleanButton = () => {
  app.textContent = ''
}

const initialState = () => {
  const buttonAddImage = document.getElementById('button-add-imagen')
  const buttonCleanImage = document.getElementById('button-clean-images')

  buttonAddImage.addEventListener('click', addImage)
  buttonCleanImage.addEventListener('click', cleanButton)
}

initialState()