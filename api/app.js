import db from "./db/db.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

db.any("DROP TABLE IF EXISTS greeting;")
    .then(() => {
        db.any(`CREATE TABLE greeting("greeting_id" SERIAL NOT NULL UNIQUE PRIMARY KEY, "greeting_text" varchar NOT NULL);`)
            .then(() => {
                db.any(`INSERT INTO greeting("greeting_text") VALUES('Welcome to your Dockerized Express/React full-stack app!');`)
            })
    })

app.get("/acquire", (req, res) => {
    db.any(`SELECT "greeting_text" FROM greeting ORDER BY "greeting_id" DESC LIMIT 1;`)
        .then((data) => {
            res.send(data);
        })
})


export default app;