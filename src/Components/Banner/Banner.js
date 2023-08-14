import React, {useEffect, useState } from "react";
import "./Banner.css"
import { axiosInstanceForMovieData } from "../../axios"
import { TMDB_TRENDING_MOVIE_URL, TMDB_IMAGE_BASE_URL } from "../../constants/constants"



function Banner() {

    const [movieData, setMovieData] = useState('');

    useEffect(() => {

        axiosInstanceForMovieData.get(TMDB_TRENDING_MOVIE_URL).then((response) => {

            const randomIndex = Math.floor(Math.random() * response.data.results.length);

            setMovieData(response.data.results[randomIndex]);

        });


    }, []);
    



    return(
        
        <div className="banner" style={{ backgroundImage: `url(${movieData ? TMDB_IMAGE_BASE_URL + movieData.backdrop_path : ""})`}} >

            <div className="content" >

                <h1 className="title"> {movieData ? movieData.title : ""} </h1>

                <div className="banner_buttons">

                    <button className="button"> Play </button>
                    <button className="button"> My List </button>

                </div>

                <h1 className="description"> {movieData ? movieData.overview : "" } </h1>

                <p>asas</p>

            </div>

            <div className="fade_bottom">

            </div>

        </div>

    )

}

export default Banner;
