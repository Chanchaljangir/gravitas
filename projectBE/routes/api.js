let express = require('express');
let router = express.Router();
let visualizeData = require("../controllers/userMessage")

router.post("/data", visualizeData.addData);
router.get("/data", visualizeData.getData);
router.get("/specificData/:dataId", visualizeData.getSpecificData);

module.exports = router;