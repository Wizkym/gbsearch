import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import API from "../../utils/API";
import NAV from "../../components/Nav";
import Nav from "../../components/Nav/Nav";

class Saved extends Component {
    state = {
        books: [],
        query: ""
    };

    render() {
        return (
            <div>
                <Container>
                    <Nav/>
                    <h1>THIS IS SAVED*****</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                        link mollis pretium. Integer tincidunt.
                    </p>
                </Container>
            </div>
        )
    }

}

export default Saved;