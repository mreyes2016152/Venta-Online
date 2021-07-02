'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = Schema({
    nameCategory: String,
    products:[{ type: Schema.ObjectId, ref:'product'}]
})

module.exports = mongoose.model('category', categorySchema);