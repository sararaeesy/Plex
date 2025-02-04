import { Fragment, useEffect, useState } from "react";
import "./MovieList.style.css";
import axios from "axios";

export default function MovieList({title, page}){
    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(function(){
    //     axios.get("https://moviesapi.ir/api/v1/movies", {params:{
    //         page:5,
    //     },
    // })
    axios.get(`https://moviesapi.ir/api/v1/movies?page=${page}`)
            .then(function(response){
            setMovies(response.data.data)
            setLoading(false)
        })
        .catch(function(error){})
        setLoading(false)
    },[page])
    function renderMovies(){
        return movies.map(function({id, title, poster}){
            return <li key={id}>
            <img alt={title} src={poster} />
            <h5>{title}</h5>
            </li>
        })
    }
    function render(){
        if(loading){
            return  <div> Loading...</div>
        }else{
            return (
            <Fragment>
            <h2>{title}</h2>
            <ul>{renderMovies()}</ul>
            </Fragment>
            );
            
        }
    }

    return(
        <div className="movie-list">
            {/* {loading ? (
                <div> Loading...</div>)
                :(
            <Fragment>
            <h2>{title}</h2>
            <ul>{renderMovies()}</ul>
            </Fragment>
                )} */}
                {render()}
        </div>
            )}

