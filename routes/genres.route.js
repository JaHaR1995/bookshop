const { Router } = require("express");
const { genresController } = require("../controllers/genres.controller");

const router = Router();

router.post("/genres",genresController.addGenre);
router.delete("/genres/:Id", genresController.deleteGenreById);
router.get("/genres", genresController.getGenre); 



module.exports = router 