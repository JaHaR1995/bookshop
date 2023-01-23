const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

router.post("/reviews",reviewsController.addReviewByBook);
router.delete("/reviews/:Id", reviewsController.deleteReviewById);
router.get("/reviews/:Id", reviewsController.getReviewByBook); 



module.exports = router 