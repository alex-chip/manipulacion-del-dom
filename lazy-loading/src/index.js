import { registerImage } from './lazy'
import { getRandomInt } from './utils/randomNumber'
const baseURL = 'https://randomfox.ca/images'
const app = document.querySelector('#app')

const addImage = () => {
  const imgContainer = document.createElement('article')
  imgContainer.classList.add('img__container')

  const image = document.createElement('img')
  image.dataset.src = `${baseURL}/${getRandomInt(1, 122)}.jpg`
  image.alt = 'fox'
  image.classList.add('img')
  registerImage(imgContainer)

  imgContainer.append(image)
  app.append(imgContainer)
  // return app
}

const cleanButton = () => {
  app.textContent = ''
}

const buttonAddImage = document.getElementById('button-add-imagen')
const buttonCleanImage = document.getElementById('button-clean-images')

buttonAddImage.addEventListener('click', addImage)
buttonCleanImage.addEventListener('click', cleanButton)
