const express = require("express"); // import express
const ixcController = require("../controllers/ixcController"); // import controller module "IXC"

const router = express.Router(); // init router

router.get("/", ixcController); // first endpoint

module.exports = router;
