import React from 'react'
import { useParams } from 'react-router-dom'

const Color = () => {
    const { input, txt, bg } = useParams();
    return (
        <div>
            {
                isNaN(input) ?
                    <h1 className={`text-4xl uppercase text-center m-5`} style={{ backgroundColor: bg, color: txt }}>The word is: {input}</h1> :
                    <h1 className={`text-4xl uppercase text-center m-5`} style={{ backgroundColor: bg, color: txt }}>The number is: {input}</h1>
            }
        </div>
  )
}

export default Color