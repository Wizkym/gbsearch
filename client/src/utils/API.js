import axios from "axios";

export default {
    // Gets all books
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // Searches for a book from the Google Books API using the typed query
    searchGoogleBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },
    // Loads default books from the API on load
    getDefaultBooks: function () {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=Harry+Potter");
    }
};
