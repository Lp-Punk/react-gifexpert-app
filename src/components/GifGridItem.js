import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    
    /*console.log({id, title, url});*/

    return(
        <div className='card'>
            <img src={ url } alt={title} title={title} loading="lazy" />
            <p>{title}</p>
        </div>
    )

}