import { MongoClient } from "mongodb";
import 'dotenv/config';

let url = process.env.DB_URL;

export const client = new MongoClient(url);