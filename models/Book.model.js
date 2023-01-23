
const mongoose = require('mongoose')
const bookSchema = mongoose.Schema({
    name: String,
    author: String,
    genres:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Genre',
    }

})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book;