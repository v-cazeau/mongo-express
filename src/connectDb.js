import { MongoClient } from "mongodb"; 
import { MONGOURI } from "../secrets.js";

const client = new MongoClient(MONGOURI); 

export const db = client.db("my-garden"); 