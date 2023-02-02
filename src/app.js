import express from "express";

import morgan from "morgan";

import apiRouter from "./routes/api.js";

const app = express();

app.use(morgan("combined"));
app.use(express.json());

app.use("/api/v1", apiRouter)

//our movie will use api/v1/movies/

app.get("/api/v1", (req, res) =>{
    return res.status(200).json({message: "Welcome to the movie api"});
})

export default app;