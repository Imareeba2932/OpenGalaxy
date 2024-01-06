const {Schema, model} = require('../connection');

const myschema = new Schema({
    intern : Object,
    project : Object,
    status : {type:String, default: "pending"},
    summary : String,
    submitAt: Date
});

module.exports = model('report',myschema);
