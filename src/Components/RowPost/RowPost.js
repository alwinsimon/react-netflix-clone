import React from 'react';

import './RowPost.css';
import { CARD } from '../../utils/constants';


function RowPost() {
    
    return (

        <div className='row'>

            <h2>Title</h2>

            <div className='posters'>

                <img className='poster' alt='poster' src={CARD} />
                <img className='poster' alt='poster' src={CARD} />
                <img className='poster' alt='poster' src={CARD} />
                <img className='poster' alt='poster' src={CARD} />
                <img className='poster' alt='poster' src={CARD} />
                <img className='poster' alt='poster' src={CARD} />
                <img className='poster' alt='poster' src={CARD} />
                <img className='poster' alt='poster' src={CARD} />
                <img className='poster' alt='poster' src={CARD} />
                <img className='poster' alt='poster' src={CARD} />
                <img className='poster' alt='poster' src={CARD} />
                <img className='poster' alt='poster' src={CARD} />
                <img className='poster' alt='poster' src={CARD} />

            </div>

        </div>

    );
}

export default RowPost