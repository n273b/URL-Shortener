import React, { useState } from 'react'
import './App.css'

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("")

  const handleClick = () => {
    setInputValue(value)
    setValue("")
  }

  return (
    <div className='inputContainer'>
        <h1>URL <span>Shortener</span></h1>
        <form action='/shortUrls' method='POST'>
            <input 
              type="url"
              name='fullURL'
              id='fullURL'
              placeholder='Paste a link to shorten it'
              required
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <button type='submit' onClick={handleClick}>Shorten</button>
        </form>
    </div>
  )
}

export default InputShortener