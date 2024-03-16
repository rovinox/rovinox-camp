const typeDefs =`#graphql
type Batch {
_id: String
  startDate: String!
  endDate: String!
  cost: Float!
  course: String!
  enabled: Boolean!
}
type Query {
    batches: [Batch]
  }
`

module.exports = typeDefs;