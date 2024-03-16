
const batch = require("./model/batch");
  const resolvers = {
    Query: {
        batch :()=> {
            return batch.find()
          },
    }
}


module.exports = resolvers;