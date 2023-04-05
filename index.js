import express from "express";
import cors from "cors";
import { getAllPlants, addPlant } from "./src/plants.js";

const PORT = 3007; 
const app = express(); 

app.use(cors()); 
app.use(express.json()); 

app.get("/plants" , getAllPlants); //api points/routes will go here...
app.post("/plants", addPlant); 

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`);
}); 