const express = require("express"); // Import express
const router = require("./router"); // Importe router module
const cors = require("cors"); // import cors

//App Init
const app = express();

app.use(express.json()); // Enable JSON in API Body

app.use(cors()); // User cors
app.use(router); // Enable router feature

module.exports = {
    app,
};
