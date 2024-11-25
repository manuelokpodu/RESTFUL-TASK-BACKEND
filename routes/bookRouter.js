const express = require("express");
const {
  getAllBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controller/bookController");

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:bookId", getSingleBook);
router.post("/create", createBook);
router.patch("/:id", updateBook);
router.delete("/:bookId", deleteBook);

module.exports = router;
