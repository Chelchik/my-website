import React, { useContext } from 'react'
import { ThemeContext } from '../context'

function FilmItem({slide, styles, imgStyle}) {
    return (
    <div style={styles}> 
        <img src={slide.url} alt="" style={imgStyle}  />

        <div className='info'>
            <h3>{slide.title}</h3>

            <span>
                {slide.description}
            </span>
        </div>
    </div>
  )
}

export default FilmItem