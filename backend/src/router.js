const express = require("express");
const ixcController = require("../controllers/ixcController");

const router = express.Router();

router.get("/", ixcController.getClients);

module.exports = router;
