const Book = require("../models/book");
const validateID = require("../utils/validateID");

// Retrieve list of all books
const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ books });
  } catch (error) {
    next(customError("Error fetching all data", 500));
  }
};

// Retrieve details for a specific book by its ID
const getSingleBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await Book.findOne({ _id: bookId });
    res.status(200).json({ success: true, book });
  } catch (error) {
    console.log(error.message);
    res.status(error.status || 500).json({ error: error.message });
  }
};

// Create a new book
const createBook = async (req, res) => {
  const { title, author, genre } = req.body;
  if (!title || !author || !genre) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  try {
    const book = await Book.create(req.body);
    res.status(201).json({ message: "Book Created Successfully!!!", book });
  } catch (error) {
    console.log(error);
    console.log(error.code);
    if (error.code === 11000) {
      return res.status(400).json({ error: "This book has been registered" });
    }

    res.status(error.status || 500).json({ error: error.message });
  }
};

// if (!validateID(id)) {
//   return res.status(400).json({ message: `"ID": ${id} is not valid` });
// }

// Update an existing book by ID

const updateBook = async (req, res) => {
  const { Id } = req.params;
  try {
    const book = await Book.findOneAndUpdate({ _id: Id }, { ...req.body });
    res.status(200).json({ message: "Book Updated Successfully!!!", book });
  } catch (error) {
    console.log(error.message);
    res.status(error.status || 500).json({ error: error.message });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  const { Id } = req.params;
  const book = await Book.findOneAndDelete({ _id: Id });
  res.status(200).json({ message: "Book Deleted Successfully!!!" });
};

module.exports = {
  getAllBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
};
