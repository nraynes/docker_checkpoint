import app from "./app.js";
import db from './db/db.js';
let port = 1000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})