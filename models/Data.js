'use strict';
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dataSchema = new Schema({
    uri: String,
    acesstime: {
      type: Date,
      default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    request_method: String,
    user_agent: String
})

module.exports = mongoose.model("Data", dataSchema);