import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";
import "./style.css";


class Nav extends Component {
    state = { activeItem: 'SEARCH' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        return (
            <div className="my-nav">
                <Segment inverted>
                    <Menu inverted secondary>
                        <Menu.Menu>
                            <Menu.Item>
                                GB Search
                            </Menu.Item>
                        </Menu.Menu>
                        <Menu.Menu position="right">
                            <Menu.Item  as={ Link } name='SEARCH' to="/" active={activeItem === 'SEARCH'} onClick={this.handleItemClick} />
                            <Menu.Item as={ Link } name='SAVED' to="/saved" active={activeItem === 'SAVED'} onClick={this.handleItemClick} />
                        </Menu.Menu>
                    </Menu>
                </Segment>
            </div>
        )
    }
}

export default Nav;