import React from 'react';
import stranger from './stranger.png'
export default function BigfiveCard(prop) {
    return (
        <div className='big_five_card'>
            <img src={stranger}/>
            <h4>{prop.name}</h4>
            <p>Rank: {prop.rank}</p>
        </div>
    )
}