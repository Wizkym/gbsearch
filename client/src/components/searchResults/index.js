import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

function SearchResults (props) {
    return(
        <div className="searchRes">
            {props.results.map(result => (
                <Card key={result.id}>
                    <Image src={result.volumeInfo.imageLinks.thumbnail} />
                    <Card.Content>
                        <Card.Header>{result.volumeInfo.title}</Card.Header>
                        <Card.Meta>Authors: {result.volumeInfo.authors}</Card.Meta>
                        <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            10 Friends
                        </a>
                    </Card.Content>
                </Card>
            ))}
        </div>
    )
}

export default SearchResults;