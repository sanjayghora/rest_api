const express = require('express');

require("./src/db/conn");

// const MensRanking = require("./src/models/userModel");
const router = require('./src/routers/men');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());


app.use(router);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})