const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const { getProducts, addProduct } = require('./data/products')

// String, Int, Double, ID
const schema = buildSchema(`
  type Product {
    id: Int,
    nombre: String
  },
  type Query {
    hello: String,
    products: [Product]
  },
  type Mutation {
    createProduct(name: String!): Product
  }
`)

const root = {
  hello: () => ('Hola mundo'),
  products: () => getProducts(),
  createProduct: (args) => {
    return addProduct(args.name)
  } 
}

const app = express()
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(4000)
console.log('Server is running at http://localhost:4000')
