const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "rovinox-camp",
  password: "1123",
  port: 5432,
});
client.connect();
module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, callback);
  },
};
