import { client } from "./mongo_client.js"
import 'dotenv/config';

let name = process.env.DB_NAME;
let db = client.db(DB_NAME)

function addCollection(name) {
    db.createCollection(name);
}

function insertMany(name, data) {
    db.collection(name).insertMany(data, (err, res) => {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
    });
}