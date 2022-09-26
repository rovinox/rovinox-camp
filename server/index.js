const dotenv = require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
const { MongoClient } = require("mongodb");
//app.use(express.static(`${__dirname}/../build`));

const { SERVER_PORT, DB_URI } = process.env;
const client = new MongoClient(DB_URI);

async function run() {
  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.listen(SERVER_PORT, () => console.log(`linting on ${SERVER_PORT}`));
