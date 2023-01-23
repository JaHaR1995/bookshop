const Book = require("../models/Book.model");

module.exports.booksController = {
    addBooks: (req, res) =>{
        Book.create({
            name: req.body.name,
            author: req.body.author,
            genres: req.body.genres
        }).then((book)=>{
            res.json(book)
        })
        .catch((error) =>{
        res.json(error)
        })
    },

    deleteBooksById:(req, res) =>{
        Book.findByIdAndDelete(req.params.Id).then((book) =>{
        res.json(book)
        })
        .catch((error) =>{
            res.json(error)
            })
        },


        editBooksById:(req, res) =>{
            Book.findByIdAndUpdate(req.params.Id, {
                name: req.body.name, 
                author: req.body.author,
                genres: req.body.genres
            }).then((book) =>{
                res.json(book)
            })
            .catch((error) =>{
                res.json(error)
                })
        },

        getBooksById:(req, res) => {
            Book.findById(req.params.Id).then((book) =>{
                res.json(book)
            })
            . catch((error) =>{
               res.json(error)
           })
        },

        getBooks:(req, res) =>{
            Book.find().populate('genres').then((book) =>{
                res.json(book)
            })
            .catch((error) =>{
                res.json(error)
                })
        },

        getBooksByGenre:(req, res) => {
            Book.find({genres: req.params.genresId})
            populate('genres').then((book)=>{
                res.json(book)
            })
            .catch((error) =>{
                res.json(error)
            })
        }
    }
