let productos = [
  {
    id: 1,
    nombre: 'P1'
  }
]

const addProduct = (nombre) => {
  const newId = productos[productos.length - 1].id + 1
  const newProduct = { id: newId, nombre }
  productos = [...productos, newProduct]
  return newProduct
}

const getProducts = () => (productos)

module.exports = {
  getProducts,
  addProduct
}
