import React from 'react';

const Cardthumb = ({ image, description }) => {
    return (

        <div className='thumbfilm m-2 p-2 text-center'>
            <img className='mx-auto w-1/4 lg:w-3/5  p-5' src={image}  alt={`film ${description}`} />
            <p>{description}</p>

        </div>

    );
};

export default Cardthumb;