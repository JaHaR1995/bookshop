const mongoose = require('mongoose')
const authorSchema = mongoose.Schema({
    name: String,
    info: String,
    rewiew:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'rewiew'
    }
    

})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author;