import React, { Component } from "react";
import { Container, Input, Button } from "semantic-ui-react";
import Nav from "../../components/Nav";
import API from "../../utils/API";
import SearchResults from "../../components/searchResults";

class Search extends Component {
    state = {
        default: [],
        query: "",
        results: [],
    };

    componentDidMount() {
        API.getDefaultBooks()
            .then(res => {
                console.log("DEFAULT", res.data.items);
                this.setState({ default: res.data.items });
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.searchGoogleBooks(this.state.query)
            .then(res => {
                //this.setState({ results: res.data.message});
                console.log(res.data.items);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Container>
                    <Nav/>
                    <h3>Discover Books from Google Books....</h3>
                    <Input fluid icon='search' placeholder='Search...' name="query" value={this.state.query} onChange={this.handleInputChange} />
                    <Button color="green" style={{ marginTop: "10px" }} type='submit' onClick={this.handleFormSubmit}>GO</Button>
                    <SearchResults results={this.state.default} />
                </Container>
            </div>
        )
    }
}

export default Search;