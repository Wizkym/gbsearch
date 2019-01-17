import React from "react";
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react'

function SearchResults (props) {
    return(
        <Grid style={{marginTop: "20px"}}>
            {props.results.map(result => (
                <Grid.Column computer={4} mobile={16} tablet={8} key={result.id}>
                    <Card className="centered" style={{height: 450}}>
                        <Image size='small' src={result.volumeInfo.imageLinks.thumbnail} style={{height: 232}} />
                        <Card.Content>
                            <Card.Header>{result.volumeInfo.title}</Card.Header>
                            <Card.Meta>Authors: {result.volumeInfo.authors}</Card.Meta>
                            <Card.Description>{result.volumeInfo.subtitle}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a href={result.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                                <Icon name='linkify' />
                                Click to view
                            </a>
                            <Button basic color='green' floated='right' onClick={() => props.handleBookSave(
                                {
                                    bookId: result.id,
                                    img: result.volumeInfo.imageLinks.thumbnail,
                                    title: result.volumeInfo.title,
                                    authors: result.volumeInfo.authors,
                                    subtitle: result.volumeInfo.subtitle,
                                    link: result.volumeInfo.previewLink
                                })}>
                                Save
                            </Button>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            ))}
        </Grid>

    )
}

export default SearchResults;