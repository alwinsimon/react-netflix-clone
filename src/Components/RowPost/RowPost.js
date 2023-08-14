import React, {useEffect, useState} from 'react';
import YouTubePlayer  from 'react-youtube';

import './RowPost.css';
import { axiosInstanceForMovieData } from '../../axios';
import { TMDB_IMAGE_BASE_URL } from '../../constants/constants';


function RowPost(props) {

    const [suggestedMovies, setSuggestedMovies] = useState([]);

    const [movieDataForYoutubeSearch, setMovieDataForYoutubeSearch] = useState(false);

    useEffect(() => {
      
        axiosInstanceForMovieData.get(props?.url).then((response) => {

            setSuggestedMovies(response.data.results);

        }).catch((error) => {

            console.log(error);

        });

    }, []);

    const opts = {

      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 0
      }

    };

    const handleMoviePosterClick = (movieId) => {

        axiosInstanceForMovieData.get(`/movie/${movieId}/videos?api_key=5605240ea0cb07737fac744ddafcbef4&language=en-US`).then((movieDetails)=>{
            
            if (movieDetails.data.results.length > 0) {

                setMovieDataForYoutubeSearch(movieDetails.data.results[0]);
            
            }else{

                const movieDetails = { key:"Y1DZZvTnOH8"};

                setMovieDataForYoutubeSearch(movieDetails);

            }

        }).catch((error)=> {

            const movieDetails = { key:"Y1DZZvTnOH8"};
            setMovieDataForYoutubeSearch(movieDetails);

            console.log(error);

        });

    }

    const handleVideoClick = () => {
        
        setMovieDataForYoutubeSearch();

    }
    

    
    return (

        <div className='row'>

            <h2>{props?.title}</h2>

            <div className='posters'>

                {
                
                    suggestedMovies.map((movie, index)=>{

                        return <img className={props.isSmall ? 'smallPoster' : 'poster'} key={index} alt='poster' src={`${TMDB_IMAGE_BASE_URL + movie.backdrop_path}`} onClick={()=>handleMoviePosterClick(movie.id)} />

                    })
                    
                }

            </div>

            {movieDataForYoutubeSearch && < YouTubePlayer videoId={movieDataForYoutubeSearch.key} opts={opts} />}
            {movieDataForYoutubeSearch && <button className="button" onClick={()=>handleVideoClick()} > Close Trailer </button> }

        </div>

    );
}

export default RowPost