// server/index.js
const express = require("express");
const dbService = require('../demo_db_connection')
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/products", (req , res) =>{

    const db = dbService.getDbServiceInstance()
    const result = db.getAllData()
    // res.send(result)
    result
        .then(data => res.json( data))
        .catch(err => console.log(err))
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

