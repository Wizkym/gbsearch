import React, { Component } from "react";
import { Button, Container, Grid, Icon, Image, Card } from "semantic-ui-react";
import API from "../../utils/API";
import Nav from "../../components/Nav";

class Saved extends Component {
    state = {
        books: [],
    };

    componentDidMount() {
        this.loadBooks();
    }

    // Loads all saved books and sets them to this.state.books
    loadBooks = () => {
        API.getBooks()
            .then(res => {
                this.setState({ books: res.data });
            })
            .catch(err => console.log(err));
    };

    // Deletes a saved book from the database
    handleBookDelete = (id) => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Container>
                    <Nav/>
                    <h1>Here are your favorite books...</h1>
                    <Grid style={{marginTop: "20px"}}>
                        {this.state.books.map(book => (
                            <Grid.Column computer={4} mobile={16} tablet={8} key={book.bookId}>
                                <Card className="centered" style={{height: 450}}>
                                    <Image size='small' src={book.img} style={{height: 232}} />
                                    <Card.Content>
                                        <Card.Header>{book.title}</Card.Header>
                                        <Card.Meta>Authors: {book.authors}</Card.Meta>
                                        <Card.Description>{book.subtitle}</Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                                            <Icon name='linkify' />
                                            Click to view
                                        </a>
                                        <Button basic color='red' floated='right' onClick={() => this.handleBookDelete(book._id)}>
                                            Delete
                                        </Button>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        ))}
                    </Grid>
                </Container>
            </div>
        )
    }

}

export default Saved;