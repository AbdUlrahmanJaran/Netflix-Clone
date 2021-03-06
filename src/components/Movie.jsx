import React from 'react';
import Card from 'react-bootstrap/Card';

import ModalMovie from './ModalMovie';

export default function Movie({movie}){
    return (
        <Card key={movie.id}>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.release_date}
                </Card.Text>
                <Card.Text>
                    {movie.overview}
                </Card.Text>
            </Card.Body>
             <ModalMovie movies={movie} />
        </Card>

    )
}