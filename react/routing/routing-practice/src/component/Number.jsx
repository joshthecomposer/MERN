import React, { useDebugValue } from 'react'
import { useParams } from 'react-router-dom'

const Number = (props) => {
    const { input } = useParams();
    
    return (
        <div>
            {
                isNaN(input) ? 
                    <h1 className="text-4xl uppercase text-center m-5"> The word is: {input}</h1> :
                    <h1 className="text-4xl uppercase text-center m-5"> The number is: {input}</h1>
            }
        </div>
    )
}

export default Number