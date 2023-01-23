const { Router } = require("express");
const { booksController } = require("../controllers/books.controller");

const router = Router();

router.post("/books",booksController.addBooks);
router.delete("/books/:Id", booksController.deleteBooksById);
router.patch("/books/:Id", booksController.editBooksById);
router.get("/books/:Id", booksController.getBooksById);
router.get("/books",  booksController.getBooks);
router.get("books/genre/:genresId",  booksController.getBooksByGenre)


module.exports = router 