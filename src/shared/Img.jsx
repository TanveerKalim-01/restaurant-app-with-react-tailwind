import React from 'react'

function Img({ url }) {
    return (
        <img className='w-max-full border-[#3D0818] border-2 border-b-8 rounded-xl group-hover:scale-105 duration-200' src={url} alt="image" />
    )
}

export default Img