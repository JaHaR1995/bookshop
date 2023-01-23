
const mongoose = require('mongoose')
const genreSchema = mongoose.Schema({
    name: String,
    descript: String,
    

})

const Genre = mongoose.model('Genre', genreSchema)

module.exports = Genre;