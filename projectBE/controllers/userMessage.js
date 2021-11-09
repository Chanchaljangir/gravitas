const VisualizeData = require("./userMessage");


module.exports = {
    async addData(req, res) {
        let respObj = {
            IsSuccess: false,
            Message: "OK.",
            Data: null,
        };
        try {
            let result = await new VisualizeData(req.body).save()
            respObj.IsSuccess = true;
            respObj.Message = "Susscefully added"
            res.status(200).json(respObj);
        } catch (err) {
            respObj.error = err;
            (respObj.message = err.message || "Error while processing db query"),
                res.status(500).json(respObj);
        }
    },
    async getData(req, res) {
        let respObj = {
            IsSuccess: false,
            Message: "OK.",
            Data: null,
        };

        try {
            let filter = req.query.sort;
            // {$text: {$search: req.query.search}}
            let result = await VisualizeData.find().sort({ filter: 1 })

            respObj.IsSuccess = true;
            respObj.Data = result
            respObj.Message = "Susscefully get all data"
            res.status(200).json(respObj);

        } catch (err) {
            respObj.error = err;
            (respObj.message = err.message || "Error while processing db query"),
                res.status(500).json(respObj);
        }
    },

    async getSpecificData(req, res) {
        let respObj = {
            IsSuccess: false,
            Message: "OK.",
            Data: null,
        };

        try {
            let result = await VisualizeData.findById({ _id: req.params.dataId })

            respObj.IsSuccess = true;
            respObj.Data = result
            respObj.Message = "Succefully get all data"
            res.status(200).json(respObj);

        } catch (err) {
            respObj.error = err;
            (respObj.message = err.message || "Error while processing db query"),
                res.status(500).json(respObj);
        }
    },
}