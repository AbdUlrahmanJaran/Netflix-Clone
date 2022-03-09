import React, { useState, useEffect } from 'react';
import MoviesList from './MovieList';


export default function Home() {
    const [movies, setMovies] = useState([]);
  
  async function getData(){
     try {
      let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
      let data = await response.json();
      setMovies(data);
  } catch (error) {
    console.log(error)
  } 
    }
  
    useEffect(()=>{
      getData();
    },[]);
  
      return (
        <>
        <h1>From Home Page</h1>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
        {movies && <MoviesList movies={movies} />}
        </div>
        </>
    )
}