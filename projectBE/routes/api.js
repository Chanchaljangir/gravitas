let express = require('express');
let router = express.Router();
let chartData = require("../controllers/userMessage")

router.post("/data", chartData.addData);
router.get("/data", chartData.getData);
router.get("/specificData/:dataId", chartData.getSpecificData);

module.exports = router;