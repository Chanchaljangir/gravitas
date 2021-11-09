"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userMessageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    data: [{
        date: {
            type: Date,
        },
        value: String
    }],
    isDeleted: {
        type: Boolean,
        default: false,
    },
    toShow: {
        type: Boolean,
        default: false,
    },
}, {
    timestamp: true,
    autoIndex: true,
    versionKey: false,
});
let userMessage = mongoose.model("userMessage", userMessageSchema);

module.exports = userMessage;
