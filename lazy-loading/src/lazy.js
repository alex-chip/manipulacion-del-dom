// registrar imagen

const isIntersecting = entry => {
  return entry.isIntersecting // true dentro de la pantalla, false fuera de la pantalla
}

const accion = (entry) => {
  const nodo = entry.target
  console.log('hello')

  // unlisten
  observer.unobserve(nodo)
}

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(accion)
})

export const registerImage = (image) => {
  observer.observe(image)
}