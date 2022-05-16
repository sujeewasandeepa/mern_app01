import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

// creating the express app
const app = express();

// middle ware
app.use(cors());
app.use(express.json()); // body parser in old versions of express

app.use("/api/v1/restaurants", restaurants);
// * means any other file that are not a route
app.use("*", (req, res) => res.status(404).json({ error: "not found"}));

// exporting app as a module
export default app;