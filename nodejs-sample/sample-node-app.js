const MongoClient = require('mongodb').MongoClient;

const username = "username";
const cluster = "saeedcluster";
const database = "saeed";
const password = "password";
const db = "saeed"
const collections = {
  student: "student"
}

const uri = `mongodb://username:password@mongodb:27017/`;
const client = new MongoClient(
  uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
  try {
    await client.connect();
    console.log("Connected to db...")
    const collection = client.db(db).collection(collections.student);
    const cursor = await collection.find();
    await cursor.forEach(console.log)

  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
}

main();