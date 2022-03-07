import React from 'react';
import Movie from './Movie';

export default function MoviesList({ movies }) {
    return (
        <>
            {
                movies.map((movie, i) => {
                    return (
                        <div key={i}>
                            <Movie movie={movie} />
                        </div>
                    )
                })
            }
        </>
    )
}