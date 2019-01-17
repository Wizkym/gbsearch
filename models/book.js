const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    bookId: { type: String, required: true },
    authors: { type: String, required: true },
    link: { type: String, required: true },
    subtitle: String,
    img: String,
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;