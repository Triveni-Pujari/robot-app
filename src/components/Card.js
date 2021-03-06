
import React from 'react';


const Card = ({name, email, id}) => {
    return (
 <div className='tc bg-light-green dib br3 pa2 mt4 mr2 grow bw3 shadow-4'>
     <img alt='robots' src={`https://robohash.org/${id}?200*200`} />
        <div>
             <h2>{name}</h2>
             <p>{email}</p>
        </div>
 </div>

    );
}

export default Card;