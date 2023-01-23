const Review = require("../models/Review.model");

module.exports.reviewsController ={
    addReviewByBook:(req, res) =>{
        Review.create({
            text: req.body.text,
            name: req.body.name,
            book: req.body.book
        }).then((review) => {
            res.json(review)
        })
        .catch((error) => {
            res.json(error)
        })
    },

    deleteReviewById:(req, res) =>{
        Review.findByIdAndDelete(req.params.Id).then((review)=>{
       res.json(review)
        }).catch((error) => {
        res.json(error)
    })
    },

    getReviewByBook:(req, res) =>{
        Review.findById(req.params.Id).populate('book').then((review)=>{
            res.json(review)
             }).catch((error) => {
                res.json(error)
            })
    }
}
