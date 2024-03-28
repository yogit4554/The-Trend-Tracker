import React,{useState , useEffect} from 'react'
import {NavLink,useParams} from "react-router-dom";
import {API_URL} from "./Context";

const Singlemovie = () => {
  const {id}=useParams();

  const [isLoading,setIsLoading]=useState(true);
  const [movie,setMovie]=useState("");
  
    const getMovies = async(url)=>{
      try{
        const res=await fetch(url);
        const data=await res.json();
        console.log(data);
        if(data.Response === "True"){
          setIsLoading(false);
          setMovie(data);
        }
      }catch (error){
        console.log(error);
      }
    };

   useEffect( ()=>{
//Debouncing it means wait to search 
    let timerOut = setTimeout(()=>{
      getMovies(`${API_URL}&i=${id}`);
    },800);

    return ()=>clearTimeout(timerOut);
   },[id]);

   if(isLoading){
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    )
   }
  return (
    <section className="movie-section">
    <div className="movie-card">
      <figure>
        <img src={movie.Poster} alt=""/>
      </figure>
      <div className="card-content">
      <p className="title">{movie.Title}</p>
      <p className="card-text">Released Date: {movie.Released}</p>
      <p className="card-text">Type: {movie.Type}</p>
      <p className="card-text">Genre: {movie.Genre}</p>
      <p className="card-text">IMDB Rating: {movie.imdbRating}/10</p>
      <p className="card-text">Language: {movie.Language}</p>
      <p className="card-text">Country: {movie.Country}</p>
      <p className="card-text">Director: {movie.Director}</p>
      <p className="card-text">Awards: {movie.Awards}</p>
      <p className="card-text">BoxOffice Collection: {movie.BoxOffice}</p>
      <NavLink to="/" className="back-btn">Back</NavLink>
      </div>
    </div>
    </section>
  );
};

export default Singlemovie;