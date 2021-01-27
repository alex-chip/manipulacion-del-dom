// registrar imagen
let totalImages = 0
let loadedImages = 0
const isIntersecting = entry => {
  return entry.isIntersecting // true dentro de la pantalla, false fuera de la pantalla
}

const loadImage = (entry) => {
  const container = entry.target // contenedor de la imagen (article)

  // seleccionamos la imagen del contenedor
  // const imagen = container.firstChild
  const imagen = container.querySelector('img')
  const url = imagen.dataset.src

  // load imagen
  imagen.src = url

  imagen.onload = () => {
    loadedImages += 1
    logState()
  }

  // unlisten
  observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage)
})

function logState() {
  console.log(`⚪️ Total Imágenes: ${totalImages}`);
  console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
  console.log("--------------------------------------");
}

export const registerImage = (image) => {
  observer.observe(image)
  totalImages += 1
  logState()
}