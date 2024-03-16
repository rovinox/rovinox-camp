const express = require("express")
const { ApolloServer } = require('@apollo/server') 
const { createHandler } = require("graphql-http/lib/use/express")
const { ruruHTML } = require("ruru/server")
require('dotenv').config();
const connectDB = require('./config/dbConn');
const schema = require('./schema/schema');
const cors = require('cors');
//const {resolvers} = require('./resolvers')
//const { typeDefs }= require('./schema/schema')
const { startStandaloneServer } = require('@apollo/server/standalone')
const batch = require("./model/batch");
// Construct a schema, using GraphQL schema language
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.



type Book {
    title: String
    author: String
  }
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  
  type Batch {
    _id: String
  startDate: String!
  endDate: String!
  cost: Float!
  course: String!
  enabled: Boolean!
}

type Query {
    books: [Book],
    batches: [Batch],
  }

`;
const PORT = process.env.PORT || 8080
// The root provides a resolver function for each API endpoint


const app = express()
// Connect to database
connectDB();

app.use(cors());


//   const resolvers = {
//     Query: {
//       batch :()=> {
//         return batch.find()
//       },
//     }
// }
const bookArr = [ {
  title: 'The Awakening',
  author: 'Kate Chopin',
},
{
  title: 'City of Glass',
  author: 'Paul Auster',
},]
const resolvers = {
  Query: {
    books: () => bookArr,
    batches: async () => await batch.find()
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers
})

async function start(){

  const { url } =  await startStandaloneServer(server, {
    listen: { port: PORT }
  })
  
  console.log(`Server ready at: ${url}`)
}
start()
// Create and use the GraphQL handler.
// app.all(
//   "/graphql",
//   createHandler({
//     schema: schema,
//     rootValue: resolvers,
//   })
// )

// // Serve the GraphiQL IDE.
// app.get("/", (_req, res) => {
//   res.type("html")
//   res.end(ruruHTML({ endpoint: "/graphql" }))
// })

// // Start the server at port
// app.listen(PORT)
// console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`)