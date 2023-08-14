import React, {useEffect, useState} from 'react';

import './RowPost.css';
import { axiosInstanceForMovieData } from '../../axios';
import { TMDB_IMAGE_BASE_URL } from '../../constants/constants';


function RowPost(props) {

    const [suggestedMovies, setSuggestedMovies] = useState([]);

    useEffect(() => {
      
        axiosInstanceForMovieData.get(props?.url).then((response) => {

            setSuggestedMovies(response.data.results);

        }).catch((error) => {

            console.log(error);

        });

    }, [])
    

    
    return (

        <div className='row'>

            <h2>{props?.title}</h2>

            <div className='posters'>

                {
                
                    suggestedMovies.map((movie)=>{

                        return <img className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${TMDB_IMAGE_BASE_URL + movie.backdrop_path}`} />

                    })
                    
                }

            </div>

        </div>

    );
}

export default RowPost