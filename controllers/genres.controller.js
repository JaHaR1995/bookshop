const Genre= require("../models/Genre.model");
module.exports.genresController ={
    addGenre:(req, res) =>{
        Genre.create({
            name: req.body.name,
            descript: req.body.descript
        }).then((genre)=>{
            res.json(genre)
        })
        .catch((error) =>{
        res.json(error)
        })
    },

    deleteGenreById:(req, res) =>{
        Genre.findByIdAndDelete(req.params.Id).then((genre) =>{
        res.json(genre)
        })
        .catch((error) =>{
        res.json(error)
       })
    },


    getGenre:(req, res) =>{
        Genre.find().then((genre) =>{
        res.json(genre)
        })
        .catch((error) =>{
       res.json(error)
        })
    },
}