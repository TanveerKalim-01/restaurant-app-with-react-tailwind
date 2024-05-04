import React from 'react'

function Img({ url }) {
    return (
        <img  className='w-full aspect-square rounded-xl group-hover:scale-105 duration-300' src={url} alt="image" />
    )
}

export default Img