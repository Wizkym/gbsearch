import React, { Component } from "react";
import { Container, Input, Button, Modal } from "semantic-ui-react";
import Nav from "../../components/Nav";
import API from "../../utils/API";
import SearchResults from "../../components/searchResults";

class Search extends Component {
    state = {
        query: "",
        results: [],
        saved: [],
        open: false
    };

    show = () => this.setState({ open: true });
    close = () => this.setState({ open: false });

    componentDidMount() {
       this.loadDefaultBooks();
       this.getSavedBooks();
    }

    // Loads default books and gets saved book ids
    loadDefaultBooks = () => {
        API.getDefaultBooks()
            .then(res => {
                console.log(res.data.items);
                this.setState({ results: res.data.items });
            })
            .catch(err => console.log(err));
    };

    // Gets all saved books and saves the book titles for later
    getSavedBooks = () => {
        API.getBooks()
            .then(res => {
                if (res.data) {
                    for(let x = 0; x < res.data.length; x++) {
                        this.state.saved.push(res.data[x].bookId);
                    }
                }
            })
            .catch(err => console.log(err));
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, this function searches for the books from the API and updates state
    handleFormSubmit = event => {
        event.preventDefault();
        API.searchGoogleBooks(this.state.query)
            .then(res => {
                console.log(res.data.items);
                this.setState({ results: res.data.items});
            })
            .catch(err => console.log(err));
    };

    // Saves selected book on click
    handleBookSave = data => {
        // Only save the book if it is not in our database
        if (!this.state.saved.includes(data.bookId)){
            API.saveBook(data)
                .then(res => this.getSavedBooks)
                .catch(err => console.log(err));
        } else {
            this.show();
        }
    };

    render() {
        return (
            <div>
                <Container>
                    <Nav/>
                    <h3>Discover Books from Google Books....</h3>
                    <Input fluid icon='search' placeholder='Search...' name="query" value={this.state.query} onChange={this.handleInputChange} />
                    <Button color="green" style={{ marginTop: "10px" }} type='submit' onClick={this.handleFormSubmit}>GO</Button>
                    <SearchResults
                        results={this.state.results}
                        handleBookSave={this.handleBookSave}
                    />
                    <Modal size='small' open={this.state.open} onClose={this.close}>
                        <Modal.Header>Duplicate Alert</Modal.Header>
                        <Modal.Content>
                            <p>This book is saved already!</p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button onClick={this.close}>Close</Button>
                        </Modal.Actions>
                    </Modal>
                </Container>
            </div>
        )
    }
}

export default Search;
