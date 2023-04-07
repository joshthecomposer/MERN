import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Word = (props) => {
    const { userWord } = useParams();
    return (
        <div>
            <h2>Word Component</h2>
            <p>You typed in: {userWord}</p>
        </div>
    )
}

export default Word;