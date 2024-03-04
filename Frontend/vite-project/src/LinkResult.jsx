import React, { useState } from 'react'
import './App.css'

const LinkResult = ({inputValue}) => {
    console.log(inputValue)
    const [shortenLink, setShortenLink] = useState("Hello world!")
    return (
        <div className='result'>
            <p>{shortenLink}</p>
            <button>Copy to clipboard</button>
        </div>
    )
}

export default LinkResult