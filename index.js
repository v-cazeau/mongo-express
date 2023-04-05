import express from "express";
import cors from "cors";
import { getAllPlants, addPlant, deletePlant, updatePlant } from "./src/plants.js";

const PORT = 3007; 
const app = express(); 

app.use(cors()); 
app.use(express.json()); 

app.get("/",(req,res) => {
    res.send (`I am gRoot.`);
});

app.get("/plants" , getAllPlants); //api points/routes will go here...
app.post("/plants", addPlant); 
app.delete("/plants/:docID",deletePlant);
app.patch("/plants/:docId",updatePlant); 

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`);
}); 