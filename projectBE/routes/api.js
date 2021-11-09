let express = require('express');
let router = express.Router();
let chartData = require("../controllers/userMessage")

router.post("/chartdata", chartData.addData);
router.get("/chartdata", chartData.getData);
router.get("/specificData/:dataId", chartData.getSpecificData);

module.exports = router;