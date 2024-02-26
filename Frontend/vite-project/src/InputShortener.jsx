import React, { useState } from 'react'
import './App.css'

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("")


  return (
    <div className='inputContainer'>
        <h1>URL Shortener</h1>
        <div>
            <input 
            type="text" 
            placeholder='Paste a link to shorten it'
            value={value}
            />
            <button>Shorten</button>
        </div>
    </div>
  )
}

export default InputShortener