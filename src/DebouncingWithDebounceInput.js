import React from 'react'
import { DebounceInput } from 'react-debounce-input'

const DebouncingWithDebounceInput = () => {
  const [suggestions, setSuggestions] = React.useState([])

  const handleChange = (value) => {
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSuggestions(json.data.items))
  }

  return (
    <div>
      <DebounceInput
        minLength={2}
        style={{ width: 400, height: 30, padding: 10 }}
        className='search'
        placeholder='Enter something here...'
        debounceTimeout={500}
        onChange={(e) => handleChange(e.target.value)}
      />

      <div>
        {suggestions.map((item, index) => (
          <ul>{item.name}</ul>
        ))}
      </div>
    </div>
  )
}

export default DebouncingWithDebounceInput
