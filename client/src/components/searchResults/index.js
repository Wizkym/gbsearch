import React from "react";
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react'

const styles = {
    card: {
        height: 450
    },
    cardContent: {
        height: 131,
        overflowY: "auto"
    },
    img: {
        height: 232
    }
};

function SearchResults (props) {
    return(
        <Grid style={{marginTop: "20px"}}>
            {props.results.map(result => (
                <Grid.Column computer={4} mobile={16} tablet={8} key={result.id}>
                    <Card className="centered" style={styles.card}>
                       { result.volumeInfo.imageLinks ?
                           result.volumeInfo.imageLinks.thumbnail ?
                                <Image size='small' src={result.volumeInfo.imageLinks.thumbnail} style={styles.img} />
                                    : <Image size='small' src="https://hazlitt.net/sites/default/files/default-book.png" style={styles.img} />
                            : <Image size='small' src="https://hazlitt.net/sites/default/files/default-book.png" style={styles.img} />
                       }
                        <Card.Content style={styles.cardContent}>
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
                                    img: result.volumeInfo.imageLinks ?
                                            result.volumeInfo.imageLinks.thumbnail ?
                                                result.volumeInfo.imageLinks.thumbnail
                                                    : "https://hazlitt.net/sites/default/files/default-book.png"
                                            : "https://hazlitt.net/sites/default/files/default-book.png",
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