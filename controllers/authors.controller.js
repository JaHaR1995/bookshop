const Author = require("../models/Author.model");

module.exports.authorsController ={
    addAuthor:(req, res) =>{
        Author.create({
            name: req.body.name,
            info: req.body.info
        }).then((author)=>{
        res.json(author)
        })
        .catch((error)=>{
       res.json(error)
        })
    },


    getAuthor:(req, res) =>{
        Author.find().then((author)=>{
            res.json(author)
            })
            .catch((error)=>{
           res.json(error)
            })
    }
}