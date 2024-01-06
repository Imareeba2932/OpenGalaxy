const {Schema, model} = require('../connection');

const myschema = new Schema({
    intern : Object,
    project : Object,
    status : {type:String, default: "pending"},
    contributions : Array,
    createdAt: Date
});

module.exports = model('enroll',myschema);
